// Components/Footer.js

import React from 'react';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="footer-links">
            <a href="/about" className="d-block text-dark p-2" aria-label="About Us: Learn more about us on the About Page">About Us</a>
            <a href="/contact" className="d-block text-dark p-2" aria-label="Contact: Get in touch with us on the Contact Page">Contact</a>
            <a href="/faq" className="d-block text-dark p-2" aria-label="FAQ: View Frequently Asked Questions on the FAQ Page">FAQ</a>
          </div>
          <div className="copyright">
            <p className="text-muted my-auto">Copyright @2023 My Auction</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;