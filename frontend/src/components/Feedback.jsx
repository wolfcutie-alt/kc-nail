import React from 'react';
import FeedbackCard from './FeedbackCard';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import img_1 from '../assets/img-1.jpg';
import img_2 from '../assets/img-2.jpg';
import img_3 from '../assets/img-3.jpg';
import img_4 from '../assets/img-4.jpg';

const Feedback = () => {
  const feedbacks = [
    {
      src: img_1,
      name: "John Doe",
      text: "Absolutely love the nail designs and the attention to detail at this salon! Every visit leaves me feeling pampered and confident. Highly recommend!"
    },
    {
      src: img_2,
      name: "Jane Doe",
      text: "Had my lashes done here for the first time and I'm amazed at the results! The technician was so skilled and made me feel comfortable throughout the whole process. Will definitely be coming back!"
    },
    {
      src: img_3,
      name: "John Doe",
      text: "Waxing services here are top-notch! The staff is professional and the results are always flawless. Thanks for making the experience so pleasant!"
    },
    {
      src: img_4,
      name: "John Doe",
      text: "Just had the most relaxing facial at this spa! My skin feels rejuvenated and the atmosphere was so calming. Can't wait to book my next appointment!"
    }
  ]
  return (
    <div>
      <div className='feedback' id="feedback">
      <Swiper modules={[Autoplay]} autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      loop={true}
      spaceBetween={20} slidesPerView={3}>
        {feedbacks.map((feedback) => (
          <SwiperSlide>
            <FeedbackCard src={feedback.src} name={feedback.name} text={feedback.text}/>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <div className='phone-feedback' id="feedback">
      <Swiper modules={[Autoplay]} autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      loop={true} slidesPerView={1}>
        {feedbacks.map((feedback) => (
          <SwiperSlide>
            <FeedbackCard src={feedback.src} name={feedback.name} text={feedback.text}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  )
}

export default Feedback