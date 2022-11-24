import React from 'react';

const ProductCard = ({product}) => {
  const {category_name,product_name,img,location,resale_price,orginal_price,used,sellers_name}= product
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {product_name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{location}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div> 
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;