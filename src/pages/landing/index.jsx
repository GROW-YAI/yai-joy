//src/pages/landing/index.jsx
import React from 'react'
import Home from './components/home'
import About from './components/about'
import Services from './components/services'
import Contact from './components/contact'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;