import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { BsTelegram } from "react-icons/bs";
import { FaBars, FaFacebookSquare, FaPhone, FaTimes } from "react-icons/fa";
import { FaSquareInstagram, FaSquareThreads } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import ContactForm from './ContactForm';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light');
  const { t, i18n } = useTranslation();

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Smooth scroll detection for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen && window.innerWidth <= 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      <div className='Nav_header'>
        <div className="contact">
          <span><FaPhone /> (90) 222-78-77</span>
          <Link to={"https://e.mail.ru/compose/?to=azam-teks-mchj%40mail.ru"}><MdEmail /> azam-teks-mchj@mail.ru</Link>
        </div>
        <div className="icons">
          <Link to={"https://t.me/azamteks"}><BsTelegram /></Link>
          <Link to={"https://www.instagram.com/azam_teks"}><FaSquareInstagram /></Link>
          <Link to={"https://www.threads.com/@azam_teks"}><FaSquareThreads /></Link>
          <Link to={"https://www.facebook.com/people/Azam-Teks"}><FaFacebookSquare /></Link>
        </div>
      </div>

      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="name">
          <img src={logo} alt="Logo" width={80} />
          <h2>AZAM TEKS</h2>
        </div>

        {/* Theme Toggle & Burger Icon */}
        <div className="nav-actions">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label={theme === 'light' ? t("Tun rejimi") : t("Kun rejimi")}
          >
            {theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
          </button>
          <div className={`burger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Menu */}
        <ul className={menuOpen ? 'active' : ''}>
          <li><Link to={"/"} onClick={() => setMenuOpen(false)}>{t("Bosh sahifa")}</Link></li>
          <li><Link to={"/bizhaqimizda"} onClick={() => setMenuOpen(false)}>{t("Biz haqimizda")}</Link></li>
          <li><Link to={"/xizmatlar"} onClick={() => setMenuOpen(false)}>{t("Xizmatlar")}</Link></li>
          <li><Link to={"/loyihalar"} onClick={() => setMenuOpen(false)}>{t("Loyihalar")}</Link></li>
          <li><Link to={"/boglanish"} onClick={() => setMenuOpen(false)}>{t("Bog'lanish")}</Link></li>
          {/* <li><Link to={"/mijozlarfikri"}>{t("Mijozlar fikri")}</Link></li> */}
          <li className="theme-toggle-mobile">
            <button 
              className="theme-toggle-btn" 
              onClick={toggleTheme}
            >
              {theme === 'light' ? <><MdDarkMode /> {t("Tun rejimi")}</> : <><MdLightMode /> {t("Kun rejimi")}</>}
            </button>
          </li>
          <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
            <option value="uz">UZB</option>
            <option value="ru">RUS</option>
            <option value="en">ENG</option>
          </select>
        <ContactForm />

        </ul>

      </nav>
    </>
  )
}
