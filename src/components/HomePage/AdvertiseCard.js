import React from 'react';


const AdvertiseCard = ({product}) => {


  
  const {category,product_name,img,
    price,location,phone,details,used}= product

  
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-purple-500 font-bold">
            {product_name}  
          </h2>
          
          <p>Category: {category}</p>
          <p>Resale Price: ${price}</p>
          <p>Years of used: {used}yrs</p>
          <p>Location:{location}</p>
          <p>Contact:{phone}</p>
          <p>{details}</p>
          <div className="card-actions justify-end">
            
           

            <label 
            htmlFor="bookmodal" 
            className="badge badge-outline btn-sm"
            onClick={''}
            >Book 
          Now</label>
           
            </div>
        </div>
       
      </div>
    );
};

export default AdvertiseCard;