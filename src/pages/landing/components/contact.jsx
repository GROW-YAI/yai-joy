import React, { useState } from 'react'; 

const Contact = () => { 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState({
    isSubmitting: false,
    success: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ isSubmitting: true, success: false, error: false });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "796a1241-b690-40e9-9ef8-320401b6e08b", // Web3Forms access key
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          from_name: "Company Contact Inquiry"
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus({ isSubmitting: false, success: true, error: false });
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitStatus({ isSubmitting: false, success: false, error: true });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ isSubmitting: false, success: false, error: true });
    }
  };

  return ( 
    <section id="contact" className="bg-secondary py-8 md:py-12 lg:py-16"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className="max-w-4xl mx-auto bg-white rounded-lg md:rounded-xl shadow-lg md:shadow-xl p-6 md:p-8 lg:p-12"> 
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 sm:mb-6 text-center"> 
            Contact Our Team 
          </h2> 
          <p className="text-secondary text-sm sm:text-base text-center mb-6 sm:mb-8"> 
            Have a question or inquiry? Our team is ready to assist you. Please complete the form below and we'll respond promptly.
          </p>

          {/* Status Messages */}
          {submitStatus.success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg mb-4 sm:mb-6 text-center text-sm sm:text-base" role="alert">
              Thank you for your message. Our team will review your inquiry and respond shortly.
            </div>
          )}
          {submitStatus.error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg mb-4 sm:mb-6 text-center text-sm sm:text-base" role="alert">
              We encountered an error sending your message. Please try again or contact us through alternative means.
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:gap-6"> 
            {/* Name Field */} 
            <div className="col-span-1"> 
              <label htmlFor="name" className="block text-primary font-semibold mb-1 sm:mb-2 text-sm sm:text-base"> 
                Full Name 
              </label> 
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder-gray-400 text-sm sm:text-base" 
                placeholder="Enter your full name" 
                required 
              /> 
            </div>
            {/* Email Field */} 
            <div className="col-span-1"> 
              <label htmlFor="email" className="block text-primary font-semibold mb-1 sm:mb-2 text-sm sm:text-base"> 
                Business Email 
              </label> 
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder-gray-400 text-sm sm:text-base" 
                placeholder="Enter your email address" 
                required 
              /> 
            </div>
            {/* Phone Field */} 
            <div className="col-span-1"> 
              <label htmlFor="phone" className="block text-primary font-semibold mb-1 sm:mb-2 text-sm sm:text-base"> 
                Contact Number 
              </label> 
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder-gray-400 text-sm sm:text-base" 
                placeholder="Enter your contact number" 
                required 
              /> 
            </div>
            {/* Message Field */} 
            <div className="col-span-1"> 
              <label htmlFor="message" className="block text-primary font-semibold mb-1 sm:mb-2 text-sm sm:text-base"> 
                Your Inquiry 
              </label> 
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder-gray-400 h-28 sm:h-36 text-sm sm:text-base" 
                placeholder="Provide details of your inquiry or request" 
                required 
              ></textarea> 
            </div>
            {/* Submit Button */} 
            <div className="col-span-1 text-center mt-2 sm:mt-4"> 
              <button 
                type="submit"
                disabled={submitStatus.isSubmitting}
                className={`
                  ${submitStatus.isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-secondary hover:bg-primary hover:scale-105'
                  } 
                  text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-lg shadow-md transition-all duration-200 transform text-sm sm:text-base w-full sm:w-auto
                `}
              > 
                {submitStatus.isSubmitting ? 'Submitting Inquiry...' : 'Submit Inquiry'}
              </button> 
            </div> 
          </form> 
        </div> 
      </div> 
    </section> 
  ); 
}; 

export default Contact;