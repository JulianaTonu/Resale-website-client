import React, { useContext, useEffect, useState } from 'react';
import MyProductCard from './MyProductCard';

import { AuthContext } from '../../context/AuthProvider'
const MyProduct = () => {

 const {user}=useContext(AuthContext)
    
    const [products, setProducts]=useState([])


    useEffect(()=>{
        fetch(`http://localhost:5000/product?email=${user?.email}`,{
           
        })
        .then(res=> res.json())
        .then(data=>{
            setProducts(data)
            console.log('myproduct', data)
        })
    },[user?.email])
   
    
    

    if(products.length === 0){
        return <h1 className='text-red-500 font-bold text-3xl text-center my-32'>No Product Were Added</h1>
    }
    console.log('Product',products)
    return (
        <>
     
        <div className='grid grid-cols-1 lg:grid-cols-1 gap-y-4'>
{
products.map(product=><MyProductCard
key={product._id}
product={product}
></MyProductCard>)
}
</div>
     
     </>
    );
};

export default MyProduct;