import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/category?${products.category_name}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setProducts(data)
        })
    },[])
    return (
        <div>
            <h1 className=' text-3xl font-bold text-center uppercase my-5 text-purple-500'>All products: {products.length}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
{
    products.map(product=><ProductCard
    product={product}
    ></ProductCard>)
}

            </div>
        </div>
    );
};

export default Products;