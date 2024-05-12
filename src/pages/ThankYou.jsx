import React, { useContext } from 'react'
import SingleIntrestedCard from '../components/SingleIntrestedCard';
import { ProductContext } from '../context/ProductContext';
import { useTranslation } from 'react-i18next';


const ThankYou = () => {
  const [productData] = useContext(ProductContext);
  const { t } = useTranslation()

  const randomNumber = Math.floor(Math.random() *46);

  return (
    <>
    <div className='container my-4'>
        <div className='d-flex justify-content-center align-items-center flex-column'>
            <div className='col-12 col-md-6'>
                <img src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.1-w4PV_64tyfby-olEkHpQHaFq%26pid%3DApi&f=1&ipt=a12f821b99d3ec55baa63c34c177bafd281eb718824fc772ef58c414a294ac85&ipo=images"} style={{width: "100%", objectFit: "contain", height: "300px"}}/>
            </div>
            <h3 className='text-align-center mt-4' style={{color: "#F59A57"}}>{t("thank-you.0")}</h3>
        </div>
    </div>
    <section className='mt-5'>
          <div className='container mt-5'>
            <h2 className='fw-bold '>{t("cart.12")}</h2>
           <div className='row'>
           <div className='row row-cols-2 row-cols-md-4 g-4 my-3'>
              {productData.slice(randomNumber, randomNumber+4).map(item => (
                <SingleIntrestedCard
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

    </>
  )
}

export default ThankYou