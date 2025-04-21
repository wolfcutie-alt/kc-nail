import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ img, name, description }) => {
  return (
    <div className='serviceCard'>
      <div className="service-image">
        <img src={img} alt={name} />
      </div>
      <div className="service-content">
        <h2>{name}</h2>
        <p>{description}</p>
        <a href="https://kcbooking.vercel.app/" className="service-btn">
          Book Now <FaArrowRight className="arrow-icon" />
        </a>
      </div>
    </div>
  )
}

export default ServiceCard