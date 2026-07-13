import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import TOP from "../assets/TOP/IMG_4160.JPG";
import "./Topmahsulot.css";

const WEEK = 7 * 24 * 60 * 60 * 1000;
const STORAGE_KEY = "top_product_start_time";

const getStartTime = () => {
  let start = localStorage.getItem(STORAGE_KEY);

  if (!start) {
    start = Date.now();
    localStorage.setItem(STORAGE_KEY, start);
  }

  return Number(start);
};

const getTimeLeft = (start) => {
  const now = Date.now();
  let elapsed = now - start;

  if (elapsed >= WEEK) {
    const cyclesPassed = Math.floor(elapsed / WEEK);
    const newStart = start + cyclesPassed * WEEK;

    localStorage.setItem(STORAGE_KEY, newStart);

    elapsed = now - newStart;
  }

  const remaining = WEEK - elapsed;

  return {
    days: Math.floor(remaining / (24 * 60 * 60 * 1000)),
    hours: Math.floor((remaining / (60 * 60 * 1000)) % 24),
    minutes: Math.floor((remaining / (60 * 1000)) % 60),
    seconds: Math.floor((remaining / 1000) % 60),
  };
};

export default function Topmahsulot() {
  const { t } = useTranslation();

  const [startTime, setStartTime] = useState(getStartTime());
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(startTime));

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const elapsed = now - startTime;

      if (elapsed >= WEEK) {
        const newStart = Date.now();

        localStorage.setItem(STORAGE_KEY, newStart);
        setStartTime(newStart);
        setTimeLeft(getTimeLeft(newStart));
      } else {
        setTimeLeft(getTimeLeft(startTime));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime]);

  return (
    <div className="top-product">
      <div className="top-product__image">
        <img src={TOP} alt={t("top_product_alt")} />

        <div className="top-product__text">
          <h2>{t("top_product_title")}</h2>

          <p>
            {t("top_product_desc_1")}
            <br />
            {t("top_product_desc_2")}
            <br />
            {t("top_product_desc_3")}
            <br />
            {t("top_product_desc_4")}
            <br />
            {t("top_product_desc_5")}
          </p>

          {/* <div className="Price">
            <del>0,70$</del>
            <mark>0,65$</mark>
            <span className="discount">-7%</span>
          </div> */}

          <div className="top-product__actions">
            <button className="orderTOP">
              <Link to="/boglanish">{t("buy_now")}</Link>
            </button>

            <button className="countdownTOP">
              <div className="countdown-title">
                {t("time_left")}
              </div>

              <div className="countdown-time">
                {timeLeft.days} {t("days")} :{" "}
                {String(timeLeft.hours).padStart(2, "0")} {t("hours")} :{" "}
                {String(timeLeft.minutes).padStart(2, "0")} {t("minutes")} :{" "}
                {String(timeLeft.seconds).padStart(2, "0")} {t("seconds")}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}