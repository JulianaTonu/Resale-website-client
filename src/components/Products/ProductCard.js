import React, { useState } from 'react';


import BookProduct from "./MyProduct/BookProduct/BookProduct";

const ProductCard = ({product}) => {

  const [products, setProducts] =useState(null)

  console.log('pp',products)

  const {category_name,product_name,img,location,resale_price,orginal_price,used,sellers_name,phone,details}= product

  console.log('phoneee',phone)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-purple-500 font-bold">
            {product_name}
            {/* <div className="badge badge-secondary">NEW</div> */}
          </h2>
          <p>Resale Price: ${resale_price}</p>
          <p>Original Price: ${orginal_price}</p>
          <p>Years of used: {used}yrs</p>
          <p>Category: {category_name}</p>
          <p>Sellers Name: {sellers_name}</p>
          <p>Location:{location}</p>
          <p>Contact:{phone}</p>
          <p>{details}</p>
          <div className="card-actions justify-end">
            
           

            <label 
            htmlFor="bookmodal" 
            className="badge badge-outline btn-sm"
            onClick={()=>setProducts(product)}
            >Book 
          Now</label>
           
            </div>
        </div>
        {/* //modal */}
        <BookProduct
        product={product}
      setProducts={setProducts}
        ></BookProduct>
      </div>
    );
};

export default ProductCard;