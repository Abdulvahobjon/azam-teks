import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './FactorySections.css';

export default function FactorySections() {
  const { t } = useTranslation();

  useEffect(() => {
    const sections = document.querySelectorAll('.factory-section-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 200);
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="factory-sections-container">
      {/* Production Section */}
      <section className="factory-section-item">
        <div className="factory-section-content">
          <div className="factory-section-text">
            <h2>{t("Ishlab chiqarish") || "Ishlab chiqarish"}</h2>
            <p>{t("Bizning ishlab chiqarish korxonamiz zamonaviy texnologiyalar va yuqori sifatli uskunalar bilan jihozlangan. Biz 100% paxta mahsulotlarini to'liq texnologik tsikl bo'yicha ishlab chiqaramiz.") || "Bizning ishlab chiqarish korxonamiz zamonaviy texnologiyalar va yuqori sifatli uskunalar bilan jihozlangan. Biz 100% paxta mahsulotlarini to'liq texnologik tsikl bo'yicha ishlab chiqaramiz."}</p>
            <ul className="factory-list">
              <li>{t("Paxta urug'ini ekish va yig'ish") || "Paxta urug'ini ekish va yig'ish"}</li>
              <li>{t("Paxta tozalash zavodi") || "Paxta tozalash zavodi"}</li>
              <li>{t("Yigiruv, to'quv va bo'yash") || "Yigiruv, to'quv va bo'yash"}</li>
              <li>{t("Tikuvchilik sexlari") || "Tikuvchilik sexlari"}</li>
              <li>{t("50 ta JX90A-260CM AIR JET LOOMS dastgohi") || "50 ta JX90A-260CM AIR JET LOOMS dastgohi"}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="factory-section-item">
        <div className="factory-section-content reverse">
          <div className="factory-section-text">
            <h2>{t("Sifat nazorati") || "Sifat nazorati"}</h2>
            <p>{t("Bizning mahsulotlarimiz xalqaro standartlarga javob beradi. Har bir bosqichda qat'iy sifat nazorati o'tkaziladi, shuning uchun biz yuqori sifatli mahsulotlarni kafolatlaymiz.") || "Bizning mahsulotlarimiz xalqaro standartlarga javob beradi. Har bir bosqichda qat'iy sifat nazorati o'tkaziladi, shuning uchun biz yuqori sifatli mahsulotlarni kafolatlaymiz."}</p>
            <ul className="factory-list">
              <li>{t("Xalqaro sifat standartlari") || "Xalqaro sifat standartlari"}</li>
              <li>{t("Har bir bosqichda sifat nazorati") || "Har bir bosqichda sifat nazorati"}</li>
              <li>{t("100% paxta materiallari") || "100% paxta materiallari"}</li>
              <li>{t("Yuqori sifatli uskunalar") || "Yuqori sifatli uskunalar"}</li>
              <li>{t("Ekspertlar jamoasi") || "Ekspertlar jamoasi"}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="factory-section-item">
        <div className="factory-section-content">
          <div className="factory-section-text">
            <h2>{t("Texnologik jarayon") || "Texnologik jarayon"}</h2>
            <p>{t("Bizning ishlab chiqarish jarayonimiz zamonaviy va samarali. Har bir bosqich ehtiyotkorlik bilan nazorat qilinadi va eng yaxshi natijalarni ta'minlaydi.") || "Bizning ishlab chiqarish jarayonimiz zamonaviy va samarali. Har bir bosqich ehtiyotkorlik bilan nazorat qilinadi va eng yaxshi natijalarni ta'minlaydi."}</p>
            <div className="process-steps">
              <div className="process-step">
                <span className="step-number">1</span>
                <div>
                  <h4>{t("Materiallarni tanlash") || "Materiallarni tanlash"}</h4>
                  <p>{t("Eng yaxshi paxta navlarini tanlaymiz") || "Eng yaxshi paxta navlarini tanlaymiz"}</p>
                </div>
              </div>
              <div className="process-step">
                <span className="step-number">2</span>
                <div>
                  <h4>{t("Tozalash va tayyorlash") || "Tozalash va tayyorlash"}</h4>
                  <p>{t("Paxta tozalash va tayyorlash jarayonlari") || "Paxta tozalash va tayyorlash jarayonlari"}</p>
                </div>
              </div>
              <div className="process-step">
                <span className="step-number">3</span>
                <div>
                  <h4>{t("Yigiruv va to'quv") || "Yigiruv va to'quv"}</h4>
                  <p>{t("Zamonaviy dastgohlar yordamida to'quv") || "Zamonaviy dastgohlar yordamida to'quv"}</p>
                </div>
              </div>
              <div className="process-step">
                <span className="step-number">4</span>
                <div>
                  <h4>{t("Bo'yash va qayta ishlash") || "Bo'yash va qayta ishlash"}</h4>
                  <p>{t("Yuqori sifatli bo'yash va qayta ishlash") || "Yuqori sifatli bo'yash va qayta ishlash"}</p>
                </div>
              </div>
              <div className="process-step">
                <span className="step-number">5</span>
                <div>
                  <h4>{t("Tikuv va tayyor mahsulot") || "Tikuv va tayyor mahsulot"}</h4>
                  <p>{t("Tikuvchilik va yakuniy mahsulot tayyorlash") || "Tikuvchilik va yakuniy mahsulot tayyorlash"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
