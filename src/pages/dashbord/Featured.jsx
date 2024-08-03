import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FaLocationDot } from "react-icons/fa6";

// import required modules
import { Pagination} from 'swiper/modules';

export default function Featured() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
       
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
        modules={[Pagination]}
        className="mySwiper max-w-[550px] bg-lightColor rounded-lg"
      >
       {/* One Slider */}
        <SwiperSlide className='p-5'>
            {/* one */}
            <div className='flex gap-4 p-2 items-center border rounded-lg border-[#E7E7E7]'>
             <img src="https://i.ibb.co/gVvL7vw/image-117.png" alt="" className='h-[140px] w-[130px]'/>
             <div className='space-y-1'>
              <p className='flex gap-1 items-center'><FaLocationDot/>123 Elm Street, New York</p>
              <h3 className='font-bold'>Healing Bodywork <em className='text-primaryColor '>by Cort</em></h3>
              <span>Cort’s healing bodywork massage was <br /> absolutely transformative. Their intuitive touch <br /> and deep understanding of... <button className='text-primaryColor font-bold'>Read More</button></span>
             </div>
            </div>
            {/* two */}
         
            <div className='flex mt-5 gap-4 p-2 items-center border rounded-lg border-[#E7E7E7]'>
             <img src="https://i.ibb.co/Zx7Fpq9/image-119.png" alt="" className='h-[140px] w-[130px]'/>
             <div className='space-y-1'>
              <p className='flex gap-1 items-center'><FaLocationDot/>123 Elm Street, New York</p>
              <h3 className='font-bold'>Healing Bodywork <em className='text-primaryColor '>by Cort</em></h3>
              <span>Cort’s healing bodywork massage was <br /> absolutely transformative. Their intuitive touch <br /> and deep understanding of... <button className='text-primaryColor font-bold'>Read More</button></span>
             </div>
            </div>
         
        </SwiperSlide>
       {/* Two Slider */}
        <SwiperSlide className='p-5'>
            {/* one */}
            <div className='flex gap-4 p-2 items-center border rounded-lg border-[#E7E7E7]'>
             <img src="https://i.ibb.co/gVvL7vw/image-117.png" alt="" className='h-[140px] w-[130px]'/>
             <div className='space-y-1'>
              <p className='flex gap-1 items-center'><FaLocationDot/>123 Elm Street, New York</p>
              <h3 className='font-bold'>Healing Bodywork <em className='text-primaryColor '>by Cort</em></h3>
              <span>Cort’s healing bodywork massage was <br /> absolutely transformative. Their intuitive touch <br /> and deep understanding of... <button className='text-primaryColor font-bold'>Read More</button></span>
             </div>
            </div>
            {/* two */}
         
            <div className='flex mt-5 gap-4 p-2 items-center border rounded-lg border-[#E7E7E7]'>
             <img src="https://i.ibb.co/Zx7Fpq9/image-119.png" alt="" className='h-[140px] w-[130px]'/>
             <div className='space-y-1'>
              <p className='flex gap-1 items-center'><FaLocationDot/>123 Elm Street, New York</p>
              <h3 className='font-bold'>Healing Bodywork <em className='text-primaryColor '>by Cort</em></h3>
              <span>Cort’s healing bodywork massage was <br /> absolutely transformative. Their intuitive touch <br /> and deep understanding of... <button className='text-primaryColor font-bold'>Read More</button></span>
             </div>
            </div>
         
        </SwiperSlide>
       {/* There Slider */}
        <SwiperSlide className='p-5'>
            {/* one */}
            <div className='flex gap-4 p-2 items-center border rounded-lg border-[#E7E7E7]'>
             <img src="https://i.ibb.co/gVvL7vw/image-117.png" alt="" className='h-[140px] w-[130px]'/>
             <div className='space-y-1'>
              <p className='flex gap-1 items-center'><FaLocationDot/>123 Elm Street, New York</p>
              <h3 className='font-bold'>Healing Bodywork <em className='text-primaryColor '>by Cort</em></h3>
              <span>Cort’s healing bodywork massage was <br /> absolutely transformative. Their intuitive touch <br /> and deep understanding of... <button className='text-primaryColor font-bold'>Read More</button></span>
             </div>
            </div>
            {/* two */}
         
            <div className='flex mt-5 gap-4 p-2 items-center border rounded-lg border-[#E7E7E7]'>
             <img src="https://i.ibb.co/Zx7Fpq9/image-119.png" alt="" className='h-[140px] w-[130px]'/>
             <div className='space-y-1'>
              <p className='flex gap-1 items-center'><FaLocationDot/>123 Elm Street, New York</p>
              <h3 className='font-bold'>Healing Bodywork <em className='text-primaryColor '>by Cort</em></h3>
              <span>Cort’s healing bodywork massage was <br /> absolutely transformative. Their intuitive touch <br /> and deep understanding of... <button className='text-primaryColor font-bold'>Read More</button></span>
             </div>
            </div>
         
        </SwiperSlide>
        
        
      </Swiper>
    </>
  );
}
