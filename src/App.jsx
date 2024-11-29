// src/App.jsx
import React from "react";
import LandingPage from "./pages/landing"; // Importing the landing page
import { FaArrowUp } from 'react-icons/fa'; // For a scroll to top icon

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <LandingPage />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 p-3 bg-primary rounded-full shadow-lg text-white hover:bg-secondary"
        aria-label="Scroll to Top"
      >
        <FaArrowUp size={24} />
      </button>
    </div>
  );
}

export default App;