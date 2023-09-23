import React from 'react'
import Navbar from '../components/Navbar'
import HomeImg from '../components/HomeImg'
import PrjComp from '../components/PrjComp'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'


function Home() {
  return (
    <>
    <Navbar />
    <HomeImg />
    <PrjComp />
    <ContactForm />
    <Footer />
    </>
  )
}

export default Home