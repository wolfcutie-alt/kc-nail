import React, { useState } from 'react';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
      <img src={Logo} alt="Logo" className="logo" />
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#" onClick={() => setIsMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
        <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
        <li><a href="#feedback" onClick={() => setIsMenuOpen(false)}>Feedback</a></li>
        <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
      </ul>
      <div className='phone-booking'>
        <a href="https://kcbooking.vercel.app/" className='hero-btn primary-btn'>Book Now</a>
      </div>
    </nav>
  );
};

export default Navbar;