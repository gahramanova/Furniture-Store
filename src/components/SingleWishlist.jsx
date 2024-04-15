import React from 'react'
import { useTranslation } from 'react-i18next';
import WishBtn from "../components/WishBtn"

const SingleWishlist = (product, alldata) => {
    const {t} = useTranslation()
  // const { addItem } = useCart();
  // const navigate = useNavigate()
  return (
    <>
    <div className="card">
      <img src={product.img1} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.price}</p>
        <button>Add to cart</button>
        <WishBtn product={alldata}/>
      </div>
    </div>



    {/* <div className="col-12 col-sm-6 col-md-3 my-3">
    
    <div className="card card-hover">
    <Link to={`/products/${(slug(product.title))}`} style={{textDecoration: "none"}}>
          <img src={product.img1} className="card-img-top" alt={product.title} style={{objectFit: "contain", height: "300px"}}/>
          <div className="card-body">
          <div className='d-flex justify-content-between'>
                <p className="card-title fw-bold" style={{color: "black"}}>{product.title}</p> 
                <p style={{color: "black"}}>{product.rating}<i class="fa-solid fa-star" style={{color: "#EABE12"}}></i></p> 
          </div>
            <p style={{color: "#ABA5A5"}} className="card-title">{product.category}</p>
            <p style={{color: "#F59A57"}} className='card-title fw-bold'>{product.price}$</p>
          </div>
          </Link>
          <div className='cart d-flex justify-content-around'>
                <button onClick={()=>{localStorage.getItem("login")=== ("true")?addItem(alldata):navigate("/login")}} className="addtocart">
                {t("home-section-one.13")}
                </button>
               <WishBtn product={alldata}/> */}
    </>
  )
}

export default SingleWishlist