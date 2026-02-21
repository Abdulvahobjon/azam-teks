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
import dasramol10 from '../assets/product/handkerchiefs/handkerchiefs_image_10.jpg'
import dasramol11 from '../assets/product/handkerchiefs/handkerchiefs_image_11.jpg'
import dasramol12 from '../assets/product/handkerchiefs/handkerchiefs_image_12.jpg'
import dasramol13 from '../assets/product/handkerchiefs/handkerchiefs_image_13.jpg'
import dasramol14 from '../assets/product/handkerchiefs/handkerchiefs_image_14.jpg'
import dasramol15 from '../assets/product/handkerchiefs/handkerchiefs_image_15.jpg'
import dasramol16 from '../assets/product/handkerchiefs/handkerchiefs_image_16.jpg'
import dasramol17 from '../assets/product/handkerchiefs/handkerchiefs_image_17.jpg'
import dasramol2 from '../assets/product/handkerchiefs/handkerchiefs_image_2.jpg'
import dasramol3 from '../assets/product/handkerchiefs/handkerchiefs_image_3.jpg'
import dasramol4 from '../assets/product/handkerchiefs/handkerchiefs_image_4.jpg'
import dasramol5 from '../assets/product/handkerchiefs/handkerchiefs_image_5.jpg'
import dasramol6 from '../assets/product/handkerchiefs/handkerchiefs_image_6.jpg'
import dasramol7 from '../assets/product/handkerchiefs/handkerchiefs_image_7.jpg'
import dasramol8 from '../assets/product/handkerchiefs/handkerchiefs_image_8.jpg'
import dasramol9 from '../assets/product/handkerchiefs/handkerchiefs_image_9.jpg'
import { Navigate, useNavigate } from 'react-router-dom'
import new2 from '../assets/product/new/Постельное Белье/010.1.png'
import new3 from '../assets/product/new/Постельное Белье/015.2.png'
import new4 from '../assets/product/new/Постельное Белье/016.1.png'
import new5 from '../assets/product/new/Постельное Белье/022.1.png'
import new6 from '../assets/product/new/Постельное Белье/sal_gorsel.png'
import new7 from '../assets/product/new/Постельное Белье/Постельное Белье.png'
import matras10 from '../assets/product/mattress/mattress_image_10.jpg'
import matras11 from '../assets/product/mattress/mattress_image_11.jpg'
import matras2 from '../assets/product/mattress/mattress_image_2.jpg'
import matras3 from '../assets/product/mattress/mattress_image_3.jpg'
import matras4 from '../assets/product/mattress/mattress_image_4.jpg'
import matras5 from '../assets/product/mattress/mattress_image_5.jpg'
import matras6 from '../assets/product/mattress/mattress_image_6.jpg'
import matras7 from '../assets/product/mattress/mattress_image_7.jpg'
import matras8 from '../assets/product/mattress/mattress_image_8.jpg'
import matras9 from '../assets/product/mattress/mattress_image_9.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'


export const projects = [
  { title: 'Носовное платок',id:1, img: [project1, dasramol2,dasramol3,dasramol4,dasramol5,dasramol6,dasramol7,dasramol8,dasramol9,dasramol10,dasramol11,dasramol12,dasramol13,dasramol14,dasramol15,dasramol16,dasramol17] },
  { title: 'Постельное Белье',id:2, img: [project2,new2,new3,new4,new5,new6,new7] },
  { title: 'Европостель',id:3, img: [project3,matras2,matras3,matras4,matras5,matras6,matras7,matras8,matras9,matras10,matras11] },
  { title: 'Европостель',id:4, img: [project4,matras2,matras3,matras4,matras5,matras6,matras7,matras8,matras9,matras10,matras11] },
  { title: 'Европостель',id:5, img: [project5,matras2,matras3,matras4,matras5,matras6,matras7,matras8,matras9,matras10,matras11] },
  { title: 'Головной платок',id:6, img: [project6, dasramol2,dasramol3,dasramol4,dasramol5,dasramol6,dasramol7,dasramol8,dasramol9,dasramol10,dasramol11,dasramol12,dasramol13,dasramol14,dasramol15,dasramol16,dasramol17] },
  { title: 'Головной платок',id:7, img: [project7, dasramol2,dasramol3,dasramol4,dasramol5,dasramol6,dasramol7,dasramol8,dasramol9,dasramol10,dasramol11,dasramol12,dasramol13,dasramol14,dasramol15,dasramol16,dasramol17] },
  { title: 'Носовное платок',id:8, img: [project8, dasramol2,dasramol3,dasramol4,dasramol5,dasramol6,dasramol7,dasramol8,dasramol9,dasramol10,dasramol11,dasramol12,dasramol13,dasramol14,dasramol15,dasramol16,dasramol17] },
  { title: 'Головной платок',id:9, img: [project9, dasramol2,dasramol3,dasramol4,dasramol5,dasramol6,dasramol7,dasramol8,dasramol9,dasramol10,dasramol11,dasramol12,dasramol13,dasramol14,dasramol15,dasramol16,dasramol17] },
];

export default function ProjectsSection() {
  const { t } = useTranslation();
  const handleClick = (project) => {
  navigate("/postelnoe", { state: { image: project.img } });
};
useEffect(() => {
  if (window.innerWidth <= 768) {
    Aos.init({
      duration: 1000,
      once: true
    });
  }
}, []);

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

  let navigate = useNavigate()

  return (
    <section className="projects-section">
      <h2>{t("Loyihalar")}</h2>
      <h3 className='class'>{t("Bizning mahsulotlar")}</h3>
      <div className="services-grid">
        {projects.map((project, index) => (
          <div className="service-card" key={project.id} onClick={()=> navigate(`/card2/${project.id}`)}>
            <div className="card-inner" data-aos="zoom-in" data-aos-duration="2000">
              <img src={project.img[0]} alt={t(project.title)} />
              <h4>{t(project.title)}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
