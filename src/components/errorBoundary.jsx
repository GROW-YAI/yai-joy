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
        <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-white">
          <div className="max-w-md text-center">
            <AlertTriangle className="mx-auto w-24 h-24 mb-6 text-accent" />
            <h1 className="text-6xl font-bold mb-4">Oops!</h1>
            <h2 className="text-4xl font-semibold mb-6">Something went wrong</h2>
            <p className="mb-8">
              We're sorry, but an unexpected error has occurred. Please try refreshing the page or
              contact our support team if the issue persists.
            </p>
            <Link
              to="/"
              className="bg-accent text-primary px-6 py-3 rounded-full hover:bg-accent/80 transition-colors"
            >
              <Flower className="inline-block w-6 h-6 mr-2" />
              Go to Home
            </Link>
          </div>
          <div className="mt-12">
            <img src={joyaLogo} alt="Joya Foods Logo" className="w-48 h-auto" />
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;