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

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#feedback">Feedback</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-section contact-info">
          <h3>Contact Info</h3>
          <div className="contact-details">
            <p>
              <FaMapMarkerAlt className="footer-icon" />
              6/14 Fair Mall, Otara Central, Auckland
            </p>
            <p>
              <FaPhone className="footer-icon" />
              <a href="tel:+642102198779">021 021 98779</a>
            </p>
            <p>
              <FaEnvelope className="footer-icon" />
              <a href="mailto:contact@kcnails.com">contact@kcnails.com</a>
            </p>
          </div>
        </div>

        <div className="footer-section opening-hours">
          <h3>Opening Hours</h3>
          <ul className="hours-list">
            <li><span>Mon-Tue:</span> 9:00 am - 6:00 pm</li>
            <li><span>Wed-Fri:</span> 9:00 am - 7:00 pm</li>
            <li><span>Saturday:</span> 9:00 am - 6:00 pm</li>
            <li><span>Sunday:</span> 9:00 am - 2:30 pm</li>
          </ul>
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