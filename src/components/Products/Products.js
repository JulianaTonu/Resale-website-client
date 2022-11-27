import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
// import BookProduct from './MyProduct/BookProduct/BookProduct';
import ProductCard from './ProductCard';


const Products = () => {
    const {loading}=useContext(AuthContext)
    const {category_name} =useLoaderData()

    // const [products, setProducts]=useState([])


console.log('cate',category_name)

const {data : products = [], refetch } =useQuery({
    queryKey:['products',category_name],
    queryFn:async()=> {
     const res = await fetch(`http://localhost:5000/category?category_name=${category_name}`)
     const data =await res.json();
     return data
    }


})



    // useEffect(()=>{
    //     fetch(`http://localhost:5000/category?category_name=${category_name}`)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //         setProducts(data)
            
    //     })
    // },[category_name])


   //add spinner
if(loading){
    return (
        <button className="btn loading "></button>
    )
  }

    return (
        <div>
            <h1 className=' text-3xl font-bold text-center uppercase my-5 text-purple-500'>All products:{products.length}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
{
    products?.map(product=><ProductCard
    product={product}
   refetch={refetch}
    ></ProductCard>)
}

            </div>
          
        </div>
    );
};

export default Products;