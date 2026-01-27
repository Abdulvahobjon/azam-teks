import React from 'react';
import './Footer.css';
import { BsTelegram } from "react-icons/bs";
import { FaSquareInstagram, FaSquareThreads } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section social">
          <h4>{t("Bizning ijtimoiy tarmoqlar")}</h4>
          <div className="social-icons">
            <Link to={"https://t.me/azamteks"} target="_blank" rel="noopener noreferrer"><BsTelegram/></Link>
            <Link to={"https://www.instagram.com/azam_teks"} target="_blank" rel="noopener noreferrer"><FaSquareInstagram/></Link>
            <Link to={"https://www.threads.com/@azam_teks"} target="_blank" rel="noopener noreferrer"><FaSquareThreads/></Link>
            <Link to={"https://www.facebook.com/people/Azam-Teks"} target="_blank" rel="noopener noreferrer"><FaFacebookSquare/></Link>
          </div>
        </div>

        <div className="footer-section links">
          <h4>{t("Muhim havolalar")}</h4>
          <ul>
            <li><Link to="/">{t("Biz haqimizda")}</Link></li>
            <li><Link to="/xizmatlar">{t("Xizmatlar")}</Link></li>
            <li><Link to="/loyihalar">{t("Loyihalar")}</Link></li>
            <li><Link to="/boglanish">{t("Bog'lanish")}</Link></li>
            <li><Link to="/mijozlarfikri">{t("Mijozlar fikri")}</Link></li>
            <li><Link to="/manzil">{t("Manzil")}</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>{t("Manzil")}</h4>
          <p>160105, Namangan, Balandariq 6A berk koʻchasi, 42</p><br />
          <span><FaPhone/>(90) 222-78-77</span>
          <Link to={"https://e.mail.ru/compose/?to=azam-teks-mchj%40mail.ru"}><MdEmail/>azam-teks-mchj@mail.ru</Link>
          <span></span>
          <Link to={"https://www.google.com/maps/place/AZAM+TEKS,+160105,+Namangan,+Namangan+viloyati,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.024276,71.65132,15z/data=!4m6!3m5!1s0x38bb4bbf96db9a55:0x114b1555b7e0a372!8m2!3d41.0241572!4d71.6506983!16s%2Fg%2F11v5dkm92h?hl=ru&gl=US&g_ep=Eg1tbF8yMDI2MDExNF8wIOC7DCoASAJQAg%3D%3D"}><IoLocationSharp/>{t("Joylashuv")}</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>Copyright © 2026 AZAM TEKS. {t("All rights reserved.")}</p>
        <div className="footer-policy">
          <Link to="/">{t("Privacy")}</Link> | <Link to="/">{t("Terms of Use")}</Link> | <Link to="/">{t("Cookies")}</Link>
        </div>
      </div>
      
    </footer>
  );
}
