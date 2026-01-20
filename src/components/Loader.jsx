import React, { useEffect, useState } from "react";
import "./Loader.css";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Haqiqiy page load event
    const handleLoad = () => setLoading(false);

    // Agar sahifa allaqachon yuklangan bo‘lsa
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-overlay">
      <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <p className="loader-text">AZAM TEKS</p>
    </div>
  );
}
