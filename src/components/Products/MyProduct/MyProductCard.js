import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

 


const MyProductCard = ({product}) => {
    console.log('product',product)

const {product_name ,img,resale_price,} =product

 const [myproduct, setMyProduct]=useState(product)
     
    const handleDelete =id =>{
        const procced =window.confirm(`Are you sure you want to delete this product?`)
        
        if(procced){
          fetch(`http://localhost:5000/myproduct/${id}`,{
            method:'DELETE',
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            if(data.deletedCount > 0){
              toast.success('Review Deleted Successfully')
              const remaining = myproduct.filter(pro=>pro._id !== id)
              setMyProduct(remaining)
            }
          })
        }
      }

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


<Link to ={`/advertise/${product._id}`}><button  className='btn btn-sm bg my-2 ml-4 mr-2'>unsold</button></Link>
<button onClick={()=>handleDelete(product._id)} className='btn btn-sm my-2'>Delete</button>
              
            </div>
          </div>
       </div>
    );
};

export default MyProductCard;