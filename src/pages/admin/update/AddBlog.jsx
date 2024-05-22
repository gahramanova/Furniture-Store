import React from 'react'
import BlogForm from '../../../components/BlogForm'
import { useDispatch } from 'react-redux'
import { addBlog, addBlogToDatabase } from '../../../tools/action/blogAction'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <>
    <div className='container'>
        <h2 className='fw-bold text-center my-4'>Add blog</h2>
        <BlogForm comingblog = {(item)=>{
          dispatch(addBlogToDatabase(item));
          navigate("/dashboard")
        }}/>
    </div>
    </>
  )
}

export default AddBlog