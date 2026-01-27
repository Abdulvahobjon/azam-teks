import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Bizhaqimizda.css";
import Section3 from './Section3'
// import FactorySections from './FactorySections.jsx'


export default function Production() {
  const { t } = useTranslation();

  const productionBlocks = [
    {
      number: "1",
      title: t("Ishlab chiqarish"),
      description: t(
        "Bizning ishlab chiqarish korxonamiz zamonaviy texnologiyalar va yuqori sifatli uskunalar bilan jihozlangan. Biz 100% paxta mahsulotlarini to'liq texnologik tsikl bo'yicha ishlab chiqaramiz."
      ),
    },
    {
      number: "2",
      title: t("Paxta urug’ini ekish va yig’ish"),
      description: t("Paxta urug’ini ekish va yig’ish jarayoni yuqori sifat bilan amalga oshiriladi."),
    },
    {
      number: "3",
      title: t("Paxta tozalash zavodi"),
      description: t("Paxtani tozalash va tayyorlash jarayoni maksimal samaradorlik bilan amalga oshiriladi."),
    },
    {
      number: "4",
      title: t("Yigiruv, to’quv va bo’yash"),
      description: t("Zamonaviy dastgohlar yordamida to’quv va bo’yash jarayoni yuqori sifat bilan bajariladi."),
    },
    {
      number: "5",
      title: t("Tikuvchilik sexlari"),
      description: t("Yakuni tayyor mahsulotlar sifat nazorati ostida tikuvchilik sexlarida ishlab chiqariladi."),
    },
    {
      number: "6",
      title: t("50 ta JX90A-260CM AIR JET LOOMS dastgohi"),
      description: t("Korporatsiyada mahsulotlar uchun 50 ta zamonaviy dastgoh o’rnatilgan."),
    },
    {
      number: "7",
      title: t("Sifat nazorati"),
      description: t(
        "Bizning mahsulotlarimiz xalqaro standartlarga javob beradi. Har bir bosqichda qat’iy sifat nazorati o'tkaziladi."
      ),
    },
    {
      number: "8",
      title: t("Xalqaro sifat standartlari"),
      description: t("Har bir bosqichda sifat nazorati va 100% paxta materiallari ishlatiladi."),
    },
    {
      number: "9",
      title: t("Texnologik jarayon"),
      description: t(
        "Bizning ishlab chiqarish jarayonimiz zamonaviy va samarali. Har bir bosqich ehtiyotkorlik bilan nazorat qilinadi va eng yaxshi natijalarni ta’minlaydi."
      ),
    },
    {
      number: "10",
      title: t("Materiallarni tanlash"),
      description: t("Eng yaxshi paxta navlarini tanlaymiz."),
    },
    {
      number: "11",
      title: t("Tozalash va tayyorlash"),
      description: t("Paxta tozalash va tayyorlash jarayonlari."),
    },
    {
      number: "12",
      title: t("Yigiruv va to’quv"),
      description: t("Zamonaviy dastgohlar yordamida to’quv."),
    },
    {
      number: "13",
      title: t("Bo’yash va qayta ishlash"),
      description: t("Yuqori sifatli bo’yash va qayta ishlash."),
    },
    {
      number: "14",
      title: t("Tikuv va tayyor mahsulot"),
      description: t("Tikuvchilik va yakuniy mahsulot tayyorlash."),
    },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
		<>
		<Section3/>
    {/* <FactorySections/> */}
    <section className="production">
      <div className="container">
        <h2 className="section-title">{t("Ishlab chiqarish")}</h2>
        <div className="cards">
          {productionBlocks.map((block, index) => (
            <div className="card" key={index}>
              <div className="card-number">{block.number}</div>
              <h3>{block.title}</h3>
              <p>{block.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
		</>
  );
}