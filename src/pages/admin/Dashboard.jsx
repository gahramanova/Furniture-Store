import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from "react-router-dom"
import slugify from 'react-slugify'
import { removeBlog } from '../../tools/action/blogAction'
import { MdDeleteOutline } from "react-icons/md";


const Dashboard = () => {
    const blogs = useSelector(p=>p)
    const navigate = useNavigate()
    const dispatch = useDispatch()
  return (
    <>
    <div className='container'>
        <h2 className='my-4 text-center fw-bold'>Dashboard</h2>
        <Link to = {"/dashboard/add"} onClick={navigate("/dashboard")} className="btn mb-3" style={{backgroundColor: "#F59A57", color: "white"}}>Add blog</Link>
        <table className="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Photo</th>
            <th scope="col">Title</th>
            <th scope="col">Date</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
        {blogs.map((item,c)=> (
             <tr key={c}>    
             <th scope="row">{c+1}</th>
             <td><img src={item.img[0]} width={"100px"}/></td>
             <td>{item.title}</td>
             <td>{item.date}</td>
             <td><Link to={`/dashboard/edit/${slugify(item.title)}`} className='btn edit'>Edit</Link></td>
             <td><button onClick={()=>{
              dispatch(removeBlog({id:item.id}))
             }} className='btn remove'><MdDeleteOutline /></button></td>
             </tr>
        ))}
           
        </tbody>
        </table>
    </div>
    </>
  )
}

export default Dashboard