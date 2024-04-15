import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import slugify from 'react-slugify'
import i18n from '../i18n/i18next';
import { useTranslation } from 'react-i18next';

const Blog = () => {

  const blog = useSelector(p=>p)
  const toggleLang =(lang)=> {
    i18n.changeLanguage(lang)
  }
  const {t} = useTranslation()
  return (
    <>
          <div className='contact-main'>
      <div className='content'>
          <h1 className='card-title fw-bold display-4'>{t("blog.0")}</h1> 
             
      </div>
      </div>
      <div className='container my-5'>
        <div className='row'>
         {blog.map(item=>(
           <div className='col-12 col-sm-12 col-md-3'>
           <div className="card g-4">
           <Link to={`/blog/${(slugify(item.title))}`} style={{textDecoration: "none", color: "black"}}>
           <img src={item.img} className="card-img-top" alt="..." />
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

    </>
  )
}

export default Blog

