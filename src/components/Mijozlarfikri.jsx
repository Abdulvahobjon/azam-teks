import React, { useEffect } from 'react';
import './Mijozlarfikri.css';
import { useTranslation } from 'react-i18next';

export default function Mijozlarfikri() {
  const { t } = useTranslation();

  // Автоматическая анимация при появлении
  useEffect(() => {
    const cards = document.querySelectorAll('.review-card');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      }, { threshold: 0.2 }
    );
    cards.forEach(card => observer.observe(card));
    return () => cards.forEach(card => observer.unobserve(card));
  }, []);

  // Генерация 5 звезд
  const renderStars = () => {
    return Array(5).fill(0).map((_, idx) => (
      <span key={idx} className="star filled">★</span>
    ));
  };

  // Массив id отзывов
  const reviewIds = [
    "review1","review2","review3","review4","review5","review6",
    "review7","review8","review9","review10","review11","review12"
  ];

  return (
    <section className="reviews-section">
      <h2>{t("Mijozlarimiz fikrlari")}</h2>
      <div className="reviews-grid">
        {reviewIds.map(id => (
          <div key={id} className="review-card">
            <div className="review-content">
              <h3>{t(`reviews.${id}.name`)}</h3>
              <div className="review-rating">{renderStars()}</div>
              <p>{t(`reviews.${id}.text`)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}