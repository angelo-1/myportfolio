import React from 'react'
import Navbar from '../components/Navbar'
import HomeImg2 from '../components/HomeImg2'
import Footer from '../components/Footer'
import About from '../components/About'


function AboutMe() {
  return (
    <>
    <Navbar />
    <HomeImg2 heading="About." text="I'm a passionate web developer"/>
    <About />
    <Footer />
    </>
  )
}

export default AboutMe