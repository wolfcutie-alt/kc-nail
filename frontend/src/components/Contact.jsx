import React from 'react'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className='timetable'>
        <h4>Hours</h4>
        <ul>
          <li>Monday: 9:00 am - 6:00 pm</li>
          <li>Tuesday: 9:00 am - 6:00 pm</li>
          <li>Wednesday: 9:00 am - 7:00 pm</li>
          <li>Thursday: 9:00 am - 7:00 pm</li>
          <li>Friday: 9:00 am - 7:00 pm</li>
          <li>Saturday: 9:00 am - 6:00 pm</li>
          <li>Sunday: 9:00 am - 2:30 pm</li>
        </ul>
      </div>
      <div className='address'>
        <h5>Address</h5>
        <p>6/14 Fair Mall,</p>
        <p>Otara Central, Auckland</p>
        <p>New Zealand</p>
      </div>
      <div className='contact-number'>
        <h5>Contact</h5>
        <p>Phone: 021 021 98779</p>
        <p>Phone(tel): 09 265 2468</p>
      </div>
    </div>
  )
}

export default Contact