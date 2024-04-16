

import React, {useEffect,useState, createContext } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({children})=> {

  const [productData, setproductData] = useState([]);
  useEffect(()=> {
    axios.get("https://mocki.io/v1/6fde5320-4ac9-49f1-8028-005fbbe6bb7d")
    .then(res=> setproductData(res.data))
  },[])


  return <ProductContext.Provider value={[productData,setproductData]}>
    {children}
  </ProductContext.Provider>
}