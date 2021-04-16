// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import ProductForm from '../components/productForm';
// const Main = () => {
//     const [ message, setMessage ] = useState("")
//     useEffect(()=>{
//         axios.get("http://localhost:8000/api")
//             .then(res=>setMessage(res.data.message))       
//     }, []);
//     return (
//         <div>
//             <ProductForm/>
           
//         </div>
//     )
// }
// export default Main;


import React from 'react';
import PersonForm from '../components/productForm';
const Main = () => {
    return (
        <div>
           <PersonForm/>
        </div>
    )
}
export default Main;
