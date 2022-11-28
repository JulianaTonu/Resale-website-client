import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AuthContext } from '../components/context/AuthProvider';
import Header from '../components/Shared/Header'
import UseBuyer from '../hooks/UseBuyer';
import useSeller from '../hooks/useSeller';
import useAdmin from './../hooks/useAdmin';

const DashboardLayout = () => {
  const {user,loading}=useContext(AuthContext)
  const [isAdmin]=useAdmin(user?.email)
  const [isSeller]=useSeller(user?.email)
  const [isBuyer]=UseBuyer(user?.email)


  //add spinner
if(loading){
  return (
      <button className="btn loading "></button>
  )
}
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile ">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col  ">
    
<Outlet></Outlet>
{/* 
    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content bg text-purple-200">
     

     {
      isAdmin && <>

       <Link to='/dashboard/sellers'><li><a>All Sellers</a></li></Link>
      <Link to='/dashboard/allusers'><li><a>All Buyers</a></li></Link>
      <Link to='/dashboard/report'><li><a>Reported Product</a></li></Link>

      </>
     }
     
     {
      isSeller && <>
       <Link to='/dashboard/addproduct'><li><a>Add Product</a></li></Link>
      <Link to='/dashboard/myproduct'><li><a>My Product</a></li></Link>
      </>
     }


     {
      isBuyer && <>
      <Link to='/dashboard/myorder'><li><a>My Orders</a></li></Link>
      
      </>

     }

     


      
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;