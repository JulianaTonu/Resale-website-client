import React from 'react';

const ProductCard = ({product}) => {
  const {category_name,product_name,img,location,resale_price,orginal_price,used,sellers_name}= product
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-purple-500 font-bold">
            {product_name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>Resale Price: ${resale_price}</p>
          <p>Original Price: ${orginal_price}</p>
          <p>Years of used: {used}</p>
          <p>Sellers Name: {sellers_name}</p>
          <p>Location:{location}</p>
          <div className="card-actions justify-end">
            <button className="badge badge-outline btn-sm">Wishlist</button> 
            <button className="badge badge-outline btn-sm">Buy now</button>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;