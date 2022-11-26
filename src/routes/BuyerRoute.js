import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import UseBuyer from '../hooks/UseBuyer';
import { AuthContext } from './../components/context/AuthProvider';
// import { AuthContext } from './../context/AuthProvider';

const BuyerRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const [isBuyer]= UseBuyer(user?.email)

    const location =useLocation()
    
if(loading){
    
    return<div>Loading....</div>
}
    
    if(!user && isBuyer){
            return <Navigate to='/login' state={{from:location}}
            replace></Navigate>
        }
    
    return children;
};

export default BuyerRoute;