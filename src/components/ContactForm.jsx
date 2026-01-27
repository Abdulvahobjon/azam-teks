import { useState, useEffect } from "react";
import "./ContactForm.css";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    topic: "",
    message: "",
  });

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Telegram bot token va chat ID
  const BOT_TOKEN = "8260660890:AAE2lYCbJ7w8hsf3-Z4S7_BuiaSsP0MJ5fA";
  const CHAT_ID = "-1003584258291";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Telegramga yuboriladigan xabar
    const message = `
📩 Yangi so'rov:

👤 Ism: ${form.name}
📞 Telefon: ${form.phone}
📧 Email: ${form.email}
🏷 Mavzu: ${form.topic}

📝 Xabar:
${form.message}`;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`
      );

      const data = await res.json();

      if (data.ok) {
        toast.success(t("Xabar yuborildi!"));
        setForm({
          name: "",
          phone: "",
          email: "",
          topic: "",
          message: "",
        });
      } else {
          toast.error(t("Xatolik yuz berdi: ") + data.description);
      }
    } catch (err) {
      console.error(err);
       toast.error(t("Xatolik yuz berdi!"));
    }

    setIsOpen(false);
  };

  return (
    <>
      <button className="nav-btn" onClick={() => setIsOpen(true)}>
        {t("BIZ BILAN BOG'LANISH")}
      </button>

      {isOpen && (
        <div 
          className={`overlay ${isOpen ? 'show' : ''}`} 
          onClick={() => setIsOpen(false)}
        >
          <form
            className={`formMessage ${isOpen ? 'show' : ''}`}
            onSubmit={handleSubmit}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="close-btn"
              onClick={() => setIsOpen(false)}
              aria-label={t("Yopish")}
            >
              ✖
            </button>

            <h3>{t("BOG'LANISH")}</h3>

            <input
              name="name"
              placeholder={t("Ismingiz")}
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />

            <input
              name="phone"
              type="tel"
              placeholder={t("Telefon raqam")}
              value={form.phone}
              onChange={handleChange}
              required
              autoComplete="tel"
            />

            <input
              type="email"
              name="email"
              placeholder={t("Email")}
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />

            <select
              name="topic"
              value={form.topic}
              onChange={handleChange}
              required
            >
              <option value="">{t("Mavzuni tanlang")}</option>
              <option value="Buyurtma">{t("Buyurtma")}</option>
              <option value="Hamkorlik">{t("Hamkorlik")}</option>
              <option value="Savol">{t("Savol")}</option>
              <option value="Boshqa">{t("Boshqa")}</option>
            </select>

            <textarea
              name="message"
              placeholder={t("Xabaringiz")}
              value={form.message}
              onChange={handleChange}
              rows="4"
            />

            <button type="submit" className="submit-btn">
              {t("Yuborish")}
            </button>
          </form>
          
        </div>
        
      )}
    </>
  );
}
