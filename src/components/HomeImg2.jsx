import React from 'react'
import './homeimg2.css'

function HomeImg2(props) {
  return (
    <>
   <div className='pro-img'>
    <div className='heading'>
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
    </div>
   </div>
   </>
  )
}

export default HomeImg2