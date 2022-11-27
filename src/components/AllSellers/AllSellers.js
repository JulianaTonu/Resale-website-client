import React, {  useEffect, useState } from 'react';
import toast from 'react-hot-toast';



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


      
  const handleVerify = email =>{
    fetch(`http://localhost:5000/products/verify/${email}`,{
      method: 'PUT',
  
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.modifiedCount > 0){
        toast.success('Seller Verified ')
        console.log(data)
      }
    })
  }


  const handleDeleteSeller =id =>{
    const procced =window.confirm(`Are you sure you want to delete this seller?`)
    
    if(procced){
      fetch(`http://localhost:5000/seller/${id}`,{
        method:'DELETE',
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.deletedCount > 0){
          toast.success('Seller Deleted Successfully')
          const remaining = sellers.filter(pro=>pro._id !== id)
          setSellers(remaining)
        }
      })
    }
  }
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
        <th>Verify</th>
        
      </tr>
    </thead>
    <tbody>
      
      {
        sellers.map((seller,index)=><tr key ={seller._id}>
            <th>{index+1}</th>
            <td>{seller.name}</td>
            <td>{seller.email}</td>
            <td ><button  onClick={()=>handleDeleteSeller(seller._id)} className='btn btn-sm'>X</button></td>

            <td ><button onClick={()=>handleVerify(seller.email)} className='btn  bg' >Verify</button></td>

            {/* <td>
              {
                seller.verify && 
                <button onClick={()=>handleVerify(seller._id)} className='btn btn-bg'>Verified</button>
              }
            </td> */}
            
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