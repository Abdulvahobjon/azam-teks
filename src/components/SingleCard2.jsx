import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from './Section5';
import './SingleCard2.css';

function SingleCard2() {
  const { id } = useParams();
  const single = projects.find(item => item.id === Number(id));

  useEffect(() => {
    if (!single) return;

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
        {single.img.map((img, idx) => (
          <div
            className="single-card-item"
            key={idx}
            style={{ transitionDelay: `${idx * 0.1}s` }}
          >
            <img src={img} alt={`${single.title} ${idx + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default SingleCard2;