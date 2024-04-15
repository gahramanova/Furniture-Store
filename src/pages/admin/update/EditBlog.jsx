import React from 'react'
import BlogForm from '../../../components/BlogForm'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import slugify from 'react-slugify'
import { editBlog } from '../../../tools/action/blogAction'
import { useNavigate } from 'react-router-dom'


const EditBlog = () => {
  const blogs = useSelector(p=>p);
  const {url} = useParams();
  const selectBlog = blogs.filter(p=>slugify(p.title) === url)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(selectBlog);
  return (
    <>
        <div className='container'>
        <h2 className='fw-bold text-center my-4'>Edit Blog</h2>
        <BlogForm editData = {selectBlog[0]} comingblog={(item)=> {
          dispatch(editBlog(selectBlog[0].id, item))
          navigate("/dashboard")
        }}/>

    </div></>
  )
}

export default EditBlog