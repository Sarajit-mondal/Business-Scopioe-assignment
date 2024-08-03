import React, { useState } from 'react';
import { FaAngleRight,FaAngleLeft } from "react-icons/fa6";
const slides = [
  'Slide 1',
  'Slide 2',
  'Slide 3',
  'Slide 4',
  'Slide 5',
  'Slide 6',
  'Slide 6',
  'Slide 6',
  'Slide 6',
  'Slide 6',
  'Slide 6',
  'Slide 6',
  // Add more slides as needed
];
import { FaLocationDot } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";

import image from '../../assets/image117.png'
const FeaturedTherapist = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesToShow = 4;
  const totalSlides = Math.ceil(Math.ceil(slides.length / slidesToShow));

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative w-full max-w-full mx-auto bg-lightColor py-5 rounded-lg px-10 my-6">
      <div className="overflow-hidden">
        <div
          className="flex justify-between  transition-transform duration-500 ease-in-out px-10"
          style={{ transform: `translateX(-${(currentSlide * 100) / totalSlides}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/4 h-72  bg-gray-200 flex items-center justify-center"
            >
              {/* {slide} */}

            <div className='border min-w[210px] rounded-lg border-[#E7E7E7] overflow-hidden'>
             <div className='p-2'>
             <img src={image} alt="" className='w-full'/>
             <h3 className='font-semibold'>devel khan</h3>
             <span className='text-[14px] flex items-center gap-1'><FaLocationDot />789 Maple Drive, NY</span>
             <span className='text-[14px] flex items-center gap-1'><FaCar />789 Maple Drive, NY</span>
             
             </div>
             <button className='hover:bg-primaryColor underline bg-seconderyColor ease-linear duration-200 hover:text-lightColor w-full py-1'>See Details</button>
            </div>
            
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-5 transform -translate-y-1/2 p-2 rounded-full text-blackColor text-white bg-seconderyColor"
        onClick={goToPreviousSlide}
      >
        <FaAngleLeft />
      </button>
      <button
        className="absolute top-1/2 right-5 transform -translate-y-1/2 p-2 rounded-full text-blackColor text-white bg-seconderyColor"
        onClick={goToNextSlide}
      >
       <FaAngleRight />
      </button>
      <div className="absolute inset-x-0 bottom-0 flex justify-center p-2">
        {Array.from({ length: totalSlides }, (_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-400'}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTherapist;
