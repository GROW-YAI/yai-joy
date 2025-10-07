import React from 'react';
import { Link } from 'react-router-dom';
import { Flower, AlertTriangle } from 'lucide-react';
import joyaLogo from '../assets/joya-logo-nobg.png';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
     // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
     // Log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-white px-4 sm:px-6 lg:px-8 py-8">
          <div className="w-full max-w-md text-center">
            <AlertTriangle className="mx-auto w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 mb-4 sm:mb-6 text-accent" />
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
              Oops!
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6">
              Something went wrong
            </h2>
            
            <p className="text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              We're sorry, but an unexpected error has occurred. Please try refreshing this page or
              contact our support team if the issue persists.
            </p>
            
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-accent text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-accent/80 transition-colors text-sm sm:text-base w-full sm:w-auto"
            >
              <Flower className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2" />
              Go to Home
            </Link>
          </div>
          
          <div className="mt-8 sm:mt-12">
            <img 
              src={joyaLogo} 
              alt="Joya Foods Logo" 
              className="w-32 sm:w-40 lg:w-48 h-auto" 
            />
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;