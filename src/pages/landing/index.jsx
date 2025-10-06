import React from 'react';
import Home from './components/home';
import About from './components/about';
// import Services from './components/services';
import Contact from './components/contact';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Testimonial from './components/testimonials';
import Service1 from './components/service1';
import Service2 from './components/service2';
import Service3 from './components/service3';
import Service4 from './components/service4';

const LandingPage = () => {
  return (
    <div className='m-0 min-h-screen'>
      <Navbar />
      <main className="w-full overflow-x-hidden">
        {/* Hero Section */}
        <section id="home" className="w-full">
          <Home />
        </section>
        
        {/* About Section */}
        <section id="about" className="w-full">
          <About />
        </section>
        
          {/* Why Choose Us Section */}
        <section className="w-full bg-primary py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-8">
              Why Choose Joya Foods?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-accent mb-2">100% Natural</h3>
                <p className="text-accent/80">No preservatives or artificial additives</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-accent mb-2">Premium Quality</h3>
                <p className="text-accent/80">Carefully selected and processed</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-4xl mb-4">♻️</div>
                <h3 className="text-xl font-bold text-accent mb-2">Eco-Friendly</h3>
                <p className="text-accent/80">Sustainable practices from farm to table</p>
              </div>
            </div>
          </div>
        </section>

        {/* General Services Overview
        <section id="services" className="w-full">
          <Services />
        </section> */}
        
        {/* Products Section Title */}
        <section id="products" className="w-full bg-white py-8 md:py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Premium Products
            </h2>
            <p className="text-lg sm:text-xl text-secondary max-w-2xl mx-auto">
              Discover our range of pure, natural coconut products crafted with care for your health and wellness
            </p>
          </div>
        </section>
        
        {/* Individual Products - Full Width Alternating */}
        <section id="products" className="w-full">
          <Service1 />
          <Service2 />
          <Service3 />
          <Service4 />
        </section>
        
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