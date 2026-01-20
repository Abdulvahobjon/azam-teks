import React, { useEffect } from 'react';
import './Section7.css';
import whyImg from '../assets/17yil.jpg';
import { useTranslation } from "react-i18next";

export default function WhyChooseUs() {
  const { t } = useTranslation();

  useEffect(() => {
    const text = document.querySelector('.why-text');
    const image = document.querySelector('.why-image');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    if (text) observer.observe(text);
    if (image) observer.observe(image);
    return () => {
      if (text) observer.unobserve(text);
      if (image) observer.unobserve(image);
    };
  }, []);

  return (
    <section className="why-section">
      <div className="why-container">
        <div className="why-text">
          <h2>{t("Nega aynan biz")}</h2>
          <h3>{t("17 yillik tajriba, ushbu sohada")}</h3>
          <p>{t('OOO "AZAM TEKS" Respublikadagi eng yiriklardan biri. O\'zbekiston to\'liq texnologik tsiklga ega mahsulotlar ishlab chiqaruvchisi - paxta urug\'ini ekish, yig\'ish, paxta tozalash zavodi, yigiruv, to\'quv, bo\'yash, tikuvchilik korxonalari.')}</p>
          <p>{t('Kompaniya 2009 yilda tashkil etilgan bo\'lib, 100% paxta mahsulotlarini ishlab chiqarishga ixtisoslashgan. Eng yangi texnologiyalar va mahsulotlar sifatiga pul tikadi. Qattiq va bo\'yalgan paxta iplari, bosma va to\'quv matolari va tayyor mahsulotlar ishlab chiqaradi.')}</p>
          <p>{t('Korxonada 50 ta JX90A-260CM AIR JET LOOMS (Xitoy) dastgohlari o‘rnatilgan. Terri va vafli mahsulotlari korxonasining yillik ishlab chiqarish quvvati: 2400 tonna Tuval, oyiga 200 tonna sochiq, tikuvchilik korxonasi (Germaniya) - yiliga 1650 tonna tayyor mahsulot. Biz jadal rivojlanayotgan kompaniyamiz.')}</p>
        </div>
        <div className="why-image">
          <img src={whyImg} alt={t("Why Choose Us")} />
        </div>
      </div>
    </section>
  );
}
