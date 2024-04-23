import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import slug from 'react-slugify';
import WishBtn from './WishBtn';
import { useCart } from 'react-use-cart';
import Rating from './Rating';


const SingleHomeProducts = ({img1,title,category, price,rating, alldata}) => {
    
  const {t} = useTranslation()
  const { addItem } = useCart();
  const navigate = useNavigate()
  return (
    <>
    <div className="col col-mb-3 my-3">
    <div className='first-div'>
    <div className="card card-hover">
        <Link to={`/products/${(slug(title))}`} style={{textDecoration: "none", color: "black"}}>
        <img src={img1} className="card-img-middle" alt="..." style={{objectFit: "contain", height: "300px"}}/>
          <div className="card-body">
            <div className='d-flex justify-content-between'>
            <p className="card-title fw-bold">{title}</p> 
            <Rating value={rating} color={"#EABE12"}/>
            </div>
            <p style={{color: "#ABA5A5"}} className="card-title">{category}</p>
            <p style={{color: "#F59A57"}} className='card-title fw-bold'>${price}</p>
            </div>
            </Link>
          
            <div className='cart d-flex justify-content-around'>
                <button onClick={()=>{
                  if (localStorage.getItem("login") === "true") {
                    addItem(alldata)
                    swal("Add to cart!", "You clicked the button!", "success");
                  } else {
                    navigate("/login")
                  }
                  }} className="addtocart">
                {t("home-section-one.13")}
                </button>
               <WishBtn product={alldata}/>
            </div>
            
        </div>
    </div>

      </div>
    </>
  )
}

export default SingleHomeProducts