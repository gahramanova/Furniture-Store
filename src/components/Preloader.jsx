import React from 'react'
import { DotLoader } from 'react-spinners'

const Preloader = () => {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center'>
    <div className='row' style={{marginTop: "300px"}}>
        <div className='col-6'>
            <DotLoader color="#F59A57" />
        </div>
    </div>
    </div>
    </>
  )
}

export default Preloader