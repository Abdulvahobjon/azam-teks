import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { services } from './Section4'
import './SingleCard.css'

function SingleCard() {
  let { id } = useParams();
  let single = services.find((item) => item.id == id);

  // Intersection Observer: fadeInUp animation
  useEffect(() => {
    const cards = document.querySelectorAll('.single-card-item');
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
  }, [single]);

  if (!single) return <p>Mahsulot topilmadi</p>;

  return (
    <section className="single-card-section">
      <h2 className="single-card-title">{single.title}</h2>
      <div className="single-card-grid">
        {Array.isArray(single.img) ? (
          single.img.map((i, idx) => (
            <div className="single-card-item" key={idx} style={{ transitionDelay: `${idx * 0.1}s` }}>
              <img src={i} alt={`${single.title} ${idx}`} />
            </div>
          ))
        ) : (
          <div className="single-card-item">
            <img src={single.img} alt={single.title} />
          </div>
        )}
      </div>
    </section>
  );
}

export default SingleCard;
