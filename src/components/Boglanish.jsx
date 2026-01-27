import { useState } from "react";
import axios from "axios";
import "./ContactForm.css";
import { useTranslation } from "react-i18next";
import './Boglanish.css'
import img1 from '../assets/contact_us.png'
import Footer from './Footer'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TELEGRAM_BOT_TOKEN = "8260660890:AAE2lYCbJ7w8hsf3-Z4S7_BuiaSsP0MJ5fA";
const CHAT_ID = "-1003584258291";

export default function ContactPage() {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    topic: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `
📩 Yangi so'rov:

👤 Ism: ${form.name}
📞 Telefon: ${form.phone}
📧 Email: ${form.email}
🏷 Mavzu: ${form.topic}

📝 Xabar:
${form.message}`;

    try {
      const res = await axios.post(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          chat_id: CHAT_ID,
          text,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res.status === 200) {
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
  };

  return (
		<>
    <div className="contact-page">
      {/* Agar rasm kerak bo‘lsa yuqoriga qo‘shing */}
      <div className="contact-banner">
        <img src={img1} alt="Banner" />
      </div>

      <div className="contact-form-container">
        <form className="formMessage" onSubmit={handleSubmit}>
          <h3>{t("BOG'LANISH")}</h3>

          <input
            name="name"
            placeholder={t("Ismingiz")}
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder={t("Telefon raqam")}
            value={form.phone}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder={t("Email")}
            value={form.email}
            onChange={handleChange}
            required
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
          />

          <button type="submit" className="submit-btn">
            {t("Yuborish")}
          </button>
        </form>
      </div>
    </div>

</>
  );
}