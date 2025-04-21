import React from 'react';
import FeedbackCard from './FeedbackCard';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar } from 'react-icons/fa';
import img_1 from '../assets/img-1.jpg';
import img_2 from '../assets/img-2.jpg';
import img_3 from '../assets/img-3.jpg';
import img_4 from '../assets/img-4.jpg';

const Feedback = () => {
  const feedbacks = [
    {
      src: img_1,
      name: "Sarah Johnson",
      text: "Absolutely love the nail designs and the attention to detail at this salon! Every visit leaves me feeling pampered and confident. Highly recommend!"
    },
    {
      src: img_2,
      name: "Emily Chen",
      text: "Had my lashes done here for the first time and I'm amazed at the results! The technician was so skilled and made me feel comfortable throughout the whole process. Will definitely be coming back!"
    },
    {
      src: img_3,
      name: "Michaela Williams",
      text: "Waxing services here are top-notch! The staff is professional and the results are always flawless. Thanks for making the experience so pleasant!"
    },
    {
      src: img_4,
      name: "Jessica Taylor",
      text: "Just had the most relaxing facial at this spa! My skin feels rejuvenated and the atmosphere was so calming. Can't wait to book my next appointment!"
    }
  ]
  return (
    <div className="feedback-section" id="feedback">
      <div className="feedback-container">
        <div className="feedback-header">
          <h2>What Our Clients Say</h2>
          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div className='feedback-slider'>
          <Swiper 
            modules={[Autoplay, Pagination]} 
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={30} 
            slidesPerView={3}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}
          >
            {feedbacks.map((feedback, index) => (
              <SwiperSlide key={index}>
                <FeedbackCard src={feedback.src} name={feedback.name} text={feedback.text}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Feedback