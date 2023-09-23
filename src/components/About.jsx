import React from 'react'
import './about.css'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>I am a Mern Stack developer.I create responsive and secure websites</p>
            <Link to="/contact"><button className='btn'>CONTACT </button></Link>
        </div>
        <div className='right'>
            <div className='img-contain'>
                {/* <div className='img-stack top'>
                    <img src={} alt="true" className='img' />
                </div>
                <div className='img-stack bottom'>
                    <img src={} alt="true" className='img' />
                </div> */}
            </div>
        </div>
    </div>
    </>
  )
}

export default About