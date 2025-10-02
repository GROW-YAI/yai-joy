import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import K from '../constants';

const SwiperComponent = () => {
  const { HERO_IMAGES } = K;

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={0} 
      slidesPerView={1}
      autoplay={{ 
        delay: 3000, 
        disableOnInteraction: false,
        pauseOnMouseEnter: true 
      }}
      loop={true}
      pagination={{ 
        clickable: true,
        dynamicBullets: true, 
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        }
      }}
      speed={600} 
      grabCursor={true} 
      breakpoints={{
        320: {
          spaceBetween: 0,
          slidesPerView: 1,
        },
        768: {
          spaceBetween: 10,
          slidesPerView: 1,
        },
        1024: {
          spaceBetween: 20,
          slidesPerView: 1,
        },
        1440: {
          spaceBetween: 30,
          slidesPerView: 1,
        }
      }}
      className="h-full w-full"
      touchRatio={1}
      shortSwipes={true}
      longSwipes={true}
      longSwipesRatio={0.1}
      longSwipesMs={300}
      followFinger={true}
    >
      {HERO_IMAGES.map((image, index) => (
        <SwiperSlide key={index}>
          <img 
            src={image.src} 
            alt={`Slide ${index + 1}`} 
            className="w-full h-full object-cover"
            loading="lazy" 
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;