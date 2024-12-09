import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper'; // Correctly import modules
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination';
import K from '../constants'; // Import constants

const SwiperComponent = () => {
  const { HERO_IMAGES } = K; // Destructure HERO_IMAGES from constants

  return (
    <Swiper
      modules={[Pagination, Autoplay]} // Pass modules here
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      loop={true}
      pagination={{ clickable: true }}
      className="h-full"
    >
      {HERO_IMAGES.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image.src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
