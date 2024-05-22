
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import i18n from '../i18n/i18next';
import { useTranslation } from 'react-i18next';

const Myprofile = () => {

  const toggleLang = (lang) => {
    i18n.changeLanguage(lang)
  }
  const { t } = useTranslation()

  const activeName = localStorage.getItem("activeUser");
  const activeNameParse = JSON.parse(activeName);

  return (
    <>
      <div className='contact-main'>
        <div className='content'>
          <h1 className='card-title fw-bold display-4'>{t("myprofile.0")}</h1>

        </div>
      </div>
      <div className='mx-5' style={{ height: "100vh" }}>
        <div className='d-flex align-items-center justify-content-center mt-5' style={{ textAlign: "center" }}>
          <div classname="container">
            <div classname="row ">
              <div class="col-12 col-lg-12">
                <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                <h2 class="fw-bold">{localStorage.getItem("activeUser")? (activeNameParse.firstname) : "" }</h2>
                <h2 className='fw-bold'>{localStorage.getItem("activeUser")? (activeNameParse.surname) : "" }</h2>
                <p><a class="btn btn-outline-dark" href="#">Go to settings »</a></p>
                <button className='btn btn-dark' onClick={() => {
                  localStorage.removeItem("login");
                  localStorage.removeItem("email")
                  localStorage.removeItem("password")
                  location.assign("/login");
                }}> Logout</button>
              </div>
            </div>
            {
              (localStorage.getItem("email") ) ?
              <NavLink to={"/dashboard"} className="btn btn-dark mt-3">Dashboard</NavLink> : ""
            }

          </div>

        </div>
      </div>

    </>
  )
}


export default Myprofile