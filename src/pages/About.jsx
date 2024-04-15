import React from 'react'
import coverphoto from "../assets/img/about-coverphoto.jpg"
import aboutOne from "../assets/img/about-1.webp"
import aboutTwo from "../assets/img/about-2.webp"
import memberOne from "../assets/img/team-member-one.png"
import memberTwo from "../assets/img/team-member-two.png"
import memberThree from "../assets/img/team-member-three.png"
import facebook from "../assets/img/facebook.png"
import instagram from "../assets/img/instagram.svg"
import linkedin from "../assets/img/linkedin.png"
import twitter from "../assets/img/twitter.png"
import aboutvideo from "../assets/img/aboutus-video.jpg"
import i18n from '../i18n/i18next';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom'
const About = () => {
  const toggleLang =(lang)=> {
    i18n.changeLanguage(lang)
  }
  const {t} = useTranslation()
  return (
    <>
    <section>
      <div className='bg-main'>
      <div className='content'>
            <h1 className='card-title fw-bold display-4'>{t("about.0")}</h1> 
             
      </div>
      </div>
    </section>
    
    <section className='about-section1'>
        <div className="container col-xxl-12 ">
        <div className="row flex-lg-row align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-9 d-flex">
            <div className='col-md-6 col-sm-6'>
              <img src={aboutOne}  style={{objectFit: "contain", height: "100%", width: "100%"}}/>
            </div>
            <div className='col-md-6 col-sm-6'>
              <img src={aboutTwo}  style={{objectFit: "contain", height: "100%", width: "100%"}} className='mx-2'/>
            </div>
          </div>
          <div className="col-lg-3">
            <h1 className="fw-bold lh-1 mb-3">{t("about.1")}</h1>
            <p style={{color:"#ccc"}}>{t("about.2")}</p>
            <p style={{color:"#ccc"}}>Dictumst per ante cras suscipit nascetur ullamcorper in nullam fermentum condimentum torquent iaculis reden posuere potenti viverra condimentum dictumst id tellus suspendisse convallis condimentum.</p>
            
          </div>
        </div>
      </div>

    </section>


    <section className='about-section2 my-5 mx-5'>
      <h3 className='fw-bold text-center'>{t("about.3")}</h3>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-sm-6 col-md-4'>
            <div className="card  card-member" >
              <img src={memberOne} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title fw-bold">Marvin McKinney</h5>
                <p className="card-text" style={{color: "#ccc"}}>Ceo, Co-Founder</p>
                <div className='icons d-flex mx-2'>
                  <NavLink to={"https://www.facebook.com/"}><img src={facebook}/></NavLink>
                  <NavLink to={"https://www.linkedin.com/home"}><img src={linkedin}/></NavLink>
                  <NavLink to={"https://www.instagram.com/"}><img src={instagram}/></NavLink>
                  
                </div>
                
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-md-4'>
            <div className="card card-member" >
              <img src={memberTwo} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title fw-bold">Diana Russel</h5>
                <p className="card-text" style={{color: "#ccc"}}>Ceo, Co-Founder</p>
                <div className='icons d-flex mx-2'>
                <NavLink to={"https://www.facebook.com/"}><img src={facebook}/></NavLink>
                <NavLink to={"https://twitter.com/i/flow/login"}><img src={twitter}/></NavLink>
                  <NavLink to={"https://www.linkedin.com/home"}><img src={linkedin}/></NavLink>
                  <NavLink to={"https://www.instagram.com/"}><img src={instagram}/></NavLink>
                </div>
                
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-md-4'>
            <div className="card card-member" >
              <img src={memberThree} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title fw-bold">Kristin Watson</h5>
                <p className="card-text" style={{color: "#ccc"}}>Ceo, Co-Founder</p>
                <div className='icons d-flex'>
                <NavLink to={"https://www.facebook.com/"}><img src={facebook}/></NavLink>
                <NavLink to={"https://twitter.com/i/flow/login"}><img src={twitter}/></NavLink>
                <NavLink to={"https://www.instagram.com/"}><img src={instagram}/></NavLink>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='about-section3  my-5'>
      <div className='container d-block align-content-center justify-content-center'>
        <div className='body'>
            <img src={aboutvideo} className='video-photo'></img>
          <div className='content'>
            <h5 className='card-title'>{t("about.4")}</h5>
            <h2 className='card-title fw-bold'>{t("about.5")}</h2>
            
       </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About