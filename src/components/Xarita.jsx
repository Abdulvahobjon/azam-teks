import React, { useEffect } from "react";
import XaritaImg from "../assets/IMG_1939.PNG";
import "./Xarita.css";
import { useTranslation } from "react-i18next";

const Xarita = () => {

  const { t } = useTranslation();

  useEffect(() => {
    const section = document.querySelector(".xarita-content");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className="xarita-section">
      <div className="xarita-container">

        <div className="xarita-image">
          <img src={XaritaImg} alt="Export Map" />
        </div>

        <div className="xarita-content">

          <h3 className="xarita-small-title">
            {t("Global Export")}
          </h3>

          <h2 className="xarita-title">
            {t("Bizning eksport salohiyatimiz!")}
          </h2>

          <p className="xarita-text">
            {t("“AZAM TEKS” MCHJ yuqori sifatli tekstil mahsulotlarini dunyoning ko‘plab mamlakatlariga eksport qiladi. Kompaniyamiz zamonaviy ishlab chiqarish texnologiyalari, xalqaro standartlarga mos sifati va ishonchli logistika tizimi orqali global bozorda o‘z o‘rniga ega.")}
          </p>

          <div className="xarita-cards">

            <div className="xarita-card">
              <span>20+</span>
              <p>{t("Eksport davlatlari")}</p>
            </div>

            <div className="xarita-card">
              <span>100%</span>
              <p>{t("Sifat nazorati")}</p>
            </div>

            <div className="xarita-card">
              <span>2009</span>
              <p>{t("Tashkil etilgan")}</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Xarita;