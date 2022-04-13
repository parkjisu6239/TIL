import React, { useState, useEffect } from 'react';

import Swiper from "swiper/swiper-bundle.cjs.js"
import "swiper/swiper-bundle.css";

import "./App.css"

export default function App() {
  const [page, setPage] = useState(0);

  const initSwiper = () => {
    const swiper = new Swiper('.swiper-container', {
      autoplay: true,
      speed: 500,
      loop: false,
      allowTouchMove: false,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1,
      spaceBetween: 0,
    });

    swiper.on("activeIndexChange", () => {
      setPage(swiper.realIndex);
    });
  };

  useEffect(() => {
    initSwiper();
  }, []);


  return (
    <div className='container'>
      <div className="swiper-container">
        <div className='swiper-wrapper'>
          <div className='swiper-slide'>슬라이드1</div>
          <div className='swiper-slide'>슬라이드2</div>
          <div className='swiper-slide'>슬라이드3</div>
          <div className='swiper-slide'>슬라이드4</div>
        </div>
      </div>
      <div className='swiper-pagination'>
      </div>
      <div className='swiper-button-prev'></div>
      <div className='swiper-button-next'></div>
      <strong>{page}</strong>
    </div>
  );
}
