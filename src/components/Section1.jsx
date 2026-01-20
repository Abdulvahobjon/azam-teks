import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../assets/Cotton-fabric-Banner.jpg";
import img2 from "../assets/samples-fabric.jpg";
import img3 from "../assets/textile-companies.jpg";
import ContanctForm from './ContactForm.jsx';
import "./Section1.css";

export default function Section1() {
  const { t } = useTranslation();

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
      <SwiperSlide>
        <div className="slide">
          <img src={img1} alt="banner" className="slide-img" loading="eager" />
          <div className="content animate__animated animate__fadeInUp">
            <h2>{t("Biz eng yaxshi sanoat xizmatlarini taqdim etamiz")}</h2>
            <p>{t("Bizning kompaniyamiz sifatli va ishonchli sanoat yechimlarini taklif qiladi.")}</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide">
          <img src={img2} alt="banner" className="slide-img" loading="eager" />
          <div className="content animate__animated animate__fadeInUp">
            <h2>{t("Yangi tekstil mahsulotlari")}</h2>
            <p>{t("Biz bilan sifat va ishonchni tanlang.")}</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide">
          <img src={img3} alt="banner" className="slide-img" loading="eager" />
          <div className="content animate__animated animate__fadeInUp">
            <h2>{t("Zamonaviy tekstil kompaniyalari")}</h2>
            <p>{t("Eng sifatli yechimlar siz uchun.")}</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
