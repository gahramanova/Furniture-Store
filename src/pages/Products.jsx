import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/ProductContext'
import SingleProducts from '../components/SingleProducts'
import { useTranslation } from 'react-i18next';
import { Radio, Slider, Select } from 'antd';

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

  // const [state, setstate] = useState(productData)
  // const sortProducts = (value)=> {
  //   if(value== "all") {
  //     setstate(productData)
  //     let copy = [...state]
  //     let filteredPrice = copy
  //       }
  //       else if (value=="low-to-high") {
  //     const sortedProducts = filteredPrice.sort
  //   }
  // }

  const { t } = useTranslation()

  const filteredPrice = productData.filter(item => item.price >= price.minPrice && item.price <= price.maxPrice)
  const filteredData = category === "alldata" ? filteredPrice : filteredPrice.filter(item => item.category === category)

  return (
    <>
      <section className='section-products'>
        <div className='bg-main'>
          <div className='content'>
            <h1 className='card-title fw-bold display-4'>{t("products.0")}</h1>
          </div>
        </div>
      </section>

      <div className='container mx-3 my-2'>
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
              style={{ width: 150}}
              // onChange={handleChange}
              options={[
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
    </>
  )
}

export default Products
