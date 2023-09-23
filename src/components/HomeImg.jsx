import './homeimg.css'
import React from 'react'
import HomImg from '../assets/portpic1.jpg'
import { Link } from 'react-router-dom'

function HomeImg() {
  return (
    <>
    <div className='home-container'>
        <div className='home-mask'>
            <img className='home-img' src={HomImg} alt="img" />
        </div>
        <div className='content'>
          <p>HI, I'M <span className='highlighted-text'>ANGELO RAJESH</span></p>
          <h1>Mern Stack Developer</h1>
          <div>
            <Link to='/projects' className='btn'>Projects</Link>
            <Link to='/contact' className='btn btn-light'>Contact</Link>
          </div>
        </div>
    </div>
    </>
  )
}

export default HomeImg