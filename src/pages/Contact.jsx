-import React, {useEffect} from 'react'
import contactImageOne from "../assets/img/contact-image-1.png"
import contactImageTwo from "../assets/img/contact-image-2.png"
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css"; 

const Contact = () => {
  useEffect(() => {
    Aos.init();
}, []);
  const {t} = useTranslation()
  return (
    <>
      <section>
      <div className='contact-main'>
      <div className='content'>
          <h1 className='card-title fw-bold display-4'>{t("contact.0")}</h1> 
             
      </div>
      </div>
    </section>
    <section className='section-contact mt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-sm-6'>
            <div className='d-flex'>
              <div data-aos="flip-left"><img src={contactImageOne} style={{width: "100%"}}/></div>
              <div className='d-flex flex-column text-area justify-content-center'>
              <ul>
                  <li><h2 className='fw-bold'>{t("contact.1")}</h2></li>
                  <li><h6 className='fw-bold'>Piazzale Ferrara Via Mincio, 4, 20139</h6></li>
                  <li><p className='fw-bold'>{t("contact.2")} 09:00 – 17:00</p></li>
                  <li><a className='fw-bold'>xtemos@gmail.com</a></li>
                  <li><a className='fw-bold'>(686) 492-1044</a></li>
                
                </ul>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 section-contact-second'>
          <div className='d-flex'>
              <div  data-aos="flip-right"><img src={contactImageTwo} style={{width: "100%"}}/></div>
              <div className='d-flex flex-column text-area justify-content-center'>
                <ul>
                  <li><h2 className='fw-bold'>{t("contact.3")}</h2></li>
                  <li><h6 className='fw-bold'>Piazzale Ferrara Via Mincio, 4, 20139</h6></li>
                  <li><p className='fw-bold'>{t("contact.4")} 09:00 – 17:00</p></li>
                  <li><a className='fw-bold'>xtemos@gmail.com</a></li>
                  <li><a className='fw-bold'>(686) 492-1044</a></li>
                
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='mx-5 my-5 section-contact-second'>
      <div className='container my-4' data-aos="fade-right">
        <div className='row'>
          <div className='col-12 col-sm-6'>
          <h3 className='fw-bold'>{t("contact.5")}</h3>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder={t("contact.6")}/>
            </div>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder={t("contact.7")}/>
            </div>
            <div className="input-group mb-3">
        <textarea cols="40" rows="10"  placeholder={t("contact.8")} name="your-message" style={{width: "766px", height: "213px"}}></textarea>
            </div>
            <div className="input-group mb-3">
              <button>{t("contact.9")}</button>
           </div>
          </div>
          <div className='col-12 col-sm-6 '>
          <h3 className='fw-bold'>{t("contact.10")} </h3>
            <div className='questions'>
              <ul className='p-0'>
                <Link to={"/faq"} style={{color: "black"}}><li className='mb-5 fw-bold'>{t("contact.11")}</li></Link>
                <Link to={"/faq"} style={{color: "black"}}><li className='mb-5 fw-bold'>{t("contact.12")}</li></Link>
                <Link to={"/faq"} style={{color: "black"}}><li className='mb-5 fw-bold'>{t("contact.13")}</li></Link>
                <Link to={"/faq"} style={{color: "black"}}><li className='mb-5 fw-bold'>{t("contact.14")}</li></Link>
                <Link to={"/faq"} style={{color: "black"}}><li className='mb-5 fw-bold'>{t("contact.15")}</li></Link>
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact