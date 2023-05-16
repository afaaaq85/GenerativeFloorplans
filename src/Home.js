import React from 'react'
import Navbar from './Components/Navbar/NavBar'
import Navbarnew from './Components/Navbarnew/Navbarnew';
import Banner from './Components/Banner/Banner';
import Features from './Components/Features/Features';
import Beta from './Components/Beta/Beta';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import QRcode from './Components/QRcode/QRcode';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner />
      <Features />
      <Beta />
      <Contact />
      <QRcode />
      <Footer />
    </>
  )
}

export default Home
