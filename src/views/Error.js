import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error-section text-center">
      <h2> 404 !!!</h2>
      <Link to="/" className="btn btn-success btn-lg-block text-center">
        Back
      </Link>
    </div>
  );
};

export default Error;