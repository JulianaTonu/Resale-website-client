import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';


const AddProduct = () => {
const {user}=useContext(AuthContext)

const navigate =useNavigate()
// const [product, setProduct]=useState({})
    
const handleAddProduct=event=>{
    event.preventDefault()
    const form =event.target;
    const name =user?.displayName || 'unregistered';
    const pname =form.pname.value
    const cname =form.cname.value
    const rprice =form.rprice.value
    const orprice =form.orprice.value
    const used =form.used.value
    const location =form.location.value
    const details =form.details.value
    const condition  =form.condition.value
    const email =user?.email || 'unregistered';
    const img =form.img.value;
    const status ='not-reported';
  
    const phone =form.phone.value;
    const time =form.time.value;
    console.log(name, email)
  
const addproduct ={
product_name:pname,
category_name:cname,
img: img,    
resale_price:rprice,
orginal_price:orprice,
used:used,
condition :condition ,
sellers_name:name,
email:email,
location:location,
details:details,
phone:phone,
status:status,
time:time
    }


    fetch('https://resale-website-serverside.vercel.app/products',{

     method:'POST',
     headers:{
        'content-type':'application/json'
     },
     body: JSON.stringify(addproduct)
    })
    .then(res=>res.json())
    .then(data=>{
        toast.success('Product added Successfully')
        console.log(data)
        event.target.reset()
        navigate('/dashboard/myproduct')
    })
   
    }
 
    return (
        <div>
        <h1 className='text-3xl text-primary font-bold text-center my-10'>Add Product </h1>

        <form onSubmit={handleAddProduct}>

<div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-10 bg-slate-300'>

<input  type="text" name='pname' placeholder='Product name' className="input input-bordered input-primary w-full"  />


<select  name='cname' className="select w-full border-primary  shadow-xl">
            <option disabled selected >Samsung</option>
             <option >Symphony</option>
             <option >iphone</option>
            </select>



   <select  name='condition' className="select w-full border-primary  shadow-xl">
            <option disabled selected >Excellent</option>
             <option >Good</option>
             <option >Fair</option>
            </select>



<input  type="text" name='img' placeholder='ImageUrl' className="input input-bordered input-primary w-full"  />

<input  type="text" name='rprice' placeholder='Resale price' className="input input-bordered input-primary w-full"  />
<input  type="text" name='orprice' placeholder='Orginal price' className="input input-bordered input-primary w-full"  />
<input  type="text" name='location' placeholder='location' className="input input-bordered input-primary w-full"  />

<input  type="text" name='used' placeholder='used of years' className="input input-bordered input-primary w-full"  />
<input  type="text" name='details' placeholder='details' className="input input-bordered input-primary w-full"  />
<input  type="text" name='phone' placeholder='phone' className="input input-bordered input-primary w-full"  />
<input  type="time" name='time' placeholder='time' className="input input-bordered input-primary w-full"  />


</div>

<div className='my-3 text-center'>
     <input type="submit" value='Add Product' className="btn btn-active btn-primary w-40 px-10 "/>
     </div>
</form>


       
     
              </div>
           );
       };
       
    


export default AddProduct;