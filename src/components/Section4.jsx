import React, { memo, useEffect } from 'react'
import 'aos/dist/aos.css'
import { useTranslation } from "react-i18next"
import new10 from '../assets/product/new/Постельное Белье/AT-011.jpg'
import new11 from '../assets/product/new/Постельное Белье/AT_001.jpg'
import new12 from '../assets/product/new/Постельное Белье/AT_002.jpg'
import new13 from '../assets/product/new/Постельное Белье/AT_004.jpg'
import new14 from '../assets/product/new/Постельное Белье/AT_005.jpg'
import new15 from '../assets/product/new/Постельное Белье/AT_006.jpg'
import new16 from '../assets/product/new/Постельное Белье/AT_007_.jpg'
import new17 from '../assets/product/new/Постельное Белье/AT_008.jpg'
import new18 from '../assets/product/new/Постельное Белье/AT_010_.jpg'
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
import byaz1 from '../assets/product/new/Бязь Отбеленное/8b45152e641ee3fd3feb339f81606a40-1024x781.jpg'
import byaz2 from '../assets/product/new/Бязь Отбеленное/6447949303.jpg'
import byaz3 from '../assets/product/new/Бязь Отбеленное/6455840412.jpg'
import byaz4 from '../assets/product/new/Бязь Отбеленное/6698679495.jpg'
import byaz5 from '../assets/product/new/Бязь Отбеленное/a3f0a8a0537998eac6de905799d57138.jpg'
import baz1 from '../assets/product/new/Бязь/504_original.webp'
import baz2 from '../assets/product/new/Бязь/7216c76aa9cc54da4fb779d57c89cdaf.jpg'
import baz3 from '../assets/product/new/Бязь/8243.750x0.jpg'
import baz4 from '../assets/product/new/Бязь/dulqxgsrl4ekg7gfv720pbsavqc14b8c.jpg'
import baz5 from '../assets/product/new/Бязь/i-528x350-trikotaz-na-atlase-zolotoj-na-belom.jpg'
import baz6 from '../assets/product/new/Бязь/nR-QTvFk.jpg'
import vafel1 from '../assets/product/new/Вафельное полотно/522c0d0be584bbaf6c75fd553674aa99.jpg'
import vafel2 from '../assets/product/new/Вафельное полотно/polotno-vafeljnoe-uzbekistan-otbelennoe-rulon-045h50-m-plotnostj-200-±5-g-m2-lajma-607528-800x800.png'
import vafel3 from '../assets/product/new/Вафельное полотно/vafelnoe-polotno.jpeg'
import diag1 from '../assets/product/new/Диагональ/6f3bd99f2af7f3c0657ce463c744a08e.jpeg'
import diag2 from '../assets/product/new/Диагональ/8f66278a6ab7a6553984a2a6f4fee521.jpeg'
import diag3 from '../assets/product/new/Диагональ/25K863246_1.1200x1200.jpg'
import diag4 from '../assets/product/new/Диагональ/bc042219bdf3f89f784814da1f694e4e.jpeg'
import diag5 from '../assets/product/new/Диагональ/f0c89664bb98a5f6c6ae1f50d8e634b3.jpg'
import mar1 from '../assets/product/new/Марли/75c5fe6f_e790_11ea_94d5_dca26664a693_ed510e24_e799_11ea_94d5_dca26664a693.jpg'
import mar2 from '../assets/product/new/Марли/75c5fe6f_e790_11ea_94d5_dca26664a693_ed510e24_e799_11ea_94d5_dca26664a693.jpg'
import mar3 from '../assets/product/new/Марли/6569752468.jpg'
import mar4 from '../assets/product/new/Марли/marlya.jpg'
import pol1 from '../assets/product/new/Нетканое полотно/700-nw.jpg'
import pol2 from '../assets/product/new/Нетканое полотно/6865056497.jpg'
import pol3 from '../assets/product/new/Нетканое полотно/orig.webp'
import pol4 from '../assets/product/new/Нетканое полотно/polotno-netkanoe-beloe_1.800x600.jpg'
import Aos from 'aos'



export const services = [
  { title: 'Постельное Белье',id:1, img: [new10 , new11, new12, new13, new14, new15, new16, new17, new18] },
  { title: 'Носовное платок',id:2, img: [service2, dasramol2,dasramol3,dasramol4,dasramol5,dasramol6,dasramol7,dasramol8,dasramol9,dasramol10,dasramol11,dasramol12,dasramol13,dasramol14,dasramol15,dasramol16,dasramol17]},
  { title: 'Постельное Белье',id:3, img: [service3, service1, service4, service6, new2,new3,new4,new5,new6,new7] },
  { title: 'Постельное Белье',id:4, img: [service1, service3, service4, service6, new2,new3,new4,new5,new6,new7] },
  { title: 'Европостель',id:5, img: [service5,matras2,matras3,matras4,matras5,matras6,matras7,matras8,matras9,matras10,matras11] },
  { title: 'Постельное Белье',id:6, img: [new13,service6, service3, service4, service1, new2,new3,new4,new5,new6,new7] },
  { title: 'Бязь Отбеленное',id:7, img: [service7, byaz1, byaz2, byaz3, byaz4, byaz5] },
  { title: 'Бязь',id:8, img: [service8, baz1, baz2, baz3, baz4, baz5, baz6] },
  { title: 'Вафельное полотно',id:9, img: [service9, vafel1, vafel2, vafel3] },
  { title: 'Диагональ',id:10, img: [service10, diag1, diag2, diag3, diag4, diag5] },
  { title: 'Марли',id:11, img: [service11, mar1, mar2, mar3, mar4] },
  { title: 'Нетканое полотно',id:12, img: [service12, pol1, pol2, pol3, pol4] },
];

function ServicesSection() {
  const { t } = useTranslation();
  useEffect(() => {
  Aos.init({ duration: 1000 });
},[]);


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
          <div className="service-card" key={index} onClick={()=> navigate(`/card/${service.id}`)} >
            <div className="card-inner" data-aos="fade-up" data-aos-duration="2000">
              <img src={service.img[0]} alt={t(service.title)} />
              <h4>{t(service.title)}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
    
  );
}
export default React.memo(ServicesSection)
