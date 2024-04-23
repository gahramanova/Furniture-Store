

import React, {useEffect,useState, createContext } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({children})=> {

  const [productData, setproductData] = useState([]);
  useEffect(()=> {
    axios.get("https://mocki.io/v1/d8664b16-dde9-48ec-a5a7-126a1ddb9c69")
    .then(res=> setproductData(res.data))
  },[])


  return <ProductContext.Provider value={[productData,setproductData]}>
    {children}
  </ProductContext.Provider>
}