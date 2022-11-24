import React from 'react'
import ReactDOM from "react-dom";
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";
import One from './img/testimonials-1.jpg'
import Two from './img/testimonials-2.jpg'
import Three from './img/testimonials-3.jpg'
import Four from './img/testimonials-4.jpg'
import Five from './img/testimonials-5.jpg'

const slider = () => {
  return (
    // <div>
    //   <h1 style={{ color:"red" }}>React Slider Component </h1>
    // </div>
    <div style={{ marginTop: '50px', width:'600px', height:'600px' }}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={One} alt="testimonials-1"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Two} alt="testimonials-2"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Three} alt="testimonials-3"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Four} alt="testimonials-4"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Five} alt="testimonials-5"/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default slider
