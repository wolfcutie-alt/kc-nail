import React from 'react';
import { FaFacebook, FaInstagram, FaHeart, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-container">
        <div className="footer-section about-section">
          <div className="footer-logo">
            <img src={Logo} alt="KC Nails Logo" />
          </div>
          <p className="footer-description">
            Experience the pinnacle of nail care and beauty services at House of Beauty by KC, where indulgence meets excellence in every detail.
          </p>
          <div className='social-links'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} House of Beauty by KC. All Rights Reserved.</p>
          <p>Website Designed with <FaHeart className="heart-icon" /> by <a href="https://github.com/wolfcutie-alt" target="_blank" rel="noopener noreferrer">Nathan Doan</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer