import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-secondary py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 lg:p-12">
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">
            We'd Love to Hear From You
          </h2>
          <p className="text-secondary text-center mb-8">
            Whether you have a question about our products or just want to say hello, feel free to get in touch with us. We’ll respond as quickly as possible!
          </p>
          <form className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="col-span-1">
              <label htmlFor="name" className="block text-primary font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder-gray-400"
                placeholder="Enter your name"
                required
              />
            </div>
            {/* Email Field */}
            <div className="col-span-1">
              <label htmlFor="email" className="block text-primary font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder-gray-400"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Message Field */}
            <div className="col-span-1 lg:col-span-2">
              <label htmlFor="message" className="block text-primary font-semibold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder-gray-400 h-36"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="col-span-1 lg:col-span-2 text-center">
              <button
                type="submit"
                className="bg-primary hover:bg-accent text-white font-medium py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
