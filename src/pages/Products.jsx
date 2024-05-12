import React, { useContext, useState, useEffect } from 'react'
import { ProductContext } from '../context/ProductContext'
import SingleProducts from '../components/SingleProducts'
import { useTranslation } from 'react-i18next';
import { Radio, Select, Slider } from 'antd';
import { Pagination } from 'antd';
import Aos from "aos";
import "aos/dist/aos.css";

const Products = () => {
  const [productData] = useContext(ProductContext)
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState({
    minPrice: 0,
    maxPrice: 4000,
  });

  const handleRange = (event) => {
    setPrice({
      ...price,
      minPrice: event[0],
      maxPrice: event[1],
    });
  };
  const handleRangeInput = (e) => {
    setPrice({
      ...price,
      [e.target.name]: e.target.value == "" ? 0 : e.target.value,
    });
  };


  useEffect(() => {
    Aos.init();
}, []);


  const [state, setState] = useState(productData)
  const { t } = useTranslation()

  const filteredPrice =  productData.filter(item => item.price >= price.minPrice && item.price <= price.maxPrice)
  const filteredData = category === "" ? filteredPrice : filteredPrice.filter(item => item.category === category)

  const sortProducts = (value) => {
    if (value == "all") {
      setState(filteredData)
      return;
    }
    else if (value == "low-to-high") {
      let copy = [...state]
      const sortedProducts = copy.sort((a, b) => a.price - b.price)
      setState(sortedProducts)
    }
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12)

  const lastPostIndex = currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage

  const currentPost = filteredData.slice(firstPostIndex, lastPostIndex)
  const handlePageChange = (page) => {
    setCurrentPage(page);
};
  return (
    <>
      <section className='section-products'>
        <div className='bg-main'>
          <div className='content'>
            <h1 className='card-title fw-bold display-4'>{t("products.0")}</h1>
          </div>
        </div>
      </section>

      <div className='container mx-3 my-2 section-one'>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4" data-aos="fade-right">
            <div className='sidebar mt-3'>
              <div className='filter-by-price'>
                <h5 className='fw-bold' style={{ color: "#F59A57" }}>{t("products.1")}</h5>

                <div className='d-flex justify-content-between'>
                  <span>{price.minPrice}</span>
                  <span>{price.maxPrice}</span>
                </div>

                <Slider className='slider'
                  range
                  max={4000}
                  step={50}
                  defaultValue={[0, 6000]}
                  onChange={handleRange} />


              </div>
              <div className='filter-by-categories'>
                <h5 className='fw-bold mt-4' style={{ color: "#F59A57" }}>{t("products.2")}</h5>
                <form className='radio-form'>
                  <Radio.Group onChange={(e) => setCategory(e.target.value)} value={category} className='radio-group'>
                    <Radio value="" className='radio-button'><h6 className='fw-bold'>{t("products.3")}</h6></Radio>
                    <Radio value="chairs" className='radio-button'><h6 className='fw-bold'>{t("products.4")}</h6></Radio>
                    <Radio value="tables" className='radio-button'><h6 className='fw-bold'>{t("products.5")}</h6></Radio>
                    <Radio value="sofas" className='radio-button'><h6 className='fw-bold'>{t("products.6")}</h6></Radio>
                    <Radio value="armchairs" className='radio-button'><h6 className='fw-bold'>{t("products.7")}</h6></Radio>
                    <Radio value="beds" className='radio-button'><h6 className='fw-bold'>{t("products.8")}</h6></Radio>
                    <Radio value="textiles" className='radio-button'><h6 className='fw-bold'>{t("products.9")}</h6></Radio>
                    <Radio value="lighting" className='radio-button'><h6 className='fw-bold'>{t("products.10")}</h6></Radio>
                    <Radio value="toys" className='radio-button'><h6 className='fw-bold'>{t("products.11")}</h6></Radio>
                    <Radio value="decor" className='radio-button'><h6 className='fw-bold'>{t("products.12")}</h6></Radio>
                  </Radio.Group>
                </form>
              </div>
            </div>
            <div className='sidebar-second mt-4'>
             
             <div className="card" >
                <img src="https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-shop-banner-1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3 className="card-title fw-bold" style={{color: "white"}}>Upholstered Chair</h3>
                  <p className="card-text fw-bold" style={{color: "white"}}>Discount 10%</p>
                  <button href="#" className="btn">Shop now</button>
                </div>
              </div>
            

            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-8" data-aos="fade-left">
            <div className='select d-flex justify-content-end'>
              <Select
                defaultValue="All"
                style={{ width: 150 }}
                onChange={sortProducts}
                options={[
                  {
                    value: 'all',
                    label: 'All'
                  },
                  {
                    value: 'a-z',
                    label: 'A-Z'
                  },
                  {
                    value: 'z-a',
                    label: 'Z-A'
                  },
                  {
                    value: 'low-to-high',
                    label: 'Low-to-high'
                  },
                  {
                    value: 'high-to-low',
                    label: 'High-to-low',

                  },
                ]}
              />
            </div>
            <div className='row'>
              {currentPost.map(item => (
                <SingleProducts
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  img1={item.img[0]}
                  img2={item.img[1]}
                  img3={item.img[2]}
                  img4={item.img[3]}
                  price={item.price}
                  category={item.category}
                  rating={item.rating}
                  sku={item.sku}
                  alldata={item}
                />
              ))}
              
              <Pagination className='pagination' defaultCurrent={1} total={productData.length} postPerPage={postPerPage} 
              setCurrentPage={setCurrentPage} onChange={handlePageChange}/>

            </div>

          </div>
        </div>
      </div>

      {/* <div className='container mx-3 my-2 section-two'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><span className="navbar-toggler-icon" /></button>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
              <div className="offcanvas-header">
              <div className="row">
          <div className="col-12 col-sm-12 col-md-4">
            <div className='sidebar mt-3'>
              <div className='filter-by-price'>
                <h5 className='fw-bold' style={{ color: "#F59A57" }}>Filter by Price</h5>

                <div className='d-flex justify-content-between'>
                  <span>{price.minPrice}</span>
                  <span>{price.maxPrice}</span>
                </div>

                <Slider className='slider'
                  range
                  max={4000}
                  step={50}
                  defaultValue={[0, 6000]}
                  onChange={handleRange} />


              </div>
              <div className='filter-by-categories'>
                <h5 className='fw-bold mt-4' style={{ color: "#F59A57" }}>Filter by categories</h5>
                <form className='radio-form'>
                  <Radio.Group onChange={(e) => setCategory(e.target.value)} value={category} className='radio-group'>
                    <Radio value="alldata" className='radio-button'><h6 className='fw-bold'>All</h6></Radio>
                    <Radio value="chairs" className='radio-button'><h6 className='fw-bold'>Chairs</h6></Radio>
                    <Radio value="tables" className='radio-button'><h6 className='fw-bold'>Tables</h6></Radio>
                    <Radio value="sofas" className='radio-button'><h6 className='fw-bold'>Sofas</h6></Radio>
                    <Radio value="armchairs" className='radio-button'><h6 className='fw-bold'>Armchairs</h6></Radio>
                    <Radio value="beds" className='radio-button'><h6 className='fw-bold'>Beds</h6></Radio>
                    <Radio value="textiles" className='radio-button'><h6 className='fw-bold'>Textiles</h6></Radio>
                    <Radio value="lighting" className='radio-button'><h6 className='fw-bold'>Lightings</h6></Radio>
                    <Radio value="toys" className='radio-button'><h6 className='fw-bold'>Toys</h6></Radio>
                    <Radio value="decor" className='radio-button'><h6 className='fw-bold'>Decor</h6></Radio>
                  </Radio.Group>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-8">
            <div className='select d-flex justify-content-end'>
              <Select
                defaultValue="All"
                style={{ width: 150 }}
                onChange={sortProducts}
                options={[
                  {
                    value: 'all',
                    label: 'All'
                  },
                  {
                    value: 'a-z',
                    label: 'A-Z'
                  },
                  {
                    value: 'z-a',
                    label: 'Z-A'
                  },
                  {
                    value: 'low-to-high',
                    label: 'Low-to-high'
                  },
                  {
                    value: 'high-to-low',
                    label: 'High-to-low',

                  },
                ]}
              />
            </div>
            <div className='row'>
              {filteredData.map(item => (
                <SingleProducts
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  img1={item.img[0]}
                  img2={item.img[1]}
                  img3={item.img[2]}
                  img4={item.img[3]}
                  price={item.price}
                  category={item.category}
                  rating={item.rating}
                  sku={item.sku}
                  alldata={item}
                />
              ))}
            </div>

          </div>
        </div>
              </div>
            </div>

          </div>
        </nav>

      </div> */}
    </>
  )
}

export default Products
