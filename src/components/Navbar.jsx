import { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next"
import { BsTelegram } from "react-icons/bs"
import { FaBars, FaFacebookSquare, FaPhone, FaTimes } from "react-icons/fa"
import { FaSquareInstagram, FaSquareThreads } from "react-icons/fa6"
import { MdDarkMode, MdEmail, MdLightMode } from "react-icons/md"
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import ContactForm from './ContactForm'
import './Navbar.css'
import { services } from './Section4.jsx'
import { projects } from './Section5.jsx'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = (menuOpen && window.innerWidth <= 768) ? 'hidden' : 'unset';
  }, [menuOpen]);

  
  useEffect(() => {
  if (menuOpen) {
    document.body.classList.add('menu-open');
  } else {
    document.body.classList.remove('menu-open');
  }
}, [menuOpen]);
  // Handle search input
  useEffect(() => {
    if (!searchTerm) {
      setSearchResults([]);
      return;
    }
    const term = searchTerm.toLowerCase();
    const results = [...services, ...projects].filter(item =>
      t(item.title).toLowerCase().includes(term)
    );
    setSearchResults(results);
  }, [searchTerm, i18n.language]);

  const handleNavigate = (id) => {
    setMenuOpen(false);
    navigate(`/card/${id}`);
    navigate(`/card2/${id}`);
    setSearchTerm('');
    setSearchResults([]);
  };

  return (
    <>
    <div id='scrolbar' className={scrolled ? 'scrolled' : ''}>
      <div className='Nav_header'>
        <div className="contact">
          <span className='phone'><FaPhone /> (90) 222-78-77</span>
          <Link to={"https://e.mail.ru/compose/?to=azam-teks-mchj%40mail.ru"}><MdEmail /> azam-teks-mchj@mail.ru</Link>
        </div>
        <div className="icons">
          <Link to={"https://t.me/azamteks"}><BsTelegram /></Link>
          <Link to={"https://www.instagram.com/azam_teks"}><FaSquareInstagram /></Link>
          <Link to={"https://www.threads.com/@azam_teks"}><FaSquareThreads /></Link>
          <Link to={"https://www.facebook.com/people/Azam-Teks"}><FaFacebookSquare /></Link>
        </div>
      </div>
    </div>
      

      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="name">
          <img src={logo} alt="Logo" width={80} />
          <h2>AZAM TEKS</h2>
        </div>

        <div className="nav-actions">
  <div className={`burger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
    {menuOpen ? <FaTimes /> : <FaBars className='close' />}
  </div>
  <button 
    className="theme-toggle" 
    onClick={toggleTheme}
    aria-label={theme === 'light' ? "Тёмный режим" : "Светлый режим"}
  >
    {theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
  </button>
</div>

        <ul className={menuOpen ? 'active' : ''}>
          <li><Link to={"/"} onClick={() => setMenuOpen(false)}>{t("Bosh sahifa")}</Link></li>
          <li><Link to={"/bizhaqimizda"} onClick={() => setMenuOpen(false)}>{t("Biz haqimizda")}</Link></li>
          <li><Link to={"/xizmatlar"} onClick={() => setMenuOpen(false)}>{t("Xizmatlar")}</Link></li>
          <li><Link to={"/loyihalar"} onClick={() => setMenuOpen(false)}>{t("Loyihalar")}</Link></li>
          <li><Link to={"/boglanish"} onClick={() => setMenuOpen(false)}>{t("Bog'lanish")}</Link></li>
          <li><Link to={"/mijozlarfikri"} onClick={() => setMenuOpen(false)}>{t("Mijozlar fikri")}</Link></li>

          <div className="search-wrapper">
            <input 
              type="text" 
              placeholder={t("Qidiruv...")} 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              id='search'
            />
            {searchResults.length > 0 && (
              <div className="search-results">
                {searchResults.map(item => (
                  <div key={item.id} className="search-item" onClick={() => handleNavigate(item.id)}>
                    <img src={item.img[0]} alt={t(item.title)} />
                    <span>{t(item.title)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <select onChange={(e) => i18n.changeLanguage(e.target.value)} value={i18n.language}>
            <option value="uz">UZB</option>
            <option value="ru">RUS</option>
            <option value="en">ENG</option>
            <option value="tr">TURK</option>
            <option value="fr">FRA</option>
            <option value="ar">ARAB</option>
            <option value="uk">UKR</option>
            <option value="ko">KOR</option>
            <option value="zh">ZH</option>
          </select>
          <li className='contact'><ContactForm/></li>
        </ul>
      </nav>
    </>
  );
}