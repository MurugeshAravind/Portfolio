import { certifications } from "../data/certifications";

function CertIcon({ type }) {
  if (type === "aws") {
    return (
      <svg
        className="cert-icon"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6.5 17C3.5 15.5 2 12.5 2 9.5 2 5.36 5.36 2 9.5 2c2.5 0 4.7 1.2 6 3.1A7.5 7.5 0 0 1 22 12c0 3-1.8 5.6-4.4 6.8" />
        <path d="M12 12v6" />
        <path d="M9 15l3 3 3-3" />
      </svg>
    );
  }
  if (type === "github") {
    return (
      <svg
        className="cert-icon"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    );
  }
  // cognizant / default — award/certificate icon
  return (
    <svg
      className="cert-icon"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 15l-3 3v-4.5M12 15l3 3v-4.5M12 15V9" />
      <circle cx="12" cy="9" r="6" />
      <path d="M9.5 8.5l1.5 1.5 3-3" />
    </svg>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="section certs-section">
      <div className="section-header">
        <span className="section-num">03</span>
        <h2>Certifications</h2>
      </div>
      <div className="certs-grid">
        {certifications.map((cert) => (
          <a
            key={cert.name}
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card"
          >
            <CertIcon type={cert.icon} />
            <div className="cert-info">
              <span className="cert-name">{cert.name}</span>
              <span className="cert-issuer">{cert.issuer}</span>
              <span className="cert-dates">
                Issued {cert.issuedDate}
                {cert.expiryDate ? ` · Expires ${cert.expiryDate}` : ""}
              </span>
              {cert.skills.length > 0 && (
                <div className="cert-skills">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="pill pill-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
