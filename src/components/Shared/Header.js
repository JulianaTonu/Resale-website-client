import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { AuthContext } from './../context/AuthProvider';

const Header = () => {

  const {user,logout} =useContext(AuthContext)

  const handleLogout=()=>{
    logout()
    .then(()=>{})
    .catch(err=>console.error(err))
  }
    return (
        <div className="navbar bg text-grey-200   shadow-xl rounded-xl  indx mb-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             
            <li className='font-bold  font-serif'><Link to='/'>Home</Link></li>
            <li className='font-bold  font-serif'><Link to='/blog'>Blog</Link></li>
            
            <li className='font-bold   font-serif'><Link to='/myproduct'>My Product</Link></li>
            <li className='font-bold   font-serif'><Link to='/register'>Register</Link></li>

             
            </ul>
          </div>
          < a href  className="text-white normal-case text-2xl font-bold flex d-flex font-mono">BecheDao.com </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            
            <li className='font-bold text-white font-serif'><Link to='/'>Home</Link></li>
            <li className='font-bold text-white font-serif'><Link to='/blog'>Blog</Link></li>
            
            <li className='font-bold text-white font-serif'><Link to='/addproduct'>Add Products</Link></li>

            <li className='font-bold  text-white font-serif'><Link to='/myproduct'>My Product</Link></li>

            <li className='font-bold  text-white font-serif'><Link to='/sellers'>Sellers</Link></li>
            <li className='font-bold  text-white font-serif'><Link to='/allusers'>Allusers</Link></li>
           

            {
          user?.email ?
          <>
         
         <span className='text-white font-bold text-lg  font-serif pt-2'
         >{user?.displayName}</span>
          <span className=''><button className='btn btn-ghost font-bold text-white font-serif' onClick={handleLogout}>Logout</button></span>
          </>
            :
           <>
                <li className='font-bold text-white font-serif'><Link to='/login'>Login</Link></li>
                <li className='font-bold text-white font-serif'><Link to='/register'>Register</Link></li>
                </>
          }
          </ul>
        </div>
        
      </div>
    );
};

export default Header;