import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="centered-container">
        <h1>Welcome to Houseplants Store</h1>
        <p>Discover our range of beautiful houseplants and enhance your living space.</p>
        <a href="/products" className="get-started-button">Get Started</a>
      </div>
    </div>
  );
};

export default LandingPage;
