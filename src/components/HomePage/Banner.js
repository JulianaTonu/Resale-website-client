import React from 'react';
import img1 from  '../../images/slider2.png'
const Banner = () => {
    return (
        <div className="hero min-h-1/2 w-4/5 mx-auto" >
            <img src={img1} alt="" />
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-start ">
          <div className="lg:w-1/2 lg:mr-52">
            <h1 className="mb-5 text-6xl font-bold uppercase"><span className='text-purple-500'>Sale</span> your  <br /> <span className='text-purple-500'>old</span> phone Today</h1>
            <p className="mb-5">If you want to sell your old phone but not getting customer then add your phone details now.Because this is the place where sellers can sell their old  phone and buyers can easily buy those easily.</p>
            <button className="btn bg">Sell old phone</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;