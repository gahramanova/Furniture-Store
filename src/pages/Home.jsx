import React from "react";
import Slider from 'react-slick';
import decor from "../assets/img/category-decor.webp"
import armchair from "../assets/img/category-armchair.webp"
import beds from "../assets/img/category-beds.webp"
import chairs from "../assets/img/category-chairs.webp"
import lighting from "../assets/img/category-lighting.webp"
import sofas from "../assets/img/category-sofas.webp"
import storage from "../assets/img/category-storage.webp"
import textiles from "../assets/img/category-textiles.webp"
import toys from "../assets/img/category-toys.webp"
import tables from "../assets/img/category-tables.webp"
import slider1 from "../assets/img/slider1.png"
import slider2 from "../assets/img/slider2.png"
import slider3 from "../assets/img/slider3.png"
import { NavLink, Link } from "react-router-dom";
import SingleHomeProducts from "../components/SingleHomeProducts";
import { useContext, useEffect } from 'react'
import { ProductContext } from '../context/ProductContext'
import cardLogoOne from "../assets/img/cardLogoOne.png"
import cardLogoTwo from "../assets/img/cardLogoTwo.png"
import cardLogoThree from "../assets/img/cardLogoThree.png"
import cardLogoFour from "../assets/img/cardLogoFour.png"
import cardLogoFive from "../assets/img/cardLogoFive.png"
import ellitis from "../assets/img/ellitis.jpg"
import hay from "../assets/img/hay.jpg"
import kettal from "../assets/img/kettal.jpg"
import lladro from "../assets/img/lladro.jpg"
import poliform from "../assets/img/poliform.jpg"
import lazy from "../assets/img/lazy.webp"
import furniture from "../assets/img/furniture-choosing-rules.webp"
import videoPhoto from "../assets/img/video-photo.jpg"
import i18n from '../i18n/i18next';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';
import Aos from "aos";
import "aos/dist/aos.css";
import { useSelector } from 'react-redux'
import slugify from 'react-slugify'


