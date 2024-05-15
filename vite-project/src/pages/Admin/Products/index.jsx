import React, { useEffect, useState } from 'react'
import { getAllData } from '../../../api'
import { endpoints } from '../../../api/constant'


const AdminProducts =()=>{

const [products, setProducts] = useState(null) 

}
useEffect(()=>{
    getAllData(endpoints.products).then((res)=>{
        setProducts(res.data);
    });
},[]);

  return (
    <>
   <ul>
    {products?.map((q)=>{
        return <li>{q.title}</li>
    })}
   </ul>
    </>
  )


export default AdminProducts
