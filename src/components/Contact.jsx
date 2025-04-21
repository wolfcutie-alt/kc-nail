import React from 'react';
import { FaClock, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>Visit us at our location or give us a call to book your appointment</p>
        </div>
        
        <div className="contact-content">
          <div className='contact-card timetable'>
            <div className="card-icon">
              <FaClock />
            </div>
            <div className="card-content">
              <h3>Hours</h3>
              <ul>
                <li><span>Monday:</span> 9:00 am - 6:00 pm</li>
                <li><span>Tuesday:</span> 9:00 am - 6:00 pm</li>
                <li><span>Wednesday:</span> 9:00 am - 7:00 pm</li>
                <li><span>Thursday:</span> 9:00 am - 7:00 pm</li>
                <li><span>Friday:</span> 9:00 am - 7:00 pm</li>
                <li><span>Saturday:</span> 9:00 am - 6:00 pm</li>
                <li><span>Sunday:</span> 9:00 am - 2:30 pm</li>
              </ul>
            </div>
          </div>
          
          <div className='contact-card address'>
            <div className="card-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="card-content">
              <h3>Address</h3>
              <p>6/14 Fair Mall,</p>
              <p>Otara Central, Auckland</p>
              <p>New Zealand</p>
            </div>
          </div>
          
          <div className='contact-card contact-number'>
            <div className="card-icon">
              <FaPhone />
            </div>
            <div className="card-content">
              <h3>Contact</h3>
              <p><span>Mobile:</span> 021 021 98779</p>
              <p><span>Landline:</span> 09 265 2468</p>
              <a href="tel:+642102198779" className="call-button">Call Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact