import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import OrdersRow from './OrdersRow';

const Orders = () => {

    const { user } = useContext(AuthContext)

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    const handleUpdate = id =>
    {
        fetch(`http://localhost:5000/orders/${id}`,{
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({status:'Approved'}),
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.modifiedCount>0)
            {
                const remaining = orders.filter(ord =>ord._id !== id)
                const approving = orders.find(ord =>ord._id ===id)
                approving.status = 'Approved'
                const newOrder = [approving,...remaining]
                setOrders(newOrder)
            }
          })
        
    }

    const handleDelete = id =>{
        const procced= window.confirm('Are you sure you want to delete')
        if(procced)
        {
            fetch(`http://localhost:5000/orders/${id}`,{
                method:'DELETE',
            })
            .then(res=>res.json())
            .then(data=>
                {
                    if(data.deletedCount > 0){
                       
                        const filter = orders.filter(ord => ord._id !== id)
                        setOrders(filter)
                        alert('your order is deleted')
                    }
                })
        }
    }

    return (
        <div>
            <h2>You have {orders.length} orders</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                <thead>
      <tr>
      <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Message</th>
        <th></th>
      </tr>
    </thead>
                    <tbody>
                       
                    
                    {
                            orders.map(order => <OrdersRow key={order._id} order={order} handleDelete={handleDelete} handleUpdate={handleUpdate}></OrdersRow>)
                        }
                    
                    </tbody>
                </table>
            </div>


            
        </div>
    );
};

export default Orders;