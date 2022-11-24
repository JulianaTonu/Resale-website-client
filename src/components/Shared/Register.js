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
        console.log(name,email,password)

        createUser(email,password,name)
        .then(result=>{
          const user=result.user
          handleUpdateProfile(name)
          console.log('regi user', user)
          form.reset()
          navigate('/login')
        })
        .catch(e=>console.error(e))
    }

            //updateUserProfile
            const handleUpdateProfile =(name,email)=>{

              const profile = {
    
                displayName: name,
                email:email
                
              }
              updateUserProfile(profile)
              .then(()=>{
                saveUser(name, email)
              })
              .catch(e=>console.error(e))
            }
        

            const saveUser =(name, email)=>{
              const user ={name,email};
              fetch('http://localhost:5000/users',{
                method:'POST',
                headers:{
                  'content-type':'application/json'
                },
                body:JSON.stringify(user)
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