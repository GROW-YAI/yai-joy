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
    <div className='m-0 min-h-screen'>
      <Navbar />
      <main className="w-full overflow-x-hidden">
        {/* Home Section - Full width */}
        <section id="home" className="w-full">
          <Home />
        </section>
        
        {/* About Section */}
        <section id="about" className="w-full">
          <About />
        </section>
        
        {/* Services Overview */}
        <section id="services" className="w-full">
          <Services />
        </section>
        
        {/* Individual Services */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            <section id="service4" className="w-full">
              <Service4 />
            </section>
            <section id="service2" className="w-full">
              <Service2 />
            </section>
            <section id="service1" className="w-full">
              <Service1 />
            </section>
            <section id="service3" className="w-full">
              <Service3 />
            </section>
          </div>
        </div>
        
        {/* Testimonials */}
        <section id="testimonials" className="w-full">
          <Testimonial />
        </section>
        
        {/* Contact */}
        <section id="contact" className="w-full">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;