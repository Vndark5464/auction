// Components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <header>
      <Link to="/" aria-label="Home">
        <img src="/logo.png" alt="Logo of {Your Website Name}" />  
      </Link>
      
      <nav aria-label="main navigation">
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
      </nav>

      <nav aria-label="authentication links">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  )
}

export default Header;