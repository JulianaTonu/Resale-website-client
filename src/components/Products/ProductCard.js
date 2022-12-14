import React, { useState } from 'react';
import toast from 'react-hot-toast';

import BookProduct from "./MyProduct/BookProduct/BookProduct";
import {MdVerified} from 'react-icons/md'
const ProductCard = ({product,refetch}) => {

  const [products, setProducts] =useState(null)

  console.log('pp',products)

  const {category_name,product_name,img,location,resale_price,orginal_price,used,sellers_name,phone,details,_id, verify,time,condition}= product



  const handleReport =id =>{
    fetch(`https://resale-website-serverside.vercel.app/products/report/${id}`,{
      method: 'PUT',
  
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.modifiedCount > 0){
        toast.success('Successfully Change Status')
        console.log(data)
      }
    })
  }


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-purple-500 font-bold uppercase">
            {product_name}
            {/* <div className="badge badge-secondary py-6">Added by {verify} Seller</div> */}
          </h2>
          <p>Resale Price: ${resale_price}</p>
          <p>Original Price: ${orginal_price}</p>
          <p>Years of used: {used}yrs</p>
          <p>Category: {category_name}</p>
          <p>Condition: {condition}</p>
          <p>Time: {time}</p>
          <p className='flex items-center'>Sellers Name: {sellers_name} <span className='text-blue-400'>{verify ==='verified' && <MdVerified/>}</span> </p>
          <p>Location:{location}</p>
          <p>Contact:{phone}</p>
          <p>{details}</p>

      
          <div className="card-actions justify-start">
            
           

            <label 
            htmlFor="bookmodal" 
            className="badge badge-outline  btn-md bg ml-3 text-white font-bold"
            onClick={()=>setProducts(product)}
            >Book 
          Now</label>
           
            </div>

            <button onClick={()=>handleReport(_id)} className='btn btn-sm badge badge-outline bg-red-500 my-2 ml-4 mr-2 text-white'>Report product</button>
        </div>

        {/* //modal */}
        <BookProduct
        product={product}
      setProducts={setProducts}
      refetch={refetch}
        ></BookProduct>
      </div>
    );
};

export default ProductCard;