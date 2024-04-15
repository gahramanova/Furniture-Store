import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addBlog} from "../tools/action/blogAction"

const BlogForm = ({comingblog, editData}) => {
    const [img,setImg] = useState(editData?editData.img:"")
    const [title,setTitle] = useState(editData?editData.title:"")
    const [desc, setDesc] = useState(editData?editData.desc:"")
    const [date, setDate] = useState(editData?editData.date:"")
    const [alert, setAlert] = useState("")
    const [text, setText] = useState("")
    const dispatch = useDispatch();
    const formSubmit = e => {
        e.preventDefault()

       if (!img || !title || !desc) {
        setAlert("danger")
        setText("Please fill the input")
        
       } else {
        comingblog({
            title: title,
            img: img,
            desc: desc, 
            date: date
        })
       }
    }

  return (
    <div>
        <div className='container'>
            <div className='d-flex align-items-center justify-content-center'>
            <div className='col-9'>
            <form onSubmit={formSubmit}>
            <div className="mb-3">
            <div class={`alert alert-${alert}`} role="alert" className="p-0">
              {text}
              </div>
                <label className="form-label">Img url</label>
                <input onChange={e=>setImg(e.target.value)} value={img} type="text" className="form-control" />
            
            </div>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input onChange={e=>setTitle(e.target.value)} value={title} type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Date</label>
                <input onChange={e=>setDate(e.target.value)} value={date} type="text" className="form-control" />
            </div>
            <div className="mb-3">
            <label className="form-label">Description</label>
            <div className="form-floating">
                <textarea onChange={e=>setDesc(e.target.value)} value={desc} className="form-control" style={{height: 100}} defaultValue={""} />
            </div>

            </div>
            <button type="submit" className="btn add" style={{backgroundColor: "#F59A57", color: "white"}}>{editData?"Edit":"Add"}</button>
            </form>
            </div>
            </div>
        </div>
        </div>
  )
}

export default BlogForm