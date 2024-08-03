import React, { useState } from 'react';
import { FaAngleRight,FaAngleLeft } from "react-icons/fa6";
const slides = [
  'Slide 1',
  'Slide 2',
  'Slide 3',
  'Slide 4',
  'Slide 5',
  'Slide 6',
  // Add more slides as needed
];

import image from '../../assets/image 117.png'
const FeaturedTherapist = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesToShow = 3;
  const totalSlides = Math.ceil(slides.length / slidesToShow);

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
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(currentSlide * 100) / totalSlides}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/3 h-64 bg-gray-200 flex items-center justify-center text-xl font-bold"
            >
              {/* {slide} */}
              <div>
                <img src={image} alt="" />
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
