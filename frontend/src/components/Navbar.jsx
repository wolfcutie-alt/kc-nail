import React, { useState } from 'react';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
          <img src={Logo} alt="Logo" />
          <ul className='nav-links'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#feedback">Feedback</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        <div className='phone-booking'>
          <a href="tel:+642102198779">Booking Now</a>
        </div>
      </div>

      <div className='phone-navbar'>
        <img src={Logo} alt="Logo" />
        <div className='phone-booking'>
          <a href="tel:+642102198779">Booking Now</a>
        </div>
      </div>
    </div>

  )
}

export default Navbar