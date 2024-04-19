import React from 'react'
import { useWishlist } from 'react-use-wishlist'
import { Link, useNavigate } from 'react-router-dom';
import slug from "react-slugify"
import { useCart } from 'react-use-cart';
import { useTranslation } from 'react-i18next';
import WishBtn from '../components/WishBtn';
import SingleProducts from '../components/SingleProducts';

const Wishlist = () => {
  const { items, updateWishlistMetadata } = useWishlist();
  const { t } = useTranslation();
  const { addItem } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <section className='section-products'>
        <div className='bg-main'>
          <div className='content'>
            <h1 className='card-title fw-bold display-4'>{t("wishlist.0")}</h1>

          </div>
        </div>
      </section>
      <div className='container'>
        <div className='row'>
          {items.map(item => (
            <div key={item.id} className='col-12 col-sm-6 col-md-3 my-3'>
              <div className='first-div'>
                <div className="card card-hover">
                  <Link to={`/products/${slug(item.title)}`} style={{ textDecoration: "none" }}>
                    <img src={item.img[0]} className="card-img-top" alt={item.title} style={{ objectFit: "contain", height: "300px" }} />
                    <div className="card-body">
                      <div className='d-flex justify-content-between'>
                        <p className="card-title fw-bold" style={{ color: "black" }}>{item.title}</p>
                        <p style={{ color: "black" }}>{item.rating}<i className="fa-solid fa-star" style={{ color: "#EABE12" }}></i></p>
                      </div>
                      <p style={{ color: "#ABA5A5" }} className="card-title">{item.category}</p>
                      <p style={{ color: "#F59A57" }} className='card-title fw-bold'>{item.price}$</p>
                    </div>
                  </Link>
                  <div className='cart d-flex justify-content-around'>
                    <button onClick={() => localStorage.getItem("login") === "true" ? addItem(item) : navigate("/login")} className="addtocart">
                      {t("home-section-one.13")}
                    </button>
                    <WishBtn product={item} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Wishlist;
