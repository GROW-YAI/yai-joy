// src/pages/landing/index.jsx
import React from 'react';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Testimonial from './components/testimonials';
import Service3 from './components/service3';
import Service2 from './components/service2';
import Service1 from './components/service1';
import Service4 from './components/service4';

const LandingPage = () => {
  return (
    <div className='m-0'>
      <Navbar />
      {/* <div className="pt-24"> */}
        <Home />
        <About />
        <Services />
        <Service4 />
        <Service2 />
        <Service1 />
        <Service3 />
        <Testimonial />
        <Contact />
      {/* </div> */}
      <Footer />
    </div>
  );
}

export default LandingPage;
