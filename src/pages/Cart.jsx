import React, { useContext } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SingleInterestedCard from "../components/SingleIntrestedCard"
import { ProductContext } from "../context/ProductContext";
import swal from 'sweetalert'



const Cart = () => {
  const [productData] = useContext(ProductContext);
  const { t } = useTranslation()
  const {
    items,
    updateItemQuantity,
    removeItem,
    isEmpty,
    cartTotal } = useCart();
  return (
    isEmpty ? <div className='d-flex justify-content-center'><img src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png" width={"500px"}></img></div> :
      <>
        <section className='cart-section-one'>
          <div className='container mt-4'>
            <div className='row'>
              <div className='col-12 col-lg-7'>
                {items.map(item => (
                  <div className="card" >
                    <div className='d-flex'>
                      <div className='d-flex align-items-center'>
                        <img src={item.img[0]} style={{ width: "100%", padding: "10px" }} className="card-img-top" alt="..." />
                      </div>
                      <div className='d-flex'>
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text">{(item.description).slice(1, 90)}...</p>

                        </div>
                      </div>
                      <div className='d-flex align-items-center quantity'>
                        <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='btn dec mx-3'>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className='btn inc mx-3'>+</button>
                        <p className='fw-bold' style={{ color: "#F59A57" }}>{item.price * item.quantity}$</p>
                      </div>
                      <div className='d-flex mx-4 align-items-center'>
                        <button onClick={() => {
                           removeItem(item.id)
                           swal("Remove product!", "You clicked the button!", "success")
                        }
                          } className='btn-remove'><MdDeleteOutline />
                          </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className='d-flex justify-content-between mt-3 cards'>
                  <Link to={"/contact"} style={{ textDecoration: "none", color: "black" }}>
                    <div className='part-one'>
                      <div className='content d-flex align-items-lg-start'>
                        <div className='m-3'><i className="fa-solid fa-phone" style={{ color: "#f59a57" }}></i></div>
                        <div>
                          <h5 className='dark-text'>{t("cart.5")}</h5>
                          <p className='dark-text' style={{ color: "ccc" }}>{t("cart.6")}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className='part-two'>
                    <div className='content d-flex align-items-lg-start'>
                      <div className='m-3'><i className="fa-solid fa-lock" style={{ color: "#f59a57" }}></i></div>
                      <div>
                        <h5 className='dark-text'>{t("cart.7")}</h5>
                        <p className='dark-text' style={{ color: "ccc" }}>{t("cart.8")}</p>
                      </div>
                    </div>
                  </div>
                  <div className='part-three'>
                    <div className='content d-flex align-items-lg-start'>
                      <div className='m-3'><i className="fa-solid fa-shield-halved" style={{ color: "#f59a57" }}></i></div>
                      <div>
                        <h5 className='dark-text'>{t("cart.9")}</h5>
                        <p className='dark-text' style={{ color: "ccc" }}>{t("cart.10")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-5 beside-container'>
                <div className='content'>
                  <h3 className='total fw-bold dark-text'>{t("cart.0")} </h3>
                  <div className='d-flex justify-content-between sub-total'>
                    <div className='fw-bold dark-text'>{t("cart.1")} </div>
                    <h5 className='price dark-text'>{cartTotal}$</h5>
                  </div>
                  <div className='d-flex justify-content-between free-shipping'>
                    <div className='fw-bold dark-text'>{t("cart.2")} </div>
                    <div className='price dark-text'>{t("cart.3")}</div>
                  </div>
                  <div className='d-flex justify-content-between total'>
                    <h5 className='fw-bold dark-text'>{t("cart.4")} </h5>
                    <h3 className='price' style={{ color: "#F59A57" }}>{cartTotal}$</h3>
                  </div>
                <Link to={"/checkout"} className="btn buy-now mt-4">{t("cart.11")}</Link>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className='second-section mt-0'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-lg-7'>

              </div>
              <div className='col-12 col-lg-5 payment'>

              </div>
            </div>
          </div>
        </section> */}
        <section>
          <div className='container mt-5'>
          <h2 className='fw-bold '>{t("cart.12")}</h2>
            <div className='row row-cols-2 row-cols-md-5 g-4 my-3'>
              {productData.slice(31, 36).map(item => (
                <SingleInterestedCard
                  id={item.id}
                  title={item.title}
                  img1={item.img[0]}
                  price={item.price}
                  category={item.category}
                  rating={item.rating}
                  alldata={item}
                />
              ))}
            </div>
          </div>
        </section>


      </>
  )
}

export default Cart