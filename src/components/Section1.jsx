import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import img1 from "../assets/IMG_5277.JPG"
import img2 from "../assets/IMG_5278.JPG"
import img3 from "../assets/IMG_5279.JPG"

import "./Section1.css"

export default function Section1() {
  const { t } = useTranslation();

  const slides = [
  {
    img: img1,
    title: t("hero_title_1"),
    desc: t("hero_desc_1"),
    alt: "AZAM TEKS Textile Manufacturer",
  },
  {
    img: img2,
    title: t("hero_title_2"),
    desc: t("hero_desc_2"),
    alt: "100% Cotton Textile Products",
  },
  {
    img: img3,
    title: t("hero_title_3"),
    desc: t("hero_desc_3"),
    alt: "Textile Export from Uzbekistan",
  },
];

  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      speed={800}
      className="heroSwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="slide">
            <img
              src={slide.img}
              alt={slide.alt}
              className="slide-img"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
            />

            <div className="content">
              {index === 0 ? (
                <h1>{slide.title}</h1>
              ) : (
                <h2>{slide.title}</h2>
              )}

              <p>{slide.desc}</p>

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