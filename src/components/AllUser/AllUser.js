import React, { useEffect, useState } from 'react';

const AllUser = () => {
    const [users, setUsers]=useState([])

console.log('users',users)

    useEffect(()=>{
        fetch(`http://localhost:5000/alluser?role=User`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setUsers(data)
        })
    },[])
    return (
        <div grid grid-cols-1 >
            <h1 className='text-2xl font-bold text-purple-500 text-center my-5'>Total seller {users.length}</h1>

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
        users.map((user,index)=><tr key ={user._id}>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
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

export default AllUser;