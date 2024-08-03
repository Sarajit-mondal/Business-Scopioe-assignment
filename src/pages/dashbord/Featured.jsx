import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FaLocationDot } from "react-icons/fa6";

// import required modules
import { Pagination,Grid } from 'swiper/modules';

export default function Featured() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        grid={{
            rows:2
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination,Grid]}
        className="mySwiper max-w-[550px] bg-lightColor"
      >
        <SwiperSlide >
        <div className='h-96'>3</div></SwiperSlide>
        <SwiperSlide >
            <div className='h-96'>
             <img src="https://i.ibb.co/Zx7Fpq9/image-119.png" alt="" />
             <div>
              <p><FaLocationDot/>123 Elm Street, New York</p>
              <h3 className='font-bold'>Healing Bodywork <em className='text-primaryColor '>by Cort</em></h3>
              <span>Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of... <button className='text-primaryColor'>Read More</button></span>
             </div>
            </div>
        </SwiperSlide>
        <SwiperSlide ><div className='h-96'>3</div></SwiperSlide>
        <SwiperSlide ><div className='h-96'>3</div></SwiperSlide>
        <SwiperSlide ><div className='h-96'>3</div></SwiperSlide>
        
      </Swiper>
    </>
  );
}
