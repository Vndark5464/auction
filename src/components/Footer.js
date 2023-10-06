// Components/Footer.js

import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a href="/about" aria-label="About Us: Learn more about us on the About Page">About Us</a>
        <a href="/contact" aria-label="Contact: Get in touch with us on the Contact Page">Contact</a>
        <a href="/faq" aria-label="FAQ: View Frequently Asked Questions on the FAQ Page">FAQ</a>
      </div>
      <div className="copyright">
        Copyright @2023 My Auction
      </div>
    </footer>
  );
}

export default Footer;