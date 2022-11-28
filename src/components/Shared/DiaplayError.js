import React, { useContext } from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';


const DisplayError = () => {
    const {logout}=useContext(AuthContext)
    const error =useRouteError()
    const navigate=useNavigate()

    const handleLogout =()=>{
        logout()
        .then(()=>{
            navigate('/login')
        })
        .catch(err=>console.log(err))

    }
    return (
        <div>
            <p className='text-red-500'>Something Went Wrong</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <p>Please<button onClick={handleLogout}>Logout</button></p>
        </div>
    );
};

export default DisplayError;