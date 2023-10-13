import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import locations from '../../data/locations';

export default function Filialen() {
  return (
    <div className='w-3/4 mx-auto'>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        onAutoplayStart={2000}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {locations.map((location) => {
          return (
            <SwiperSlide>
              <div className='relative'>
                <div className='absolute pr-10 py-3 top-5 bg-gray-600 opacity-70'>
                  <p className='text-3xl text-left pl-5 text-white'>{location.name}</p>
                </div>
                <img src={require('../../assets/aboutUsImage.jpg')} alt="" />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
