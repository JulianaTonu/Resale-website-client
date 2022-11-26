import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';


const AddProduct = () => {
const {user}=useContext(AuthContext)
    const [product, setProduct]=useState({})
    
    console.log('seller email ',user?.email)
    const handleAddProduct=event=>{
    event.preventDefault()
    console.log(product)

    fetch('http://localhost:5000/products',{

     method:'POST',
     headers:{
        'content-type':'application/json'
     },
     body: JSON.stringify(product)
    })
    .then(res=>res.json())
    .then(data=>{
        toast.success('Product added Successfully')
        console.log(data)
        event.target.reset()
    })
   
    }

    const handleInputBlur =event=>{
    const field =event.target.name
    const value =event.target.value
    const newProduct ={...product}
    newProduct[field]=value;
    setProduct(newProduct)
    console.log('newproduct' ,newProduct)
    } 
    return (
        <div>
        <h1 className='text-3xl text-primary font-bold text-center my-10'>Add Product </h1>
       
       <Form onSubmit={handleAddProduct}>
                   <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-10 bg-slate-300'>
       
                 
       
                   <input onBlur={handleInputBlur} type="text" name='product_name' placeholder='Product Name' className="input input-bordered input-primary w-full"  />
                   <input onBlur={handleInputBlur} type="text" name='category_name' placeholder='Category_name' className="input input-bordered input-primary w-full"  />
                   <input onBlur={handleInputBlur} type="text" name='img' placeholder='ImgUrl' className="input input-bordered input-primary w-full"  />
                   <input onBlur={handleInputBlur} type="text" name='resale_price' placeholder='Resale Price' className="input input-bordered input-primary w-full"  />
                   <input onBlur={handleInputBlur} type="text" name='orginal_price' placeholder='Original Price' className="input input-bordered input-primary w-full"  />
                   <input onBlur={handleInputBlur} type="time" name='time' placeholder='time' className="input input-bordered input-primary w-full"  />
                   <input onBlur={handleInputBlur} type="text" name='used' placeholder='years of used' className="input input-bordered input-primary w-full"  />
                 
                   <input onBlur={handleInputBlur} type="text" name='sellers_name' placeholder='Seller name' className="input input-bordered input-primary w-full"  />
                   <input onBlur={handleInputBlur} type="text" name='email' value={user?.email} placeholder='email' readOnly className="input input-bordered input-primary w-full"  />
                   <input onBlur={handleInputBlur} type="text" name='phone' placeholder='phone' className="input input-bordered input-primary w-full"  />
                   <input onBlur={handleInputBlur} type="text" name='location' placeholder='location' className="input input-bordered input-primary w-full"  />

                   <input onBlur={handleInputBlur} type="text" name='details' placeholder='Details' className="input input-bordered input-primary w-full"  />

                   <br />
              
                   </div>
                   <div className='my-3 text-center'>
                   <input type="submit" value='Add Product' className="btn btn-active bg w-40 px-10 "/>
              {/* <Link to={'/myproduct'}></Link> */}
              </div>
               </Form>
              </div>
           );
       };
       
    


export default AddProduct;