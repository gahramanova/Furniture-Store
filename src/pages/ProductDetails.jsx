import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import slug from "react-slugify";
import { useCart } from "react-use-cart";
import { CiDiscount1 } from "react-icons/ci";
import SingleInterestedCard from "../components/SingleIntrestedCard"
import { useTranslation } from 'react-i18next';

const ProductDetails = () => {
  const [productData] = useContext(ProductContext);
  const { t } = useTranslation()

  const { url } = useParams();
  const { addItem } = useCart();
  const navigate = useNavigate();

  const dataDetails = productData.filter(p=>slug(p.title) === url);

  const randomNumber = Math.floor(Math.random() * 46);

  return (
    <>
      {dataDetails.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <section className="product-details">
            <div className="container mx-5 my-5">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-8 col-lg-8">
                  <div className="row g-4">
                    {dataDetails[0].img.map((image, index) => (
                      <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-6">
                        <img src={image} alt="Product" className="detailsphoto" style={{ width: "100%", height: "auto" }} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                  <h2 className="fw-bold">{dataDetails[0].title}</h2>
                  <h6 className="mt-5">SKU: <span style={{color: "#747474"}}>{dataDetails[0].sku}</span></h6>
                  
                  <div className="mt-5 text d-flex">
                    <div className="discount d-flex align-items-center"><CiDiscount1 /></div>
                    <div className="">
                      <h5 className="fw-bold">{t("product-details.0")}</h5>
                      <p>{t("product-details.1")}</p>
                    </div>
                  </div>
                  <p className="mt-4" style={{color: "#747474"}}>{dataDetails[0].description}</p>
                  <h1 className="fw-bold mt-4" style={{color:"#F59A57"}}>{dataDetails[0].price}$</h1>
                 
                 <div className="d-flex">
                   <Link onClick={()=>{localStorage.getItem("login") === "true" || localStorage.getItem("email") ? addItem(dataDetails[0]) : navigate("/login")}}
                        to={"/cart"}
                        className="btn btn-lg px-4 me-md-2 addtocart"
                      >{t("product-details.2")}
                   </Link>
                   <Link onClick={()=> {addItem(dataDetails[0])}} to={"/checkout"} className="btn btn-lg px-4 me-md-2 goback">{t("product-details.3")}</Link>
                 </div>
               </div>
             </div>
           </div>
         </section>
         <section className="product-details-2 mx-5 my-5">
           <div className='container'>
             <h2 className="fw-bold">{t("cart.12")}</h2>
             <div className='row row-cols-2 row-cols-md-4 g-4 my-3'>
               {productData.slice(randomNumber,randomNumber+4).map(item=> (
                 <SingleInterestedCard
                   key={item.id}
                   id={item.id}
                   title={item.title}
                   img1={item.img[0]}
                   price={item.price}
                   category={item.category}
                   rating = {item.rating}
                   alldata={item}
                 />
               ))}
             </div>
           </div>
         </section>
        </>
      )}
    </>
  );
};

export default ProductDetails;
