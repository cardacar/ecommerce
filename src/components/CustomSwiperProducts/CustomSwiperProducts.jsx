import React, { Fragment } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import CardProduct from '../CardProduct/CardProduct'

import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

const CustomSwiperProducts = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className}"></span>`;
        },
      };

      const CustomSlider = ({ img, title }) => {
        return (
          <CardProduct/>
        );
      };
    
  return (
    <Fragment>
    <Swiper
      navigation={true}
      cssMode={true}
      pagination={pagination}
      mousewheel={true}
      keyboard={true}
      slidesPerView={6}
      spaceBetween={0}
      modules={[Navigation, Pagination]}
      className="mySwiperItems"
    >
      {[0,1,2,3,5,6,7,8].map((item, index) => ( 
        <SwiperSlide  key={index} >
          <CardProduct/>
        </SwiperSlide>

       ))} 
    </Swiper>
  </Fragment>
  )
}

export default CustomSwiperProducts