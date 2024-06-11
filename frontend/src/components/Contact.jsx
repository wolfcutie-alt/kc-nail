import React from 'react'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <h2>Our mission to enhance your beautiful</h2>
      <form action="" className='form'>
        <h3>Contact Us</h3>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required></input>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required></input>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <input type="submit" value="Submit"></input>
      </form>
      <div className='timetable'>
        <h4>Hours</h4>
        <ul>
          <li>Monday: 9:00 am - 6:00 am</li>
          <li>Tuesday: 9:00 am - 6:00 am</li>
          <li>Wednesday: 9:00 am - 6:00 am</li>
          <li>Thursday: 9:00 am - 6:00 am</li>
          <li>Friday: 9:00 am - 6:00 am</li>
          <li>Saturday: 9:00 am - 6:00 am</li>
          <li>Sunday: 9:00 am - 6:00 am</li>
        </ul>
      </div>
      <div className='address'>
        <h5>Address</h5>
        <p>House of Beauty by KC</p>
        <p>Otara Central, Auckland</p>
        <p>New Zealand</p>
      </div>
    </div>
  )
}

export default Contact