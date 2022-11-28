import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../context/AuthProvider';
import AdvertiseCard from './AdvertiseCard';



const Advertise = () => {

    const {loading}=useContext(AuthContext)
   

    const [products, setProducts]=useState([])



    useEffect(()=>{
        fetch(`https://resale-website-serverside.vercel.app/advertise`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setProducts(data)
            
        })
    },[])


    if(loading){
        return<div>Loading</div>
        }

    return (
        <div>
            <h1 className=' text-3xl font-bold text-center uppercase my-24 text-purple-500'>Available Product:</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
{
    products?.map(product=><AdvertiseCard
    product={product}
    setProducts={setProducts}
    ></AdvertiseCard>)
}

            </div>
          
        </div>
    );
};

export default Advertise;