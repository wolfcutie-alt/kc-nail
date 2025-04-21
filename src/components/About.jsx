import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  return (
    <div className='aboutUs' id='about'>
      <div className='about-container'>
        <div className='about-header'>
          <h2>Experience expert manicures, stunning nail art, and pampering treatments in a chic and relaxing atmosphere.</h2>
        </div>
        <div className='about-content'>
          <div className='about-text'>
            <p>With a rich history spanning over 10 years in the heart of Otara Central, House of Beauty by KC has solidified its reputation as the premier destination for exquisite nail care and beauty services.</p>
            <p>Our dedication to excellence is evident in every aspect of our establishment. From our expertly crafted nail designs to our personalized services, we strive to elevate your natural beauty and confidence. Step into our sanctuary of style and sophistication, where each visit promises a refined, flawless you.</p>
          </div>
          <div className='about-features'>
            <div className='feature-item'>
              <FaCheckCircle className='feature-icon' />
              <span>Premium Products</span>
            </div>
            <div className='feature-item'>
              <FaCheckCircle className='feature-icon' />
              <span>Expert Technicians</span>
            </div>
            <div className='feature-item'>
              <FaCheckCircle className='feature-icon' />
              <span>Relaxing Environment</span>
            </div>
            <div className='feature-item'>
              <FaCheckCircle className='feature-icon' />
              <span>Personalized Service</span>
            </div>
          </div>
          <div className='about-text'>
            <p>Our extensive menu of services is tailored to meet the diverse needs of our clientele. Whether you desire a classic manicure, a bold nail art creation, or a luxurious spa pedicure, our skilled technicians are committed to exceeding your expectations.</p>
            <p>At House of Beauty by KC, we prioritize cleanliness and hygiene, ensuring a safe and sanitary environment for our valued clients. We utilize premium products and cutting-edge techniques to deliver unparalleled results, leaving your nails looking immaculate and feeling rejuvenated.</p>
            <p>Experience the pinnacle of nail care and beauty services at House of Beauty by KC, where indulgence meets excellence in every detail. Let us transform your beauty routine into an unforgettable journey of elegance and refinement.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About