import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../../../context/AuthProvider';


const Order = () => {
const {user}=useContext(AuthContext)
 const [orders, setOrders]=useState([])

console.log('orders',orders)

    useEffect(()=>{
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setOrders(data)
        })
    },[user?.email])

  .catch(err=>console.error(err))
  
    return (
        <div grid grid-cols-1 >
            <h1 className='text-2xl font-bold text-purple-500 text-center my-5'>Total order {orders.length}</h1>

            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th>Name</th>
        <th>Email</th>
        <th>Price</th>
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>
      
      {
        orders.map((order,index)=><tr key ={order._id}>
            <th>{index+1}</th>
            <td>
              <div className='rounded-xl w-24  '>
                <img src={order.img} alt="" />
              </div>
            </td>
            
            <td>{order.product_name}</td>
            <td>{order.email}</td>
            <td>{order.price}</td>
            <td ><button className='btn bg btn-sm'>Pay</button></td>
            
          </tr>
          )
      }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Order;