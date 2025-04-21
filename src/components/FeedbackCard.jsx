import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa';

const FeedbackCard = ({ text, src, name }) => {
  return (
    <div className='feedback-card'>
      <div className="feedback-image">
        <img src={src} alt={name} />
      </div>
      <div className='feedback-content'>
        <FaQuoteLeft className="quote-icon" />
        <p className="feedback-text">{text}</p>
        <div className="feedback-author">
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard