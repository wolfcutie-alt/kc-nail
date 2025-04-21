import React from 'react';
import ServiceCard from './ServiceCard';
import img_1 from '../assets/img-1.jpg';
import img_2 from '../assets/img-2.jpg';
import img_3 from '../assets/img-3.jpg';
import img_4 from '../assets/img-4.jpg';
import { FaSpa } from 'react-icons/fa';

const Services = () => {

  const services = [
    {
      src: img_1,
      name: "Nails",
      description: "Indulge in a pampering nail experience with our comprehensive nail services. Whether you prefer a classic manicure, a stunning gel polish, or intricate nail art designs, our skilled technicians will transform your nails into works of art."
    },
    {
      src: img_2,
      name: "Lashes",
      description: "Elevate your look with our luxurious lash extensions and lifts. From natural-looking enhancements to dramatic volume, our lash specialists will customize the perfect style to accentuate your eyes and enhance your beauty."
    },
    {
      src: img_3,
      name: "Wax",
      description: "Experience silky smooth skin with our professional waxing services. From brows to legs, we offer precise and efficient waxing treatments to leave your skin feeling irresistibly soft and smooth."
    },
    {
      src: img_4,
      name: "Face",
      description: "Reveal a radiant complexion with our rejuvenating facial treatments. Whether you're seeking hydration, anti-aging benefits, or acne solutions, our experienced estheticians will tailor a facial regimen to address your specific skincare needs, leaving your skin glowing with health and vitality."
    },
  ]
  return (
    <div className='services' id='services'>
      <div className='services-container'>
        <div className='services-header'>
          <FaSpa className="services-icon" />
          <h1>Our Services</h1>
          <div className="header-underline"></div>
        </div>
        <div className='services-intro'>
          <p>
            Our skilled and talented team offer a range of nail care and beauty treatments right from our Central Otara Location. Whether you're in need of a classic manicure, a trendy nail art design, or a luxurious spa pedicure, we've got you covered.
          </p>
          <p>
            Not sure what's best for you? Our team is more than happy to have a consult with you to discuss your specific nail needs and preferences. We'll provide personalized recommendations to help you achieve the perfect look and let your inner beauty shine through.
          </p>
        </div>
        <div className='services-grid'>
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              img={service.src} 
              name={service.name} 
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services