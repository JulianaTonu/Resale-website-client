import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const AllUser = () => {
    const [users, setUsers]=useState([])

    // const [myS , setMySeler] =useState(sellers)

console.log('users',users)

    useEffect(()=>{
        fetch(`https://resale-website-serverside.vercel.app/alluser?role=User`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setUsers(data)
        })
    },[])


    const handleUserDelete =id =>{
      const procced =window.confirm(`Are you sure you want to delete this user?`)
      
      if(procced){
        fetch(`https://resale-website-serverside.vercel.app/buyer/${id}`,{
          method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.deletedCount > 0){
            toast.success('Seller Deleted Successfully')
            const remaining = users.filter(pro=>pro._id !== id)
            setUsers(remaining)
          }
        })
      }
    }
    return (
        <div grid grid-cols-1 >
            <h1 className='text-2xl font-bold text-purple-500 text-center my-5'>Total Buyers {users.length}</h1>

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
        users.map((user,index)=><tr key = {user._id}>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td ><button onClick={()=>handleUserDelete(user._id)} className='btn btn-sm'>X</button></td>
          </tr>
          )
      }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUser;