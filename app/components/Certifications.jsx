export default function Certifications() {
  const certs = [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      status: "Certified",
    },
    {
      name: "AWS DVA-C02",
      issuer: "Amazon Web Services",
      status: "In progress",
    },
  ];

  return (
    <section className="section certs-section">
      <div className="section-header">
        <span className="section-num">03</span>
        <h2>Certifications</h2>
      </div>
      <div className="certs-grid">
        {certs.map((cert) => (
          <div key={cert.name} className="cert-card">
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
            <div className="cert-info">
              <span className="cert-name">{cert.name}</span>
              <span className="cert-issuer">{cert.issuer}</span>
            </div>
            <span
              className={`cert-badge ${cert.status === "In progress" ? "cert-badge--pending" : ""}`}
            >
              {cert.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
