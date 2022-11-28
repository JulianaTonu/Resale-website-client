import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Category from './Category';

const ProductCategories = () => {
const [Categories, setCategories] =useState([])

// fetch('http://localhost:5000/categories')
    useEffect(()=>{
        axios.get('http://localhost:5000/categories')
      
        .then(res=>setCategories(res?.data))
        // .then(data =>setCategories(data))
    },[])

    return (
        <div className=''>
            <h1 className=' text-3xl font-bold text-center uppercase my-10'>Phone <span className='text-purple-500' >Category</span> {Categories.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    Categories.map(category=><Category
                    key={category._id}
                    category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default ProductCategories;