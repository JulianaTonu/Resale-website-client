import React, { useContext, useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
import { AuthContext } from '../context/AuthProvider';
import { FcGoogle } from "react-icons/fc"

const Login = () => {
const {signIn, loading,signInWithGoogle} =useContext(AuthContext)


const [loginUserEmail, setLoginUserEmail]=useState('')
const [token] =useToken(loginUserEmail)

// const location =useLocation()
const navigate =useNavigate()

// const from =location.state?.from?.pathname || '/' ;

if(token){
  // navigate(from,{replace:true})
  navigate('/')
}

//add spinner
if(loading){
  return (
      <button className="btn loading "></button>
  )
}

    const handleSubmit = event =>{
      


        event.preventDefault()
        const form =event.target
     
        const email =form.email.value;
        const password=form.password.value
        console.log(email,password)

        signIn(email,password)
        .then(result=>{
        const user=result.user
        console.log('login user', user)

        setLoginUserEmail(email)

      
        })
        .catch(err=>console.error(err))
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
  
                fetch('https://resale-website-serverside.vercel.app/users',{
                  method:'POST',
                  headers:{
                    'content-type':'application/json'
                  },
                  body:JSON.stringify(profile)
                })
                .then(res=>res.json())
                .then(data=>{
  
                  setLoginUserEmail(email)
                  // getUserToken(email)
                  console.log('saveUser',data)
                })
              }
  
    return (
        <div className="hero  ">
        <div className="hero-content ">
       
          <div className="card flex-shrink-0 shadow-lg bg-base-100 my-10 py-3">
          <h1 className="text-4xl text-center  font-bold">Login </h1>
            <form onSubmit={handleSubmit}   className="card-body">

             
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
                <input type="submit" value="Login" className="btn bg"/>
              </div>

              <div className="form-control mt-2">
            
            <button className="btn text-purple-600 font-bold bg1 " type="submit" onClick={handleGooglesignIn}><FcGoogle/><span className='ml-2'>Google</span></button>
               </div>

            </form>

            <p className=' text-center font-semibold  '>New to this website? Please <Link className='text-purple-600 font-bold' to='/register'>Register</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;