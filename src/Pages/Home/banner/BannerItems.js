import React from 'react';
import './banneritems.css'

const BannerItems = ({slide}) => {
    const {image,id,prev,next}= slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
    <div className='carousel-img'>
    <img src={image} alt='' className="w-full rounded-lg" />
    </div>

    <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-1/4 font-bold">
      <h2 className='font-bold text-6xl text-white'>
    Affordable <br/>
    Price For Car <br/> 
    Servicing
      </h2>
    </div>

    <div className="absolute flex justify-start transform -translate-y-1/2 left-20 top-1/2 font-bold">
      <h2 className='font-normal text-lg w-2/5 text-white'>
      There are many variations of passages of  available, but the majority have suffered alteration in some form
      </h2>
    </div>

    <div className="absolute flex justify-start transform -translate-y-1/2 left-20 top-3/4 font-bold">
    <button className="btn btn-warning mr-5">Discover More</button>
    <button className="btn btn-outline btn-warning">Latest Project</button>
    </div>

    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
      <a href={`#slide${next}`} className="btn btn-circle">❯</a>
    </div>
  </div> 
    );
};

export default BannerItems;