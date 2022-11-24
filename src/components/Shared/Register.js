import { stringify } from 'postcss';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Register = () => {
const {createUser,updateUserProfile}=useContext(AuthContext)
const navigate =useNavigate()

    const handleSignup = event =>{
        event.preventDefault()
        const form =event.target
        const name=form.name.value
        
        const email =form.email.value;
        const password=form.password.value

        // const user=form.user.value
        const role=form.role.value

        console.log(name,email,password,role)

        createUser(email,password)
        .then(result=>{
          const user=result.user
          handleUpdateProfile(name, email, role)
          console.log('regi user', user)
          form.reset()
          navigate('/login')
        })
        .catch(e=>console.error(e))
    }

            //updateUserProfile
            const handleUpdateProfile =(name,email,role)=>{

              const profile = {
    
                displayName: name,
                email:email,
                role:role,
                
                
              }
              updateUserProfile(profile)
              .then(()=>{
                saveUser(name, email, role)
                console.log('savee',name,email,role)
              })
              .catch(e=>console.error(e))
            }
        

            const saveUser =(name, email,role)=>{
              const profile ={name,email,role};
              fetch('http://localhost:5000/users',{
                method:'POST',
                headers:{
                  'content-type':'application/json'
                },
                body:JSON.stringify(profile)
              })
              .then(res=>res.json())
              .then(data=>{
                console.log('saveUser',data)
              })
            }
    return (
        <div className="hero my-18 ">
        <div className="hero-content ">
       
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


            </form>

            <p className=' text-center '>Already have an account?<Link className='text-purple-600 font-bold' to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Register;