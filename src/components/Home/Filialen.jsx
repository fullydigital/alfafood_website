import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import locations from '../../data/locations';
import {NavLink} from "react-router-dom";

export default function Filialen({data}) {
  return (
    <div className='w-3/4 xl:w-9/12 mt-12 mx-auto text-left'>
      <h2 className='text-5xl font-bold mb-4'>{data.headline ? data.headline : 'Unsere Standorte'}</h2>
      <h3 className='text-xl mb-4'>{data.subline ? data.subline : 'Geniesse unsere köstlichen Gerichte an 6 Standorten in Deutschland'}</h3>
      <p className='mb-10'>{data.text ? data.text : 'Jedes auf seine Art irgendwie anders – doch immer das Original bona’me mit großer Liebe zum Detail und den authentischen Speisen. Genieße Deine Pide gleich 3 x in Köln, die leckeren Makarna am Mittag in Hamburg, das legendäre Nan û Köfte in Hannover die Meze in Dortmund oder alles zusammen im neuen bona’me Münster.'}</p>


      <Swiper
        // install Swiper modules
        className='w-full'
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        onAutoplayStart={2000}
        breakpoints={{
          1024: {
            width: 1024,
            slidesPerView: 1
          },
          1367: {
            width: 1367,
            slidesPerView: 3
          }
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {locations.map((location) => {
          return (
            <SwiperSlide>
              <NavLink to={`/location/${location.name}`}>
              <div className='relative'>
                <div className='absolute pr-10 py-3 top-5 bg-gray-600 opacity-70'>
                  <p className='text-3xl text-left pl-5 text-white'>{location.name}</p>
                </div>
                <img src={require('../../assets/aboutUsImage.jpg')} alt="" />
              </div>
                </NavLink>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
