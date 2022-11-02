import React from 'react';

const ServiceCard = ({service}) => {
    const {title,price,img} = service;
    
    return (
        <div>
               <div className="card card-compact w-96 bg-base-100 shadow-xl p-6">
  <figure><img className='w-[400px] h-[225px]' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{title}</h2>
    <p className="font-semibold text-xl text-[#FF3811]">Price : ${price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;