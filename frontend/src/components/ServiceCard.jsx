import React from 'react'

const ServiceCard = ({ img, name, description }) => {
  return (
    <div className='serviceCard'>
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <p>{description}</p>
        <a href="https://www.fresha.com/book-now/house-of-beauty-by-kc-bwx1toq3/all-offer?id=1074678&pId=1018874">Book Now</a>
    </div>
  )
}

export default ServiceCard