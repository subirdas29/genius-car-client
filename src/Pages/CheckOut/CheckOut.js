import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData()
    const {user} = useContext(AuthContext)
    const {_id,title,price} = service;
    
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.FirstName.value} ${form.LastName.value} `;
        const phone = form.PhoneNumber.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        const order={
            Service:_id,
            Service_Name:title,
            Customer: name,
            phone,
            email,
            message,
        }

        if(phone.length>11)
        {
            alert('Phone number should be 11 digit')
        }
        else{
            fetch('http://localhost:5000/orders/', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(order),
              })
                .then((response) => response.json())
                .then((data) => {
                  if(data.acknowledged){
                      alert('Successfully ordered')
                      form.reset();
              
                  };
                })
                .catch((error) => {
                  console.error('Error:', error);
                });

        }

        


    }
   

    return (
       <div >
       
<form  onSubmit={handleSubmit}>
<p className='text-4xl text-center my-5'>You are to order : {title}</p>
        <p className='text-3xl text-center'>Price : {price}</p>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 my-10'>
           <input type="text" name='FirstName' placeholder="Your First Name" className="input input-bordered w-full " />
            <input type="text" name='LastName' placeholder="Your Last Name" className="input input-bordered w-full " />
            <input type="text" name='PhoneNumber' placeholder="Your Phone number" className="input input-bordered w-full " required />
            <input type="text" name='Email' placeholder="Your Email " defaultValue={user?.email} className="input input-bordered w-full " readOnly />
           </div>
           <div >
           <textarea className="textarea textarea-primary w-full mb-10" name="message" placeholder="Bio"></textarea>
           </div>
            <button className="btn btn-warning w-64 mb-20">Get Your order</button>
        </form>
       </div>
    );
};

export default CheckOut;