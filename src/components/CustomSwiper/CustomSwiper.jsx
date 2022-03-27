import React, { Fragment } from "react";
import BlackFriday from "../../assets/images/banner-blackfriday@2x.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

const data = [
  {
    img: BlackFriday,
    title: "BlackFriday",
  },
  {
    img: BlackFriday,
    title: "BlackFriday",
  },
  {
    img: BlackFriday,
    title: "BlackFriday",
  },
  {
    img: BlackFriday,
    title: "BlackFriday",
  },
];

const CustomSwiper = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
  };

  const CustomSlider = ({ img, title }) => {
    return <img src={img} alt={title} width="100%" height="400px"/>;
  };

  return (
    <Fragment>
      <Swiper
        cssMode={true}
        pagination={pagination}
        mousewheel={true}
        keyboard={true}
        modules={[Pagination]}
        className="swiperImagenBanner"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <CustomSlider img={item.img} title={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default CustomSwiper;
