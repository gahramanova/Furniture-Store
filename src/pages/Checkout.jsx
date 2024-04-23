import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import swal from 'sweetalert'


const Checkout = () => {
    const [firstName, setFirstname] = useState()
    const [surname, setSurname] = useState()
    const [alert, setAlert] = useState()
    const [text, setText] = useState()
    const { items,
        cartTotal } = useCart()

    const checkOutSubmit = e => {
        e.preventDefault()
        if (!firstName || !surname) {
            setAlert("danger")
            setText("Please fill the input")
        } else {
            swal("Success", "You clicked the button!", "success");
            location.assign("/products")
        }
    }
    return (
        <>
            <div className='d-flex align-items-center justify-content-center flex-column'>
                <h5 className='mt-4'>Do you have an account? <Link to={"/login"} style={{ textDecoration: "none", color: "#F59A57" }}>Login</Link></h5>
                <div className='col-6'>
                    <form onSubmit={checkOutSubmit}>
                        <div className='d-flex'>
                            <h3 className='mt-3 billing fw-bold'>Billing Details</h3>
                        </div>
                        <h6 style={{ color: "#F59A57" }} className='fw-bold mt-4'>First Name *</h6>
                        <div class={`alert alert-${alert}`} role="alert" className="p-0">
                            {text}
                        </div>
                        <div className="input-group mb-3">
                       
                            <input type="text" className="form-control" value={firstName} onChange={e => setFirstname(e.target.value)} />
                        </div>
                        <h6 style={{ color: "#F59A57" }} className='fw-bold mt-4'>Last Name *</h6>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control"  value={surname} onChange={e => setSurname(e.target.value)} />
                        </div>
                        <h6 style={{ color: "#F59A57" }} className='fw-bold mt-4'>Email address *</h6>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" />
                        </div>
                        <h6 style={{ color: "#F59A57" }} className='fw-bold mt-4'>City *</h6>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" />
                        </div>
                        <h6 style={{ color: "#F59A57" }} className='fw-bold mt-4'>Street address *</h6>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" />
                        </div>
                        <h6 style={{ color: "#F59A57" }} className='fw-bold mt-4'>Zip Code*</h6>
                        <div className="input-group mb-3">
                            <input type="number" className="form-control" />
                        </div>
                        <h6 style={{ color: "#F59A57" }} className='fw-bold mt-4'>Order notes (optional)</h6>
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 200 }} defaultValue={""} />
                            <label htmlFor="floatingTextarea2">Comments</label>
                        </div>
                        <div className='d-flex'>
                            <h3 className='mt-3 billing fw-bold'>Your order</h3>
                        </div>

                        <table class="table">
                            <thead>
                                <tr>

                                    <th scope="col">#</th>
                                    <th scope="col">Product Photo</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, c) => (
                                    <tr key={c}>
                                        <td >{c + 1}</td>
                                        <td><img src={item.img[0]} className='card-images' /></td>
                                        <td style={{ color: "#F56A59" }}>{item.title}</td>
                                        <td style={{ color: "#F56A59" }}>{item.price}$</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className='d-flex justify-content-between'>
                            <h4 className='fw-bold' style={{ color: "#F59A57" }}>Cart total</h4>
                            <h4 className='fw-bold' style={{ color: "#F59A57" }}>{cartTotal}$</h4>
                        </div>

                        <div className='d-flex'>
                            <h3 className='mt-3 billing fw-bold'>Payment Information</h3>
                        </div>

                        <div className='d-flex align-items-center justify-content-center mt-4'>
                            <div className='col-6'>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder='**** **** **** ****'  />

                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder='MM/YY'  />
                                    <input type="text" className="form-control" placeholder='***'  />
                                </div>
                                <button className='btn payment' type='submit' onClick={() => {
                                      window.scroll({
                                        top: 0,
                                        left: 0,
                                        behavior: "smooth",
                                      });
                                      }}>Payment</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Checkout