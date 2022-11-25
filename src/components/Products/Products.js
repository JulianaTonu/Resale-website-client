import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
// import BookProduct from './MyProduct/BookProduct/BookProduct';
import ProductCard from './ProductCard';


const Products = () => {
    const {loading}=useContext(AuthContext)
    const {category_name} =useLoaderData()

    const [products, setProducts]=useState([])


console.log('cate',category_name)

    useEffect(()=>{
        fetch(`http://localhost:5000/category?category_name=${category_name}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setProducts(data)
        })
    },[category_name])


    if(loading){
        return<div>Loading</div>
        }
    return (
        <div>
            <h1 className=' text-3xl font-bold text-center uppercase my-5 text-purple-500'>All products:{products.length}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
{
    products?.map(product=><ProductCard
    product={product}
    setProducts={setProducts}
    ></ProductCard>)
}

            </div>
          
        </div>
    );
};

export default Products;