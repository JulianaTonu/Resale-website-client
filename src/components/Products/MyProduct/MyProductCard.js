import React, { useState } from 'react';
import toast from 'react-hot-toast';

const MyProductCard = ({product}) => {
    console.log('product',product)

const {product_name ,img,resale_price,location,phone,details,used} =product

 const [myproduct, setMyProduct]=useState(product)
     
 console.log('myproduct',myproduct)

 const handleAdvertise = event =>{

  event.preventDefault();
  
  const product_name =product?.product_name
  const category =product?.category_name
  const price=product?.resale_price
  const img= product?.img
  const location=product?.location
  const phone =product?.phone
  const details =product?.details
  const used =product?.used

console.log(product_name,category,price,img)

const advertise={
  product_name,
  category,
  price, 
  img,
  location,
  phone,
  used,
  details
}
fetch(`http://localhost:5000/advertise`,{

method:'POST',
headers:{
'content-type':'application/json'
},
body:JSON.stringify(advertise)

})

.then(res=>res.json())

.then(data=>{
console.log(data)
if(data.acknowledged){
toast.success("Add  Advertise")

}
})
console.log('advertise',advertise)
 }

 

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
              <div className="text-xl "> Available</div>


<button onClick={handleAdvertise} className='btn btn-sm bg my-2 ml-4 mr-2'>Advertise</button>
<button onClick={()=>handleDelete(product._id)} className='btn btn-sm my-2'>Delete</button>
              
            </div>
          </div>
       </div>
    );
};

export default MyProductCard;