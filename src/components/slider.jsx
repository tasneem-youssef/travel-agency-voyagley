import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image1 from "../images/landescape1.jpg";
import image2 from "../images/landescape2.jpg";
import image3 from "../images/landescape3.jpg";
import image4 from "../images/landescape4.jpg";
import image5 from "../images/landescape5.jpg";
import image6 from "../images/landescape6.jpg";

const Slider = () => {
  const CardsArr = [
    {
      image: image1,
      title: "Earning Asiana Club Miles is Easier!",
      span: "Book Hotels and Earn Asiana Club Miles!",
    },
    {
      image: image2,
      title: "Save big on hotels!",
      span: "Book and save with voyagley on your next stay",
    },
    {
      image: image3,
      title: "Experience Europe Your Way",
      span: "With up to 30% Off, experience Europe your way!",
    },
    {
      image: image4,
      title: "Earning Asiana Club Miles is Easier!",
      span: "Book Hotels and Earn Asiana Club Miles!",
    },
    {
      image: image5,
      title: "the easiest way to find your next trip",
      span: "find your trip amoung thousands of options  ",
    },
    {
      image: image6,
      title: "Experience Europe Your Way",
      span: "With up to 30% Off, experience Europe your way!",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={3}
      navigation={true}
      pagination={{ clickable: true }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className="swiper"
    >
      {CardsArr.map((card, index) => (
        <SwiperSlide key={index} className="slide">
          <img src={card.image} alt={card.title} />
          <h5>{card.title}</h5>
          <span>{card.span}</span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
