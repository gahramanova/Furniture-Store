import React from 'react'
import ellitis from "../assets/img/cardLogoOne.png"
import hay from "../assets/img/cardLogoTwo.png"
import kettal from "../assets/img/cardLogoThree.png"
import lladro from "../assets/img/cardLogoFour.png"
import poliform from "../assets/img/cardLogoFive.png"
import showroomMilanoOne from "../assets/img/showroom-milano-1.webp"
import showroomMilanoTwo from "../assets/img/showroom-milano-2.webp"
import showroomMilanoThree from "../assets/img/showroom-milano-3.webp"
import showroomTorinoOne from "../assets/img/showroom-torino-1.jpg"
import showroomTorinoTwo from "../assets/img/showroom-torino-2.jpg"
import showroomTorinoThree from "../assets/img/showroom-torino-3.jpg"
import i18n from '../i18n/i18next';
import { useTranslation } from 'react-i18next';
const Showrooms = () => {
  const toggleLang =(lang)=> {
    i18n.changeLanguage(lang)
  }
  const {t} = useTranslation()
  return (
    <>
      <section>
        <div className='showrooms-main'>
          <div className='content'>
            <h1 className='card-title fw-bold display-4'>{t("showroom.0")}</h1>

          </div>
        </div>
      </section>
      <section className='mx-5 my-5 section-showroom-1'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-8'>
              <h1 className='fw-bold'>{t("showroom.1")}</h1>
              <p>{t("showroom.2")}</p>
              <div className='d-flex'>
                <img src={ellitis}/>
                <img src={hay}/>
                <img src={kettal}/>
                <img src={lladro}/>
                <img src={poliform}/>
              </div>
            </div>
            <div className='col-12 col-sm-4'>
            <ul>
                  <li><p className='fw-bold'>Milano</p></li>
                  <li><p className='fw-bold'>Milano Piazzale Ferrara Via Mincio, 4, 20139</p></li>
                  <li><p className='fw-bold'>Monday – Friday 09:00 – 17:00</p></li>
                  <li><a className='fw-bold'>xtemos@gmail.com</a></li>
                  <li><a className='fw-bold'>(686) 492-1044</a></li>
                  <button className='mt-4'>{t("showroom.3")}</button>
                </ul>
                
            </div>
            <div className='col-12 col-sm-6 col-md-4'>
            <div className="card  card-member" >
              <img src={showroomMilanoOne} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className='col-12 col-sm-6 col-md-4'>
            <div className="card card-member" >
              <img src={showroomMilanoTwo} className="card-img-top" alt="..." />

            </div>
          </div>
          <div className='col-12 col-sm-6 col-md-4'>
            <div className="card card-member" >
              <img src={showroomMilanoThree} className="card-img-top" alt="..." />
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className='mx-5 my-5 section-showroom-2'>
      <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-8'>
              <h1 className='fw-bold'>{t("showroom.4")}</h1>
              <p>{t("showroom.5")}</p>
              <div className='d-flex'>
                <img src={ellitis}/>
                <img src={hay}/>
                <img src={kettal}/>
                <img src={lladro}/>
                <img src={poliform}/>
              </div>
            </div>
            <div className='col-12 col-sm-4'>
            <ul>
                  <li><p className='fw-bold'>Milano</p></li>
                  <li><p className='fw-bold'>Milano Piazzale Ferrara Via Mincio, 4, 20139</p></li>
                  <li><p className='fw-bold'>Monday – Friday 09:00 – 17:00</p></li>
                  <li><a className='fw-bold'>xtemos@gmail.com</a></li>
                  <li><a className='fw-bold'>(686) 492-1044</a></li>
                  <button className='mt-4 btn'>{t("showroom.6")}</button>
                </ul>
                
            </div>
            <div className='col-12 col-sm-6 col-md-4'>
            <div className="card  card-member" >
              <img src={showroomTorinoOne} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className='col-12 col-sm-6 col-md-4'>
            <div className="card card-member" >
              <img src={showroomTorinoTwo} className="card-img-top" alt="..." />

            </div>
          </div>
          <div className='col-12 col-sm-6 col-md-4'>
            <div className="card card-member" >
              <img src={showroomTorinoThree} className="card-img-top" alt="..." />
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Showrooms