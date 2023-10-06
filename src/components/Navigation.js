import React, { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <button onClick={handleMenuButtonClick} aria-haspopup="true" aria-expanded={isMenuOpen}>
        {isMenuOpen? 'Close Menu' : 'Open Menu'}
      </button>

      {isMenuOpen && (
        <ul className="menu" role="menu">
          <li role="menuitem"><button onClick={() => setIsMenuOpen(false)}>Product</button></li>
          <li role="menuitem"><button onClick={() => setIsMenuOpen(false)}>About</button></li>
          <li role="menuitem"><button onClick={() => setIsMenuOpen(false)}>Notification</button></li>
          <li role="menuitem"><button onClick={() => setIsMenuOpen(false)}>Login</button></li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;