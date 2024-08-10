import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold text-Error">404</h1>
      <p className="text-lg font-semibold mt-2">Page Not Found</p>
      <p className="mt-4">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="flex justify-center items-center mt-6  px-6 py-2 text-white bg-AnalogousIce rounded">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
