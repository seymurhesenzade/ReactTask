import React, { useEffect, useState } from 'react'
import { enpoints } from '../../api/constant';

const AdminProducts = () => {

const[products, setProducts]=useState(null);

useEffect(()=> {
    getAllData(enpoints.products).then((res)=>{
        console.log(res);
    })
}, []);

  return (

    <div>
      
    </div>
  )
}

export default AdminProducts
