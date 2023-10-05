// Pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to our auction platform!</h1>
      <p>Join and bid on amazing products</p>
      
      <Link to="/products" className="browse-btn">
        Browse Products
      </Link>
    </div>
  );
}

export default Home;