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
    <section id="about" className="bg-primary text-accent py-24">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 gap-12 relative">
          {/* Section Heading with Story */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">About Nagio Love Enterprise</h2>
            <p className="text-lg text-accent mb-6">
              Nagio Love began with a simple idea: to harness the incredible versatility of coconuts. From our farms to your kitchen, we ensure that every step prioritizes quality, sustainability, and the well-being of our customers. We are passionate about bringing the natural goodness of coconuts to your table, with a commitment to quality and sustainability that ensures every product embodies the richness of nature.
            </p>
          </div>

          {/* Mission, Vision, and Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Our Mission */}
            <div className="relative border-4 border-success p-8 bg-neutral">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-primary">
                Our mission is to provide convenient, high quality, natural coconut-based products that promote health, wellness, and sustainability through innovation and creativity. We are dedicated to making the benefits of coconuts accessible to everyone while maintaining a commitment to environmental stewardship and social responsibility.
              </p>
              <div className="absolute -top-8 -left-8 bg-primary w-20 h-20 flex justify-center items-center rounded-full border-4 border-success">
                <span className="text-success font-bold text-2xl">01</span>
              </div>
            </div>

            {/* Our Vision */}
            <div className="relative border-4 border-success p-8 bg-neutral">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-primary">
                To become a leading brand in the natural products market known for our innovative coconut based offerings and our unwavering commitment to quality, sustainability and customer satisfaction.
              </p>
              <div className="absolute -top-8 -left-8 bg-primary w-20 h-20 flex justify-center items-center rounded-full border-4 border-success">
                <span className="text-success font-bold text-2xl">02</span>
              </div>
            </div>

            {/* Our Core Values */}
            <div className="relative border-4 border-success p-8 bg-neutral">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Core Values</h3>
              <div className="space-y-2">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <value.icon 
                      className={`${value.color} w-6 h-6 transform transition-transform group-hover:scale-110`} 
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-1">{value.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute -top-8 -left-8 bg-primary w-20 h-20 flex justify-center items-center rounded-full border-4 border-success">
                <span className="text-success font-bold text-2xl">03</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;