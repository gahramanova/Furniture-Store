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

  const randomNumber = Math.floor(Math.random() * 46);

  return (
    isEmpty ? <div className='d-flex justify-content-center'><img src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png" width={"500px"}></img></div> :
      <>
        <section className='cart-section-one mx-4'>
          <div className='container mt-4'>
            <div className='row'>
              <div className='col-12 col-lg-8'>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">{t("cart.13")}</th>
                      <th scope="col">{t("cart.14")}</th>
                      <th scope="col">{t("cart.15")}</th>
                      <th scope="col">{t("cart.16")}</th>
                      <th scope="col">{t("cart.17")}</th>
                      <th scope="col">{t("cart.18")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, c) => (
                      <tr key={c}>
                        <td>{c + 1}</td>
                        <td><img src={item.img[0]} style={{ width: "100%", objectFit: "contain", height: "70px" }} className="card-img-top" alt="..." /></td>
                        <td style={{ color: "#F57A59" }}>{item.title}</td>
                        <td style={{ color: "#F57A59" }}>{item.price}$</td>
                        <td style={{ color: "#F57A59" }}>
                          <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='btn dec mx-3'>-</button>
                          <span className='item-quantity'>{item.quantity}</span>
                          <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className='btn inc mx-3'>+</button>
                        </td>
                        <td>
                          <button onClick={() => {
                            removeItem(item.id);
                            swal("Remove product!", "You clicked the button!", "success");
                          }} className='btn-remove'><MdDeleteOutline />
                          </button>
                        </td>
                        <td><p className='fw-bold' style={{ color: "#F59A57" }}>{item.price * item.quantity}$</p></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className='d-flex justify-content-between mt-3 cards'>
                  <Link to={"/contact"} style={{ textDecoration: "none", color: "black" }}>
                    <div className='part-one'>
                      <div className='content d-flex align-content-center'>
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
              <div className='col-12 col-lg-4'>
                <div className='beside-container'>
                  <div className='cart-content'>
                    <h3 className='total fw-bold dark-text'>{t("cart.0")} </h3>
                    <ul>
                      <div className='d-flex justify-content-between'>
                        <li style={{ listStyle: "none" }}>{t("cart.1")}</li><h5 className='price dark-text'>{cartTotal}$</h5>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <li style={{ listStyle: "none" }}>{t("cart.2")}</li><h6 className='price dark-text'>{t("cart.3")}</h6>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <li style={{ listStyle: "none" }}>{t("cart.4")}</li><h3 className='price' style={{ color: "#F59A57" }}>{cartTotal}$</h3>
                      </div>
                    </ul>
                  </div>
                  <Link to={"/checkout"} className="btn buy-now mt-4">{t("cart.11")}</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='mt-5'>
          <div className='container mt-5'>
            <h2 className='fw-bold '>{t("cart.12")}</h2>
            <div className='row g-4'>
              <div className='row row-cols-2 row-cols-md-4 g-4 my-3'>
                {productData.slice(randomNumber, randomNumber + 4).map(item => (
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
          </div>
        </section>


      </>
  )
}

export default Cart