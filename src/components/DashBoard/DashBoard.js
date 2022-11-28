import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
// import AllSellers from '../AllSellers/AllSellers';
// import AllUser from '../AllUser/AllUser';



const DashBoard = () => {
const {loading} =useContext(AuthContext)
    //add spinner
if(loading){
    return (
        <button className="btn loading "></button>
    )
  }
    return (
        <div className=''>
           
         <h1 className='text-4xl font-bold text-bg  text-center  mt-32'>Welcome to Dashboard</h1>

        </div>
    );
};

export default DashBoard;