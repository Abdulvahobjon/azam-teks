import React, { useEffect } from "react";
import './Section6.css';
import { useTranslation } from "react-i18next";

export default function MapSection() {
  const { t } = useTranslation();

  useEffect(() => {
    const mapSection = document.querySelector('.map-section');
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
    if (mapSection) observer.observe(mapSection);
    return () => {
      if (mapSection) observer.unobserve(mapSection);
    };
  }, []);

  return (
    <section className="map-section">
      <iframe
        title={t("AZAM TEKS")}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.050037321267!2d71.6481233761616!3d41.0241612184465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4bbf96db9a55%3A0x114b1555b7e0a372!2sAZAM%20TEKS!5e0!3m2!1sru!2s!4v1768723835436!5m2!1sru!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
