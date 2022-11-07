import React, { useEffect, useState } from 'react';

const OrdersRow = ({order,handleDelete,handleUpdate}) => {
    const{Service_Name, phone, Customer,Service,_id,status} = order;
    

    const [orderService,setOrderService] = useState({});
    

    useEffect(()=>
    {
        fetch(`http://localhost:5000/services/${Service}`)
        .then(res=>res.json())
        .then(data => setOrderService(data))
    },[Service])

    return (
       
 
      <tr>
        <th>
          <label>
           <button onClick={()=>handleDelete(_id)} className='btn btn-ghost'>X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{Customer}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>
          {Service_Name
}
          <br/>
          <span className="badge badge-ghost badge-sm">${orderService.price}</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs" onClick={()=>handleUpdate(_id)}>{status? status : 'pending'}</button>
        </th>
      </tr>
      

    );
};

export default OrdersRow;