const Home = () => {
  
  useEffect(() => {
    Aos.init();
}, []);
const blogs = useSelector(p => p)

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    accessibility: true,
    // style: { width: "100%", overflow: "hidden"},
    // prevArrow: <div className="slick-prev">Previous</div>,
    // nextArrow: <div className="slick-next">Next</div>
  };

  const [productData] = useContext(ProductContext)
  const toggleLang = (lang) => {
    i18n.changeLanguage(lang)
  }
  const { t } = useTranslation()
  return (
    <>
      <section className="section1">
        <Slider {...settings}>
          <div className="slider1">
            <div className="content" data-aos = "fade-down-right">
              <div className="first d-flex align-items-center" >
                <img className="mx-2" style={{ width: "80px", height: "80px" }} src={slider1} />
                <h5 style={{ color: "#414240" }}> {t(parse((`home-slider.0`)))}<br /></h5>
              </div>
              <div className="second">
                <h1 className="fw-bold" style={{ color: "#414240" }}>{t("home-slider.1")}</h1>
              </div>
              <div className="third">
                <button className="btn fw-bold shop-now"> {t("home-slider.2")}</button>

              </div>
            </div>
          </div>
          <div className="slider2">
            <div className="content" data-aos = "fade-down-right">
              <div className="first d-flex align-items-center">
                <img className="mx-2" style={{ width: "80px", height: "80px" }} src={slider2} />
                <h5 style={{ color: "#414240" }}>{t("home-slider.3")}</h5>
              </div>
              <div className="second">
                <h1 className="fw-bold" style={{ color: "#414240" }}>{t("home-slider.4")}</h1>
              </div>
              <div className="third">
                <button className="btn fw-bold shop-now"> {t("home-slider.2")}</button>

              </div>
            </div>
          </div>
          <div className="slider3">
            <div className="content" data-aos = "fade-down-right">
              <div className="first d-flex align-items-center">
                <img className="mx-2" style={{ width: "80px", height: "80px" }} src={slider3} />
                <h5 style={{ color: "#414240" }}>{t("home-slider.5")}</h5>
              </div>
              <div className="second">
                <h1 className="fw-bold" style={{ color: "#414240" }}>{t("home-slider.6")}</h1>
              </div>
              <div className="third">
                <button className="btn fw-bold shop-now"> {t("home-slider.2")}</button>

              </div>
            </div>
          </div>
        </Slider>
      </section>

      {/* Our Categories ==================================================================================================*/}
      <section className="my-5 mx-5 home-section">
        <div className="container" data-aos = "fade-down-right">
          <h2 className="fw-bold">{t("home-section-one.0")}</h2>
          <p>{t("home-section-one.1")}</p>
          <div className="row row-cols-2 row-cols-md-5 g-4">
            <div className="col mb-3">
              <NavLink to={"/products"}>
                <div className="card card-home-section">
                  <img src={chairs} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{t("home-section-one.2")}</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/products"}>
                <div className="card card-home-section">
                  <img src={tables} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{t("home-section-one.3")}</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/products"}>
                <div className="card card-home-section">
                  <img src={sofas} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{t("home-section-one.4")}</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/products"}>
                <div className="card card-home-section">
                  <img src={armchair} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{t("home-section-one.5")}</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/products"}>
                <div className="card card-home-section">
                  <img src={beds} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{t("home-section-one.6")}</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/products"}>
                <div className="card card-home-section">
                  <img src={storage} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{t("home-section-one.7")}</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/products"}>
                <div className="card card-home-section">
                  <img src={textiles} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{t("home-section-one.8")}</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/products"}>
                <div className="card card-home-section">
                  <img src={lighting} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{t("home-section-one.9")}</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/products"}>
                <div className="card card-home-section">
                  <img src={toys} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{t("home-section-one.10")}</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/products"}>
                <div className="card card-home-section">
                  <img src={decor} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{t("home-section-one.11")}</h5>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section2">
        <div className='container' data-aos="zoom-in-down">
          <h2 className="fw-bold mb-4">{t("home-section-one.12")}</h2>
          <div className='row row-cols-2 row-cols-md-5 g-4'>
            {productData.slice(33, 43).map(item => (
              <SingleHomeProducts
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
      <section className="section2-responsive">
        <div className='container' >
          <h2 className="fw-bold mb-4">{t("home-section-one.12")}</h2>
          <div className='row g-4'>
           <div className="col-12 col-sm-6">
             {productData.slice(35, 45).map(item => (
              <SingleHomeProducts
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

      <section className="section3">
        <div className="container my-5" >
          <h2 className="fw-bold mb-4">{t("home-section-one.14")}</h2>
          <div className="row row-cols-1 row-cols-md-5 g-4">
            <div className="col col-mb-3">
              <NavLink to={"/products"}>
                <div className="card">
                  <img src={ellitis} className="card-img-bottom" alt="..." />
                  <div className="card-body ">
                    <div><img src={cardLogoOne} style={{ width: "50px", height: "50px" }} className="card-img-bottom" alt="..." /></div>
                    <div className="mx-2">
                      <h5 className="card-title-one">Ellitis</h5>
                      <p className="text-paragraf">Talosa / France</p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col col-mb-3">
              <NavLink to={"/products"}>
                <div className="card">
                  <img src={hay} className="card-img-bottom" alt="..." />
                  <div className="card-body">
                    <div><img src={cardLogoTwo} style={{ width: "50px", height: "50px" }} className="card-img-bottom" alt="..." /></div>
                    <div className="mx-2">
                      <h5 className="card-title-one">Hay</h5>
                      <p className="text-paragraf">Barcelona / Spain</p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col col-mb-3">
              <NavLink to={"/products"}>
                <div className="card">
                  <img src={kettal} className="card-img-bottom" alt="..." />
                  <div className="card-body">
                    <div><img src={cardLogoThree} style={{ width: "50px", height: "50px" }} className="card-img-bottom" alt="..." /></div>
                    <div className="mx-2">
                      <h5 className="card-title-one">Kettal</h5>
                      <p className="text-paragraf">Barcelona / Spain</p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col col-mb-3">
              <NavLink to={"/products"}>
                <div className="card">
                  <img src={lladro} className="card-img-bottom" alt="..." />
                  <div className="card-body">
                    <div> <img src={cardLogoFour} style={{ width: "50px", height: "50px" }} className="card-img-bottom" alt="..." /></div>
                    <div className="mx-2">
                      <h5 className="card-title-one">Lladro</h5>
                      <p className="text-paragraf">Valensia / Spain</p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col col-mb-3">
              <NavLink to={"/products"}></NavLink>
              <div className="card">
                <img src={poliform} className="card-img-bottom" alt="..." />
                <div className="card-body">
                  <div><img src={cardLogoFive} style={{ width: "50px", height: "50px" }} className="card-img-bottom" alt="..." /></div>
                  <div className="mx-2">
                    <h5 className="card-title-one">Poliform</h5>
                    <p className="text-paragraf">Como / Italy</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

  <section className="section5">
  <div className="container">
    <h2 className="fw-bold">{t("home-section-one.15")}</h2>
    <p style={{ color: "#ccc" }}>{t("home-section-one.16")}</p>
    <div className="row">
      <div className="col-sm-6 col-md-7 col-lg-8">
        <div className="row">
          {productData.slice(1, 4).map(item => (
            <div className="col-12 col-sm-6 col-md-4">
              <SingleHomeProducts
                id={item.id}
                title={item.title}
                img1={item.img[0]}
                price={item.price}
                category={item.category}
                rating={item.rating}
                alldata={item}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="col-sm-6 col-md-5 col-lg-4">
        <img className="lazy" src={lazy} style={{ width: "100%", height: "540px", borderRadius: "15px" }} />
      </div>
    </div>
  </div>
</section>




      <section className="section6 mx-5 my-5">
        <div className="container" data-aos="zoom-in">
          <h2 className="fw-bold">{t("home-section-one.17")}</h2>
          <div className="row">
            <div className="col-sm-12 col-md-5 d-flex flex-column" >
              <img src={furniture} style={{ width: "100%" }} />
            </div>
            <div className="col-sm-12 col-md-7" >
              <h5 className="fw-bold">{t("home-section-one.18")}</h5>
              <p style={{ color: "#727272" }}>{t("home-section-one.19")}</p>
              <ul>
                <li style={{ color: "#727272" }}>{t("home-section-one.20")}</li>
                <li style={{ color: "#727272" }}>{t("home-section-one.21")}</li>
                <li style={{ color: "#727272" }}>{t("home-section-one.22")}</li>
              </ul>
              <div className="photo d-flex">
                <img className="video-photo" src={videoPhoto} style={{ width: "100%" }} />
                <div className="content">
                  <h6 className="text-title">{t("home-section-one.23")}</h6>
                  <h3 className="text-title">{t("home-section-one.24")}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section7 my-5 mx-5">
        <div className="container">
          <h2 className="fw-bold">Lastest articles</h2>
          <div className='row'>
         {blogs.map(item=>(
           <div className='col-12 col-sm-6 col-md-3'>
           <div className="card g-4">
           <Link to={`/blog/${(slugify(item.title))}`} style={{textDecoration: "none", color: "black"}}>
           <img src={item.img[0]} className="card-img-top" alt="..." />
               <div className="card-body">
                 <h5 className="card-title fw-bold">{item.title}</h5>
                 <p className="card-text">{item.desc.slice(1,100)}...</p>
                 <p className="card-text" style={{color: "#F59A57"}}>{item.date}</p>
               </div>
           </Link>
             </div>
           </div>
         ))}
        </div>
        </div>
      </section>
    </>
  )
}

export default Home