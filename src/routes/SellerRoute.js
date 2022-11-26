import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from './../components/context/AuthProvider';
// import { AuthContext } from './../context/AuthProvider';
import useSeller from './../hooks/useSeller';

const SellerRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const [isSeller]= useSeller(user?.email)

    const location =useLocation()
    
if(loading){
    
    return<div>Loading....</div>
}
    
    if(!user && isSeller){
            return <Navigate to='/login' state={{from:location}}
            replace></Navigate>
        }
    
    return children;
};

export default SellerRoute;