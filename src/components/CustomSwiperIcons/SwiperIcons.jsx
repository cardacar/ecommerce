import React, { Fragment } from "react";
//import IconRopa from "../../assets/icon/icon-ropa@2x.png";
import { Paper, Typography, Box } from "@mui/material";
//import ComputerIcon from '@mui/icons-material/Computer';
import iconCarro from "../../assets/icon/icon-carro.svg";
import iconCelular from "../../assets/icon/icon-celular.svg";
import iconComputador from "../../assets/icon/icon-computadores.svg";
import iconDeportes from "../../assets/icon/icon-deporte.svg";
import iconElectrodomestico from "../../assets/icon/icon-electrodomesticos.svg";
import iconMoto from "../../assets/icon/icon-moto.svg";
import iconMueble from "../../assets/icon/icon-mueble.svg";
import IconRopa from "../../assets/icon/icon-ropa.svg";
import IconTv from "../../assets/icon/icon-tv.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

const data = [
  {
    img: iconCarro,
    title: "Carros",
  },
  {
    img: iconCelular,
    title: "Celular",
  },
  {
    img: iconComputador,
    title: "Computadores",
  },
  {
    img: iconDeportes,
    title: "Deporte",
  },
  {
    img: iconElectrodomestico,
    title: "Electrodomestico",
  },
  {
    img: iconMoto,
    title: "Motos",
  },
  {
    img: iconMueble,
    title: "Muebles",
  },
  {
    img: IconRopa,
    title: "Ropa",
  },
  {
    img: IconTv,
    title: "TV, Audio y foto",
  },
];

const SwiperIcons = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
  };

  const CustomSlider = ({ img, title }) => {
    return (
      <Box elevation={0}>
        <div className="imgIcon">
          <img src={img} alt={title} width="50px" height="50px" />
        </div>
        <Typography>{title}</Typography>
      </Box>
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
        slidesPerView={9}
        spaceBetween={50}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <CustomSlider img={item.img} title={item.title} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <Paper elevation={3}>
            <img src={iconCarro} alt={"title"} />
          </Paper>
        </SwiperSlide>
      </Swiper>
    </Fragment>
  );
};

export default SwiperIcons;
