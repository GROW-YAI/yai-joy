// src/components/About.jsx
import React from 'react';
import K from '../../../constants';

const About = () => {
  return (
    <section id="about" className="bg-primary text-accent py-24">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 gap-12 relative">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">{K.ABOUT_SECTION.title}</h2>
            <p className="text-lg text-secondary">{K.ABOUT_SECTION.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative border-4 border-success p-8 bg-neutral">
              <h3 className="text-2xl font-bold mb-4 text-primary">{K.ABOUT_SECTION.story.title}</h3>
              <p className="text-secondary">{K.ABOUT_SECTION.story.description}</p>
              <div className="absolute -top-8 -left-8 bg-primary w-20 h-20 flex justify-center items-center rounded-full border-4 border-success">
                <span className="text-success font-bold text-2xl">01</span>
              </div>
            </div>
            <div className="relative border-4 border-success p-8 bg-neutral">
              <h3 className="text-2xl font-bold mb-4 text-primary">{K.ABOUT_SECTION.mission.title}</h3>
              <p className="text-secondary">{K.ABOUT_SECTION.mission.description}</p>
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
