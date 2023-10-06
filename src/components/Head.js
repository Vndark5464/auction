import React from 'react';
import { Link } from 'react-router-dom';
import logoABC from '../assets/image/logo_abc _.jpg'
import ServerTimeClock from './ServerTimeClock';

function Header() {
  return (
    <header role="banner" className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
         <Link to="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <img className="logo-abc" src={logoABC} alt="Logo of {Your Website Name}" width="50px" height="50px" aria-label="Home" />  
         <ServerTimeClock />
         </Link>
          <nav className='menu' role="navigation" aria-label="main navigation">
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
                <Link to="/notification" className="nav-link text-white">
                Notification
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-link text-white">
                  Login
                </Link>
              </li>
              <li>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;