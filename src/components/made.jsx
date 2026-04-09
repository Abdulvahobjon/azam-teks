import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaPlay, FaSearch, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./made.css";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/IMG_1576.JPG";
import img2 from "../assets/IMG_1583.JPG";
import img4 from "../assets/IMG_1613.JPG";
import img5 from "../assets/IMG_1616.JPG";
import vid1 from "../assets/IMG_3786.MOV";
import vid2 from "../assets/IMG_3787.MOV";
const mediaItems = [
  { type: "image", src: img1 },
  { type: "image", src: img2 },
  { type: "image", src: img4 },
  { type: "image", src: img5 },
  { type: "video", src: vid1 },
  { type: "video", src: vid2 },
];
const Made = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const openModal = (i) => {
    setCurrentIndex(i);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  const next = () => setCurrentIndex((p) => (p + 1) % mediaItems.length);
  const prev = () => setCurrentIndex((p) => (p - 1 + mediaItems.length) % mediaItems.length);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
    }
  }, [currentIndex]);
  return (
    <section className="made-section">
      <div className="made-container">
        <div className="made-left">
          <h2>{t("made.title")}</h2>
          <p>{t("made.desc")}</p>
          <ul>
            <li>{t("made.step1")}</li>
            <li>{t("made.step2")}</li>
            <li>{t("made.step3")}</li>
            <li>{t("made.step4")}</li>
            <li>{t("made.step5")}</li>
          </ul>
          <button className="order-btn" onClick={() => navigate("/boglanish")}>
            {t("made.btn")}
          </button>
        </div>
        <div className="media-thumbnails">
          {mediaItems.map((item, i) => (
            <div key={i} className="media-thumb" onClick={() => openModal(i)}>
              {item.type === "image" ? (
                <img src={item.src} alt="" />
              ) : (
                <video muted playsInline>
                  <source src={item.src} />
                </video>
              )}
              <div className="thumb-overlay">
                <button className="overlay-btn">
                  {item.type === "video" ? <FaPlay /> : <FaSearch />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modalOpen && (
        <div className="fullscreen-modal" onClick={closeModal}>
          <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-btn close" onClick={closeModal}>
              <FaTimes />
            </button>
            <button className="modal-btn prev" onClick={prev}>
              <FaChevronLeft />
            </button>
            <button className="modal-btn next" onClick={next}>
              <FaChevronRight />
            </button>
            {mediaItems[currentIndex].type === "image" ? (
              <img src={mediaItems[currentIndex].src} alt="" />
            ) : (
              <video ref={videoRef} controls autoPlay>
                <source src={mediaItems[currentIndex].src} />
              </video>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
export default Made;