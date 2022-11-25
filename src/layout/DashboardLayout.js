import React from 'react';
import { Outlet, Link } from 'react-router-dom';


import Header from '../components/Shared/Header'
const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col  ">
    
<Outlet></Outlet>

    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
     
      <Link to='/dashboard'><li><a>All Sellers</a></li></Link>
      <Link to='/dashboard/alluser'><li><a>All Users</a></li></Link>
      
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;