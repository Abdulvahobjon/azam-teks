 import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../assets/Cotton-fabric-Banner.jpg";
import img2 from "../assets/samples-fabric.jpg";
import img3 from "../assets/textile-companies.jpg";
import Boglanish from './Boglanish';
import "./Section1.css";

export default function Section1() {
  const { t } = useTranslation();

  const slides = [
    {
      img: img1,
      title: t("Biz eng yaxshi sanoat xizmatlarini taqdim etamiz"),
      desc: t("Bizning kompaniyamiz sifatli va ishonchli sanoat yechimlarini taklif qiladi."),
    },
    {
      img: img2,
      title: t("Yangi tekstil mahsulotlari"),
      desc: t("Biz bilan sifat va ishonchni tanlang."),
    },
    {
      img: img3,
      title: t("Zamonaviy tekstil kompaniyalari"),
      desc: t("Eng sifatli yechimlar siz uchun."),
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      className="heroSwiper"
      speed={800}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="slide">
            <img src={slide.img} alt="banner" className="slide-img" loading="eager" />
            <div className="content">
              <h2>{slide.title}</h2>
              <p>{slide.desc}</p>
              {/* Кнопка для мобильного */}
              {/* <button 
                className="mobile-btn" 
                onClick={() => window.location.href="/boglanish"}
              >
                {t("Bog‘lanish")}
              </button> */}
              <Link to="/boglanish" className="mobile-btn">
                {t("Bog'lanish")}
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}