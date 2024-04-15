import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import slugify from 'react-slugify'

const BlogDetails = () => {
    const blogs = useSelector(p=>p)
    const {url} = useParams()
    const blogDetails = blogs.filter(p=>slugify(p.title) === url)
    console.log(blogDetails);
  return (
    <>
      <div className="container col-12 px-4 py-5">
        <div className="row flex-lg-row align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={blogDetails[0].img} style={{width: "100%"}}/>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{blogDetails[0].title}</h1>
            <p className="lead">{blogDetails[0].desc.slice(1,300)}</p>
            <p></p>
          </div>
        </div>
      </div>

    </>
  )
}

export default BlogDetails