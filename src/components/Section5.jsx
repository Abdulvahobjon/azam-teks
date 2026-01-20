import React, { useEffect } from 'react';
import './Section5.css';
import project1 from '../assets/img1.jpg';
import project2 from '../assets/img2.jpg';
import project3 from '../assets/img3.jpg';
import project4 from '../assets/img4.jpg';
import project5 from '../assets/img5.jpg';
import project6 from '../assets/img6.jpg';
import project7 from '../assets/img7.jpg';
import project8 from '../assets/img8.jpg';
import project9 from '../assets/img9.jpg';
import { useTranslation } from "react-i18next";

const projects = [
  { title: 'Носовное платок', img: project1 },
  { title: 'Постельное Белье', img: project2 },
  { title: 'Европостель', img: project3 },
  { title: 'Европостель', img: project4 },
  { title: 'Европостель', img: project5 },
  { title: 'Головной платок', img: project6 },
  { title: 'Головной платок', img: project7 },
  { title: 'Носовное платок', img: project8 },
  { title: 'Головной платок', img: project9 },
];

export default function ProjectsSection() {
  const { t } = useTranslation();

  useEffect(() => {
    const cards = document.querySelectorAll('.service-card');
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
    cards.forEach((card) => observer.observe(card));
    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <section className="projects-section">
      <h2>{t("Loyihalar")}</h2>
      <h3 className='class'>{t("Bizning mahsulotlar")}</h3>
      <div className="services-grid">
        {projects.map((project, index) => (
          <div className="service-card" key={index}>
            <div className="card-inner">
              <img src={project.img} alt={t(project.title)} />
              <h4>{t(project.title)}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
