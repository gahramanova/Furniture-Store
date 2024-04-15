
// import React, { createContext, useEffect, useState } from "react"; // Import React

// import { createContext, useEffect, useState } from "react";

// import axios from "axios";
// export const ProductContext = createContext();

// export const ProductProvider = ({children})=> {

//   const [productsData, setProductsData] = useState([]);
//   useEffect (()=> {
//     axios.get("https://mocki.io/v1/fc37b7c2-e904-4641-9bd2-e01f5a521cf1")
//     setProductsData(res => res.data)
//   }, [])

//   return <ProductContext.Provider value={[productsData, setProductsData]}>
//     {children}
//   </ProductContext.Provider>
// }

import React, {useEffect,useState, createContext } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({children})=> {

  const [productData, setproductData] = useState([]);
  useEffect(()=> {
    axios.get("https://mocki.io/v1/f73a8b34-d6ed-4654-8cf8-964e83bc2400")
    .then(res=> setproductData(res.data))
  },[])


  return <ProductContext.Provider value={[productData,setproductData]}>
    {children}
  </ProductContext.Provider>
}