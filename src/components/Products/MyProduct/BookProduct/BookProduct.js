import React, { useContext } from 'react';
import { AuthContext } from './../../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const BookProduct = ({product,loading, setProducts}) => {

    const {user} =useContext(AuthContext)
    const {product_name,location,resale_price, phone} =product

    console.log('porpo',product)
    const handleBooking=event =>{
        event.preventDefault();
        const form =event.target;
        const name =form.name.value;
        const email=form.email.value
        const pName=form.pName.value
        const price=form.price.value
        const location=form.location.value
        const phone=form.phone.value
console.log(name,email,pName,price,location,phone)

const booking={
    UserName:name,
    email:email,
    product_name:pName,
    price, 
    location,
    phone
}
fetch(`http://localhost:5000/booking`,{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(booking)

})
  
.then(res=>res.json())
  
.then(data=>{
  console.log(data)
  if(data.acknowledged){
    toast.success("booking Confirmed")
  }
})
console.log('booking',booking)
setProducts(null)
    
if(loading){
    return<div>Loading</div>
    }

}
    return (
        <>
          <input type="checkbox" id="bookmodal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative text-center">
    <label htmlFor="bookmodal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className='text-2xl font-bold text-purple-500'>Booking Phone</h3>
    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 text-center'>
    <input type="text" placeholder="Type here" name='name'  defaultValue={user?.displayName} disabled className="input input-bordered input-primary w-full  my-2" />
    <input type="text" placeholder="Type here" name='email'  defaultValue={user?.email} disabled className="input input-bordered input-primary w-full  my-2" />
    <input type="text" placeholder="Type here" name='pName'  defaultValue={product_name} disabled className="input input-bordered input-primary w-full  my-2" />
    <input type="text" placeholder="Type here" name='price' defaultValue={resale_price} disabled className="input input-bordered input-primary w-full  my-2"/>
    <input type="text" placeholder="Type here" name='location' defaultValue={location} disabled className="input input-bordered input-primary w-full  my-2" />
    <input type="text" placeholder="Type here" name='phone' defaultValue={phone} disabled className="input input-bordered input-primary w-full  my-2" />
    
     
    <input type="submit" value="Submit" className='w-full  bg py-3 rounded-md' />
    </form>
  </div>
</div>
        </>
    );
};

export default BookProduct;