import React from 'react';
const MyProductCard = ({product}) => {
    console.log('product',product)

const {product_name ,img,resale_price,} =product

    return (
        <div>
        <h1 className='text-2xl text-purple-500 mx-4'>My Products: </h1>
         <div className="flex items-center space-x-3 border-solid border-2 border-indigo-600 p-4 rounded-xl m-3 lg:w-96">
          
            <div className="avatar">
              <div className="mask mask-squircle w-24 h-24 ">
                <img src={img}  alt=''/>
              </div>
            </div>
            <div>
              <div className="font-bold">{product_name}</div>
              <div className="text-xl "> ${resale_price}</div>

<button className="btn-sm text-white bg">unsold</button>
              
            </div>
          </div>
       </div>
    );
};

export default MyProductCard;