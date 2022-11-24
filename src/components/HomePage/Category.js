import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {category_name, image, _id} = category
    return (
        <div className="card w-72 h-1/2 shadow-xl image-full mx-auto">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{category_name}</h2>
          <p></p>
          <div className="card-actions justify-end">
            <Link to={`/categories/${_id}`}><button className="btn bg">All product</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Category;