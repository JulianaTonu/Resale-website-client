import React, {  useEffect, useState } from 'react';
import toast from 'react-hot-toast';



const ReportProduct = () => {

 const [reportproducts, setReportProducts]=useState([])

console.log('reportproducts',reportproducts)

    useEffect(()=>{
        fetch(`http://localhost:5000/reported?status=reported`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setReportProducts(data)
        })
    },[])


    const handleDelete =id =>{
      const procced =window.confirm(`Are you sure you want to delete this reported product?`)
      
      if(procced){
        fetch(`http://localhost:5000/reported/${id}`,{
          method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.deletedCount > 0){
            toast.success(' Deleted Successfully')
            const remaining = reportproducts.filter(repo=>repo._id !== id)
            setReportProducts(remaining)
          }
        })
      }
    }
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
            <td>{report.sellers_name}</td>
            <td>{report.product_name}</td>
            <td>${report.resale_price}</td>
           
            <td ><button  onClick={()=>handleDelete(report._id)}  className='btn btn-sm'>x</button></td>
            
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