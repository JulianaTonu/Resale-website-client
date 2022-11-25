import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';


const AllSellers = () => {

 const [sellers, setSellers]=useState([])

console.log('sellers',sellers)

    useEffect(()=>{
        fetch(`http://localhost:5000/sellers?role=Seller`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setSellers(data)
        })
    },[])
    return (
        <div grid grid-cols-1 >
            <h1 className='text-2xl font-bold text-purple-500 text-center my-5'>Total seller {sellers.length}</h1>

            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>
      
      {
        sellers.map((seller,index)=><tr key ={seller._id}>
            <th>{index+1}</th>
            <td>{seller.name}</td>
            <td>{seller.email}</td>
            <td >X</td>
            
          </tr>
          )
      }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllSellers;