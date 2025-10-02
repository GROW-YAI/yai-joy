import React from 'react';
import { Leaf, Target, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: Leaf,
      title: 'Sustainability',
      color: 'text-green-500'
    },
    {
      icon: Target,
      title: 'Quality',
      color: 'text-blue-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      color: 'text-yellow-500'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      color: 'text-purple-500'
    }
  ];

  return (
    <section id="about" className="bg-primary text-accent py-12 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:gap-12 relative">
          {/* Section Heading with Story */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              About Nagio Love Enterprise
            </h2>
            <p className="text-base sm:text-lg text-accent mb-6 leading-relaxed">
              Nagio Love began with a simple idea: to harness the incredible versatility of coconuts. From our farms to your kitchen, we ensure that every step prioritizes quality, sustainability, and the well-being of our customers. We are passionate about bringing the natural goodness of coconuts to your table, with a commitment to quality and sustainability that ensures every product embodies the richness of nature.
            </p>
          </div>

          {/* Mission, Vision, and Core Values */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {/* Our Mission */}
            <div className="relative border-2 md:border-4 border-success p-6 md:p-8 bg-neutral rounded-lg">
              <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 bg-primary w-12 h-12 md:w-20 md:h-20 flex justify-center items-center rounded-full border-2 md:border-4 border-success">
                <span className="text-success font-bold text-lg md:text-2xl">01</span>
              </div>
              <div className="mt-4 md:mt-0">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary">Our Mission</h3>
                <p className="text-primary text-sm md:text-base leading-relaxed">
                  Our mission is to provide convenient, high quality, natural coconut-based products that promote health, wellness, and sustainability through innovation and creativity. We are dedicated to making the benefits of coconuts accessible to everyone while maintaining a commitment to environmental stewardship and social responsibility.
                </p>
              </div>
            </div>

            {/* Our Vision */}
            <div className="relative border-2 md:border-4 border-success p-6 md:p-8 bg-neutral rounded-lg">
              <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 bg-primary w-12 h-12 md:w-20 md:h-20 flex justify-center items-center rounded-full border-2 md:border-4 border-success">
                <span className="text-success font-bold text-lg md:text-2xl">02</span>
              </div>
              <div className="mt-4 md:mt-0">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary">Our Vision</h3>
                <p className="text-primary text-sm md:text-base leading-relaxed">
                  To become a leading brand in the natural products market known for our innovative coconut based offerings and our unwavering commitment to quality, sustainability and customer satisfaction.
                </p>
              </div>
            </div>

            {/* Our Core Values */}
            <div className="relative border-2 md:border-4 border-success p-6 md:p-8 bg-neutral rounded-lg">
              <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 bg-primary w-12 h-12 md:w-20 md:h-20 flex justify-center items-center rounded-full border-2 md:border-4 border-success">
                <span className="text-success font-bold text-lg md:text-2xl">03</span>
              </div>
              <div className="mt-4 md:mt-0">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary">Our Core Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-2">
                  {coreValues.map((value, index) => (
                    <div key={index} className="flex items-center space-x-3 group p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <value.icon 
                        className={`${value.color} w-5 h-5 md:w-6 md:h-6 transform transition-transform group-hover:scale-110`} 
                      />
                      <div>
                        <h4 className="text-base md:text-lg font-semibold text-primary">{value.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;