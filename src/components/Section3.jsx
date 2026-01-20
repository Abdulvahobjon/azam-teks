import React, { useEffect } from 'react';
import aboutImg from '../assets/service3.webp';
import './Section3.css';
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();

  useEffect(() => {
    const image = document.querySelector('.about-image');
    const text = document.querySelector('.about-text');
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
    if (image) observer.observe(image);
    if (text) observer.observe(text);
    return () => {
      if (image) observer.unobserve(image);
      if (text) observer.unobserve(text);
    };
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImg} alt={t("Biz haqimizda")} />
        </div>
        <div className="about-text">
          <h3 className="small-title">{t("Biz haqimizda")}</h3>
          <h2 className="subtitle">{t("Eng zamonaviy & kuchli sanoat")}</h2>
          <p>
            {t('"AZAM TEKS" MCHJ Respublikadagi eng yiriklardan biri O\'zbekiston ishlab chiqaruvchisi poplin ranfors. To\'liq texnologik tsiklga ega mahsulotlar: "strip" - paxta urug\'ini ekish, yig\'ish, paxta tozalash zavodi, yigiruv, to\'quv, bo\'yash, tikuvchilik sexlari.')}
          </p>
          <p>
            {t('Kompaniya 2009 yilda tashkil etilgan, ishlab chiqarishga ixtisoslashgan 100% paxta mahsulotlari, eng yangi texnologiyalarga pul tikish va mahsulot sifati. Qattiq va ishlab chiqarish bilan shug\'ullanadi bo\'yalgan paxta iplari, qattiq, bo\'yalgan, bosma va to\'quv matolari va tayyor mahsulotlar.')}
          </p>
          <p>
            {t('Korporatsiyada mahsulotlar uchun 50 ta mashina o\'rnatilgan JX90A-260CM AIR JET LOOMS (Xitoy), yillik ishlab chiqarish quvvati Terri va vafli mahsulotlari korxonasi: 2400 tonna Tuval, Oyiga 200 tonna. Sochiqlar, TEXPA uskunalari uchun tikuv ustaxonasi (Germaniva) - yiliga 1650 tonna tayyor mahsulot.')}
          </p>
        </div>
      </div>
    </section>
  );
}
