// Components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <header>
      <Link to="/">
        <img src="/logo.png" />  
      </Link>
      
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
      </nav>

      <div className="auth-links"> 
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>  
      </div>
    </header>
  )
}

export default Header;