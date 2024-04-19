import React from 'react'

const Pagination = ({ postPerPage, setCurrentPage, }) => {
    let pages = []
    for (let i = 0; i<= Math.ceil(totalPosts/postPerPage); i++) {
        pages.push(i)
        
    }
  return (
    <>
   <div className=''>
   {pages.map((item, c) => {
        return <button key={c} className='pages' onClick={()=> setCurrentPage(item)}>{item}</button>
    })}
   </div>
    </>
  )
}

export default Pagination