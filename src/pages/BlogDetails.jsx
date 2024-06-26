import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import slugify from 'react-slugify'
import SingleInterestedCard from "../components/SingleIntrestedCard"
import { ProductContext } from "../context/ProductContext";
import { useCart } from "react-use-cart";
import slug from "react-slugify";
import { useTranslation } from 'react-i18next';



const BlogDetails = () => {
  const blogs = useSelector(p => p)
  const { url } = useParams()
  const blogDetails = blogs.filter(p => slugify(p.title) === url)
  const [productData] = useContext(ProductContext);
  const { t } = useTranslation()
  const randomNumber = Math.floor(Math.random() * 46);

  const { addItem } = useCart();
  const navigate = useNavigate();

  const dataDetails = productData.filter(p => slug(p.title) == url);

  return (
    <>
      <div className="container col-12 px-4 py-5">
        <img src={blogDetails[0].img} style={{ width: "100%" }} />
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={blogDetails[0].img} style={{ width: "100%" }} />
          </div>
          <div className="col-lg-6">
            <p className="lead">{blogDetails[0].desc.slice(0, 1410)}</p>

          </div>
          <div><p className="lead">{blogDetails[0].desc.slice(1411, 2229)}</p></div>

          <div>
            <div className="row flex-lg-row align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img src={blogDetails[0].img} style={{ width: "100%" }} />
              </div>
              <div className="col-lg-6">
                <p className="lead">{blogDetails[0].desc.slice(2230, 5000)}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='container'>
        <h3 className='fw-bold'>{t("cart.12")}</h3>
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

    </>
  )
}

export default BlogDetails