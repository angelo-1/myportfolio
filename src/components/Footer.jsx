import React from 'react'
import './footer.css'
import {FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from 'react-icons/fa'

function Footer() {
  return (
    <>
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='address'>
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <div>
              <p>Kasaragod,Kerala</p>
            </div>
          </div>
          <div className='phone'>
            <h4>
            <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            +91 9539336435</h4>
          </div>
          <div className='email'>
            <h4> <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            angelorajesh11@gmail.com</h4>
          </div>
        </div>
        <div className='right'>
          <h4>About me</h4>
          <p>This is me Angelo Rajesh. I am a Mern stack developer</p>
          <div className='social'>
            <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}} />
            <FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}} />
            <FaInstagram size={30} style={{color:"#fff",marginRight:"1rem"}} />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer