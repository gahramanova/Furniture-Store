

import React, {useEffect,useState, createContext } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({children})=> {

  const [productData, setproductData] = useState([]);
  useEffect(()=> {
    axios.get("https://mocki.io/v1/117e9290-6460-40dd-9831-2a9f4e1a7ce6")
    .then(res=> setproductData(res.data))
  },[])


  return <ProductContext.Provider value={[productData,setproductData]}>
    {children}
  </ProductContext.Provider>
}