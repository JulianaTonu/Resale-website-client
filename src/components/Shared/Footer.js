import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 py-16 bg mt-10 text-base-content">
  <div>
   
    <p className=' text-white text-3xl'>BecheDao.com</p>
    <p className="font-bold text-grey-200 py-3 text-white
    ">
         
         House#12,Road#1,Sector#6,Uttara,Dhaka,
         <br />Bangladesh 1230 
       </p> 
  </div> 
  <div className='mb-10'>
    <span className="footer-title text-white ">Categories</span> 
    <a href='/' className="link link-hover  text-white">iPhone</a> 
    <a  href='/'className="link link-hover  text-white">Samsung</a> 
    <a href='/' className="link link-hover  text-white">Symphony</a> 
   
  </div> 
   
  <div className='mb-10'>
    <span className="footer-title text-white">Legal</span> 
    <a href='/' className="link link-hover  text-white">Terms of use</a> 
    <a href='/' className="link link-hover  text-white">Privacy policy</a> 
    <a href='/' className="link link-hover  text-white">Cookie policy</a>
  </div>
</footer>
    );
};

export default Footer;