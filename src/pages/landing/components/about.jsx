import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-primary text-accent py-24">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 gap-12 relative">
          {/* Section Heading */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">About Joya Foods</h2>
            <p className="text-lg text-secondary">
              At Joya Foods, we are passionate about bringing the natural goodness of coconuts to your table. Our commitment to quality and sustainability ensures that every product embodies the richness of nature.
            </p>
          </div>

          {/* Story and Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Our Story */}
            <div className="relative border-4 border-success p-8 bg-neutral">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Story</h3>
              <p className="text-secondary">
                Joya Foods began with a simple idea: to harness the incredible versatility of coconuts. From our farms to your kitchen, we ensure that every step prioritizes quality, sustainability, and the well-being of our customers.
              </p>
              <div className="absolute -top-8 -left-8 bg-primary w-20 h-20 flex justify-center items-center rounded-full border-4 border-success">
                <span className="text-success font-bold text-2xl">01</span>
              </div>
            </div>

            {/* Our Mission */}
            <div className="relative border-4 border-success p-8 bg-neutral">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-secondary">
                To deliver high-quality coconut-based products that nourish, delight, and inspire. By combining tradition and innovation, we strive to create a sustainable future for our planet and communities.
              </p>
              <div className="absolute -top-8 -left-8 bg-primary w-20 h-20 flex justify-center items-center rounded-full border-4 border-success">
                <span className="text-success font-bold text-2xl">02</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
