import React, {  useEffect, useState } from 'react';



const ReportProduct = () => {

 const [reportproducts, setReportProducts]=useState([])

console.log('reportproducts',reportproducts)

    useEffect(()=>{
        fetch(`http://localhost:5000/report`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setReportProducts(data)
        })
    },[])
    return (
        <div grid grid-cols-1 >
            <h1 className='text-2xl font-bold text-purple-500 text-center my-5'>Reported product </h1>

            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th>Seller</th>
        <th>Product</th>
        <th>Price</th>
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>
      
      {
        reportproducts.map((report,index)=><tr key ={report._id}>
            <th>{index+1}</th>
            <td><div className='rounded-xl w-24  '>
                <img src={report.img} alt="" />
              </div></td>
            <td>{report.sellername}</td>
            <td>{report.product_name}</td>
            <td>{report.price}</td>
            <td ><button className='btn btn-sm'>x</button></td>
            
          </tr>
          )
      }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ReportProduct;