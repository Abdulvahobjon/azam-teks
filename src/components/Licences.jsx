
import "./Licences.css";

import ISO1 from "../assets/licences/LLC AZAM TEKS SAVDO SERVIS14.pdf";
import ISO2 from "../assets/licences/LLC AZAM TEKS SAVDO SERVIS45.pdf";
import ISO3 from "../assets/licences/LLC AZAM TEKS SAVDO SERVIS91.pdf";

const certificates = [
  {
    id: "01",
    title: "ISO sertifikati",
    subtitle: "ISO Certification",
    file: ISO1,
    label: "ISO 01",
  },
  {
    id: "02",
    title: "ISO sertifikati",
    subtitle: "ISO Certification",
    file: ISO2,
    label: "ISO 02",
  },
  {
    id: "03",
    title: "ISO sertifikati",
    subtitle: "ISO Certification",
    file: ISO3,
    label: "ISO 03",
  },
];

export default function Licences() {
  return (
    <section className="licences-section" id="licences">
      <div className="licences-container">
        <div className="licences-header">
          <div className="licences-heading">

            <h2>
              Sifat va ishonch
              <br />
              <span>sertifikatlarimizda.</span>
            </h2>

            <p className="licences-description">
              Biz faoliyatimiz va mahsulotlarimiz sifatiga alohida
              e’tibor beramiz. Quyida kompaniyamiz sertifikatlari
              bilan tanishishingiz mumkin.
            </p>
          </div>
        </div>

        <div className="licences-grid">
          {certificates.map((certificate) => (
            <article className="licence-card" key={certificate.id}>
              <div className="licence-card-top">
                <span className="licence-number">{certificate.id}</span>
                <span className="licence-file-type">PDF DOCUMENT</span>
              </div>

              <div className="licence-preview">
                <div className="licence-preview-glow" />

                <div className="licence-document">
                  <div className="licence-document-top">
                    <span className="licence-document-logo">
                      AZAM <b>TEKS</b>
                    </span>
                    <span className="licence-document-mark">✓</span>
                  </div>

                  <div className="licence-document-lines">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="licence-document-center">
                    <span className="licence-document-caption">
                      CERTIFICATE
                    </span>
                    <strong>ISO</strong>
                    <span className="licence-document-rule" />
                    <span className="licence-document-small">
                      QUALITY & TRUST
                    </span>
                  </div>

                  <div className="licence-document-footer">
                    <span>AZAM TEKS</span>
                    <span>{certificate.label}</span>
                  </div>
                </div>

                <span className="licence-preview-badge">
                  <span className="licence-status-dot" />
                  Rasmiy hujjat
                </span>
              </div>

              <div className="licence-card-content">
                <div>
                  <h3>{certificate.title}</h3>
                  <p>{certificate.subtitle}</p>
                </div>

                <a
                  className="licence-view-button"
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${certificate.title}ni ko'rish`}
                >
                  <span>Ko‘rish</span>
                  <span className="licence-view-icon">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="licences-bottom">
          <span className="licences-bottom-line" />
          <p>ISHONCH — SOFLIK VA NAFISLIK</p>
          <span className="licences-bottom-line" />
        </div>
      </div>
    </section>
  );
}
