// import { stringify } from 'postcss';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { FcGoogle } from "react-icons/fc"
import useToken from '../../hooks/useToken';

const Register = () => {
const {createUser,updateUserProfile,signInWithGoogle}=useContext(AuthContext)

const [createdUser ,setCreatedUser]= useState('')
const [token]=useToken(createdUser)

const navigate =useNavigate()

if(token){
navigate('/login')
}

    const handleSignup = event =>{
        event.preventDefault()
        const form =event.target
        const name=form.name.value
        
        const email =form.email.value;
        const password=form.password.value
        // const verify= 'not verified'

        // const user=form.user.value
        const role=form.role.value

        // console.log(name,email,password,role,verfiy)

        createUser(email,password)
        .then(result=>{
          const user=result.user
          const userInfo ={
            displayName: name,

          }
          handleUpdateProfile(userInfo)
         saveUser(name, email, role)
          console.log('regi user', user)
          form.reset()
          navigate('/login')
        })
        .catch(e=>console.error(e))

        
    }
 //updateUserProfile
 const handleUpdateProfile =(userInfo)=>{
  updateUserProfile(userInfo)
  .then(()=>{
    // saveUser(name, email, verify,role)
    // console.log('savee',name,email,verify,role)
  })
  .catch(e=>console.error(e))
}

    const handleGooglesignIn=()=>{
          
      signInWithGoogle ()
    .then(result=>{
    const user = result.user
   
    const role ='User'
    saveUser( user.displayName, user.email, role)
    // saveUser(user.email, user.displayName, verify,role)
    console.log(user)   
  })
  .catch(err=>console.error(err))
}
      
//saveUser to database
            const saveUser =(name, email,role='User')=>{
              const profile = {name,email,role,verify:'not verified'};

              fetch('http://localhost:5000/users',{
                method:'POST',
                headers:{
                  'content-type':'application/json'
                },
                body:JSON.stringify(profile)
              })
              .then(res=>res.json())
              .then(data=>{

                setCreatedUser(email)
                // getUserToken(email)
                console.log('saveUser',data)
              })
            }

// const getUserToken =email=>{
//   fetch(`http://localhost:5000/jwt?email=${email}`)
//   .then(res=>res.json())
//   .then(data=>{
//     if(data.accessToken){
//       localStorage.setItem('accessToken', data.accessToken)
//       navigate('/')
//     }
//   })
// }



    return (
        <div className="w-full lg:w-1/2 mx-auto flex justify-center my-18 ">
        <div className=" ">
       
          <div className="card flex-shrink-0 shadow-lg bg-base-100 my-10 py-3">
          <h1 className="text-4xl text-center  font-bold">Register </h1>
            <form onSubmit={handleSignup} className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="your name" className="input input-bordered" />
              </div>

             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />

                <label className="label">
                  <a href className="label-text-alt link link-hover" >Forgot password?</a>
                </label>
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Role</span>
                </label>
                <select  name='role' className="select w-full max-w-xs shadow-xl">
            <option disabled selected >User</option>
             <option >Seller</option>
             
  
            </select>
              </div>

{/* <select className="select w-full max-w-xs shadow-xl">
  <option disabled selected name='user'>User</option>
  <option name='seller'>Seller</option>
  
</select> */}
              <div className="form-control mt-6">
                <input type="submit" value="Register" className="btn bg"/>
           
              </div>
 {/* //googlesignIn */}
 <div className="form-control mt-2">
            
            <button className="btn text-purple-600 font-bold bg1 " type="submit" onClick={handleGooglesignIn}><FcGoogle/><span className='ml-2'>Google</span></button>
               </div>

            </form>

            <p className=' text-center '>Already have an account?<Link className='text-purple-600 font-bold' to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Register;