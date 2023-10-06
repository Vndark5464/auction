import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  function goToPage() {
    // Add your logic to go to required page
  }
  return (
    <header role="banner" className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
         <Link to="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <img src="/logo.png" alt="Logo of {Your Website Name}" width="150" aria-label="Home" />  
         </Link>

          <nav role="navigation" aria-label="main navigation">
            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <Link to="/products" className="nav-link text-secondary">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-link text-white">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="nav-link text-white">
                  Register
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;