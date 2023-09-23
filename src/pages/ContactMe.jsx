import React from 'react'
import Navbar from '../components/Navbar'
import HomeImg2 from '../components/HomeImg2'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'


function ContactMe() {
  return (
    <>
    <Navbar />
    <HomeImg2 heading="Contact." text="lets have a chat"/>
    <ContactForm />
    <Footer />
    </>
  )
}

export default ContactMe