import React from 'react'
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const {t} = useTranslation()
  return (
    <>
    <div className='container mx-4 my-4'>
      <h3 className='fw-bold'>{t("faq.0")}</h3>
      <p >{t("faq.1")}</p>

      <h3 className='fw-bold mt-5'>{t("faq.2")}</h3>
      <p>{t("faq.3")}</p>
      
      <h3 className='fw-bold mt-5'>{t("faq.4")}</h3>
      <p>{t("faq.5")}</p>  

      <h3 className='fw-bold mt-5'>{t("faq.6")}</h3>
      <p>{t("faq.7")}</p>
      
      <h3 className='fw-bold mt-5'>{t("faq.8")}</h3>
      <p>{t("faq.9")}</p>
    </div>
    </>
  )
}

export default FAQ