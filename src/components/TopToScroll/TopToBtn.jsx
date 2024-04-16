import React from 'react'
import { PiCaretCircleUpThin } from "react-icons/pi";

const TopToBtn = () => {
    const scrollTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <>
    

      <PiCaretCircleUpThin onClick={scrollTop} style={{width: "40px", height: "40px"}} className='scroll-icon'/>
    
    </>
  )
}

export default TopToBtn