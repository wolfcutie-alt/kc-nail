import React from 'react'

const FeedbackCard = ({ text, src, name }) => {
  return (
    <div className='card'>
        <img src={src} alt="" />
        <div className='comment'>
            <p>{text}</p>
            <h4>-- {name}</h4>
        </div>
    </div>
  )
}

export default FeedbackCard