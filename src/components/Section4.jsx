import { useEffect } from 'react'
import { useTranslation } from "react-i18next"
import service1 from '../assets/001.3.png'
import service4 from '../assets/003.2.png'
import service6 from '../assets/010.1.png'
import service3 from '../assets/014.1.png'
import service7 from '../assets/0517af38c97f85af76e3569bd7b30752.jpg'
import service10 from '../assets/0b443a442cce48dc78aeccde2e626141.jpeg'
import service8 from '../assets/10069.750x0.jpg'
import service11 from '../assets/1445619007.jpg'
import service9 from '../assets/204363521_w640_h640_204363521.jpg'
import service12 from '../assets/2bff21cf93dba1dd8be84e252d4fbb92.jpg'
import service2 from '../assets/handkerchiefs_image_1.jpg'
import service5 from '../assets/mattress_image_1.jpg'
// import new1 from '../assets/product/new/Постельное Белье/01.png'
import { useNavigate } from 'react-router-dom'
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
import new2 from '../assets/product/new/Постельное Белье/010.1.png'
import new3 from '../assets/product/new/Постельное Белье/015.2.png'
import new4 from '../assets/product/new/Постельное Белье/016.1.png'
import new5 from '../assets/product/new/Постельное Белье/022.1.png'
import new6 from '../assets/product/new/Постельное Белье/sal_gorsel.png'
import new7 from '../assets/product/new/Постельное Белье/Постельное Белье.png'
import './Section5.css'


export const services = [
  { title: 'Постельное Белье',id:1, img: [service1, service3, service4, service6, new2,new3,new4,new5,new6,new7] },
  { title: 'Носовное платок',id:2, img: [service2, dasramol2,dasramol3,dasramol4,dasramol5,dasramol6,dasramol7,dasramol8,dasramol9,dasramol10,dasramol11,dasramol12,dasramol13,dasramol14,dasramol15,dasramol16,dasramol17]},
  { title: 'Постельное Белье',id:3, img: [service1, service3, service4, service6, new2,new3,new4,new5,new6,new7] },
  { title: 'Постельное Белье',id:4, img: [service1, service3, service4, service6, new2,new3,new4,new5,new6,new7] },
  { title: 'Европостель',id:5, img: [service5,matras2,matras3,matras4,matras5,matras6,matras7,matras8,matras9,matras10,matras11] },
  { title: 'Постельное Белье',id:6, img: service6 },
  { title: 'Бязь Отбеленное',id:7, img: service7 },
  { title: 'Бязь',id:8, img: service8 },
  { title: 'Вафельное полотно',id:9, img: service9 },
  { title: 'Диагональ',id:10, img: service10 },
  { title: 'Марли',id:11, img: service11 },
  { title: 'Нетканое полотно',id:12, img: service12 },
];

export default function ServicesSection() {
  const { t } = useTranslation();

    const handleClick = (service) => {
  navigate("/postelnoe", { state: { image: service.img } });
};



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
      <h2>{t("Xizmatlar")}</h2>
      <h3 className='class'>{t("Eng yaxshi xizmatlar")}</h3>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index} onClick={()=> navigate(`/card/${service.id}`)}>
            <div className="card-inner">
              <img src={service.img[0]} alt={t(service.title)} />
              <h4>{t(service.title)}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
    
  );
}
