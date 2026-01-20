import React, { useEffect } from 'react';
import materialImg from '../assets/01.png';
import expertImg from '../assets/02.png';
import deliveryImg from '../assets/03.png';
import './Section2.css';
import { useTranslation } from "react-i18next";

export default function FeaturesTable() {
  const { t } = useTranslation();

  useEffect(() => {
    const features = document.querySelectorAll('.feature');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );
    features.forEach((feature) => observer.observe(feature));
    return () => features.forEach((feature) => observer.unobserve(feature));
  }, []);

  return (
    <div className="features-table">
      <div className="feature">
        <img src={materialImg} alt={t("Sifatli materiallar")} />
        <div className="feature-text">
          <h3>1. {t("Sifatli materiallar")}</h3>
          <p>{t("Har bir mahsulot uchun eng yuqori sifatli materiallarni tanladik, sizning ehtiyojlaringizni qondirish uchun.")}</p>
        </div>
      </div>
      <div className="divider"></div>

      <div className="feature">
        <img src={expertImg} alt={t("Ekspertlar jamoasi")} />
        <div className="feature-text">
          <h3>2. {t("Ekspertlar jamoasi")}</h3>
          <p>{t("Bizning ekspertlar jamoasi mutaxassislik sohasida yuqori malakaga ega, sizning loyihangizni muvaffaqiyatli bajarish uchun tayyor.")}</p>
        </div>
      </div>
      <div className="divider"></div>

      <div className="feature">
        <img src={deliveryImg} alt={t("O'z vaqtida yetkazib berish")} />
        <div className="feature-text">
          <h3>3. {t("O'z vaqtida yetkazib berish")}</h3>
          <p>{t("Buyurtmangizni o'z vaqtida yetkazib berish bizning asosiy vazifamizdir, sizning tijoratingizni oshirish uchun.")}</p>
        </div>
      </div>
    </div>
  );
}
