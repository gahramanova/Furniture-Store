import React, { useContext, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from 'react-use-cart';
import { ModeContext } from '../context/ModeContext';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import logoLight from "../assets/img/logo-light.svg"
import logoDark from "../assets/img/logo-black.svg"
import expert from "../assets/img/contact-expert.png"
import i18n from '../i18n/i18next';
import { useTranslation } from 'react-i18next';
import { Select } from 'antd';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import slug from "react-slugify"
import { ProductContext } from "../context/ProductContext"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { useWishlist } from 'react-use-wishlist';

const Header = () => {
  const [productData] = useContext(ProductContext)
  const { totalItems } = useCart();
  const {totalWishlistItems} = useWishlist()
  const navigate = useNavigate()
  const [mode, setMode] = useContext(ModeContext);
  const [query, setQuery] = useState("")
  console.log(mode)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleLang = (lang) => {
    i18n.changeLanguage(lang)
  }
  const { t } = useTranslation()


  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  

  const activeName = localStorage.getItem("activeUser");
  const activeNameParse = JSON.parse(activeName);


  // console.log(adminParse)
  
  document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', () => {
      let offcanvas = document.querySelector('.offcanvas');
      let offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
      offcanvasInstance.hide();
    });
  });
  

  return (
    <>
      <header>
        <div className='container-fluid p-0'>
          <div className="navbar navbar-expand-lg p-0 m-0 body gift">
            <div className="container navbar p-1">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-lg-0">

                  <li className="nav-item">
                    <NavLink to={"/"} className="nav-link text-secondary" >{t("navbar.0")}</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/showrooms"} className="nav-link text-secondary" aria-current="page" href="#">{t("navbar.1")}</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/about"} className="nav-link text-secondary" href="#">{t("navbar.2")}</NavLink>
                  </li>

                </ul>
                <ul className="navbar-nav mb-lg-0">
                  <li className="nav-item">
                    <NavLink to={"/contact"} className="nav-link text-secondary" style={{ borderRight: "1px solid #a2a2a2" }}><FaPhoneAlt className='mx-1' />(+604 994 56 78)</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/contact"} className="nav-link mx-3 " aria-current="page" href="#"><img src={expert}></img>
                      {t("navbar.3")}</NavLink>
                  </li>


                </ul>
              </div>
            </div>
          </div>

          <div className="container-fluid woodmart-one">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">
              <Link to={"/"}>
                <div className="col-12 col-md-2 mb-3 mb-md-0">
                  <img className='logo' src={mode === "light" ? logoDark : logoLight}></img>
                </div>
              </Link>

              <div className="nav col-12 col-md-5 mb-2 justify-content-center mb-md-0">

                <div className="input-group mb-3 flex-grow-2 mt-3 media" onClick={handleShow}>
                  <input type="text" className="form-control px-3 py-2  search" placeholder={t("header.0")} data-bs-toggle="modal" data-bs-target="#exampleModal" />
                </div>

                <Modal size='xl' show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Search area</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <ListGroup>
                      <div className="input-group mb-3">
                        <input onChange={e => setQuery(e.target.value)} type="text" className="form-control" placeholder="Enter the product name" />
                        <button className="btn btn-outline-dark" type="button" id="button-addon2">Search</button>
                      </div>
                      {!query ? "" : productData.filter(p => p.title.toLocaleLowerCase().includes(query)).map(item => (
                        <Link to={`/products/${slug(item.title)}`} style={{ textDecoration: "none" }} onClick={() => { handleClose() }}>
                          <ListGroup.Item><img src={item.img[0]} width={"70px"} className='me-4' />{item.title}</ListGroup.Item>
                        </Link>
                      ))}

                    </ListGroup>
                  </Modal.Body>
                </Modal>
              </div>
              <div className="col-md-5 text-end d-flex justify-content-evenly align-items-center">
                <div>
                  <button className='btn position-relative' onClick={() => {
                    mode === "light" ? setMode("dark") : setMode("light")
                    mode === "light" ? localStorage.setItem("mode", "dark") : localStorage.setItem("mode", "light")
                  }}>
                    {mode === "light" ? <MdOutlineLightMode /> : <MdOutlineDarkMode className='dark-mode-logo' />}
                  </button>

                  <Select
                    defaultValue={i18n.language}
                    style={{
                      width: 58,
                    }}
                    onChange={toggleLang}
                    options={[
                      {
                        value: 'en',
                        label: 'En',
                      },
                      {
                        value: 'az',
                        label: 'Az',
                      },
                    ]}
                  />
                </div>
                <div>
                  <Link to={localStorage.getItem("login") === "true" || localStorage.getItem("email") ? "/cart" : "/login"} type="button" style={{ backgroundColor: "#EFEEEB" }} className="btn position-relative mx-2 cart"

                  >
                    <IoCartOutline />
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                      {localStorage.getItem("login") === "true" || localStorage.getItem("email") ? totalItems : 0}
                    </span>
                  </Link>

                  <Link to={localStorage.getItem("login") === "true" || localStorage.getItem("email") ? "/wishlist" : "/login"} type="button" style={{ backgroundColor: "#EFEEEB" }} className='btn media position-relative mx-2'>
                    <i className="fa-regular fa-heart"></i>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                      {localStorage.getItem("login") === "true" || localStorage.getItem("email") ? totalWishlistItems : 0}
                    </span>
                    </Link>

                  {localStorage.getItem("login") === "true" && localStorage.getItem("activeUser") ?
                    <NavLink className="media" style={{ textDecoration: "none", color: "black" }} to={"/myprofile"}> <FaUserAlt className='dark-mode-logo mx-2'/>{t("header-login.2")} {activeNameParse.firstname}

                    </NavLink>
                    : localStorage.getItem("email") ? (
                      <NavLink className="media" style={{ textDecoration: "none", color: "black" }} to={"/myprofile"}>
                        <FaUserAlt className='dark-mode-logo mx-2' />
                        {t("header-login.2")} Admin
                      </NavLink>
                    )
                    :
                    <span className='mx-2'>
                      <NavLink to={"/login"} className='btn mx-2 my-2' style={{ backgroundColor: "#EFEEEB" }}> <i className="fa-regular fa-user mx-2"></i>{t("header-login.0")}</NavLink>
                      <NavLink to={"/register"} className="btn" style={{ backgroundColor: "#EFEEEB" }}><i className="fa-regular fa-user mx-2"></i>{t("header-login.1")}</NavLink>
                    </span>
                  }

                </div>
              </div>

            </div>
            <nav className="navbar navbar-expand-lg p-0">
              <div className="container-fluid p-0">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink to={"/"} className="nav-link link-body-emphasis">{t("header.1")}</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={"/about"} className="nav-link link-body-emphasis">{t("header.2")}</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={"/blog"} className="nav-link link-body-emphasis">{t("header.3")}</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={"/products"} className="nav-link link-body-emphasis">{t("header.4")}</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={"/showrooms"} className="nav-link link-body-emphasis">{t("header.5")}</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={"/contact"} className="nav-link link-body-emphasis">{t("header.6")}</NavLink>
                    </li>
                  </ul>
                </div>

              </div>
            </nav>

          </div>


          <div className="container-fluid p-0 woodmart-two">

            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid lightmode">
                <Link to={localStorage.getItem("login") === "true" ? "/cart" : "/login"} type="button" style={{ backgroundColor: "#EFEEEB" }} className="btn position-relative mx-2 cart"

                >
                  <IoCartOutline />
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                    {localStorage.getItem("login") === "true" ? totalItems : 0}
                  </span>
                </Link>
                <Link to={"/"}>
                  <img className='logo px-3' src={mode === "light" ? logoDark : logoLight} style={{ width: "200px" }} />
                </Link>
     

                  <div>
                  <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><span className="navbar-toggler-icon" /></button>
                  <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div className='d-flex justify-content-between'>
                    <div className="offcanvas-header">
                    <ul className="navbar-nav me-auto mb-2">
                    <li className="nav-item">
                      <NavLink to={"/"} className="nav-link link-body-emphasis">{t("header.1")}</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={"/about"} className="nav-link link-body-emphasis">{t("header.2")}</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={"/blog"} className="nav-link link-body-emphasis">{t("header.3")}</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={"/products"} className="nav-link link-body-emphasis">{t("header.4")}</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={"/showrooms"} className="nav-link link-body-emphasis">{t("header.5")}</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={"/contact"} className="nav-link link-body-emphasis">{t("header.6")}</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={"/wishlist"} className="nav-link link-body-emphasis">{t("header.7")}</NavLink>
                    </li>
                  </ul>
                  

                  <div className='mode-user'>
                    <div className='login-buttons'>

                      {localStorage.getItem("login") === "true" || localStorage.getItem("email") ?
                        <NavLink style={{ textDecoration: "none", color: "black" }} to={"/myprofile"}> 
                        <FaUserAlt className='dark-mode-logo mx-2'/>
                        {t("header-login.2")} {activeNameParse.firstname}

                        </NavLink>
                        :
                        <span className='mx-2'>
                          <NavLink to={"/login"} className='btn mx-2 my-2' style={{ backgroundColor: "#EFEEEB" }}> <i className="fa-regular fa-user mx-2"></i>{t("header-login.0")}</NavLink>
                          <NavLink to={"/register"} className="btn" style={{ backgroundColor: "#EFEEEB" }}>
                            <i className="fa-regular fa-user mx-2"></i>{activeNameParse.firstname}</NavLink>
                        </span>
                      }

                    </div>
                    <div className='login mt-4'>
                      <button className='btn position-relative ' onClick={() => {
                        mode === "light" ? setMode("dark") : setMode("light")
                        mode === "light" ? localStorage.setItem("mode", "dark") : localStorage.setItem("mode", "light")
                      }}>
                        {mode === "light" ? <MdOutlineLightMode /> : <MdOutlineDarkMode className='dark-mode-logo'/>}
                      </button>

                      <Select
                        defaultValue={i18n.language}
                        style={{
                          width: 58,
                        }}
                        onChange={toggleLang}
                        options={[
                          {
                            value: 'en',
                            label: 'En',
                          },
                          {
                            value: 'az',
                            label: 'Az',
                          },
                        ]}
                      />
                    </div>
                  </div>
                    </div>
                    <div>
                     <button type="button" className="btn-close my-3 mx-3" data-bs-dismiss="offcanvas" aria-label="Close" />
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

          </div>

        </div>
      </header>

    </>

  )
}

export default Header