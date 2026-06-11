import Image from "next/image";
import { certifications } from "../data/certifications";

const BRAND_ICONS = {
  "google-cloud": {
    src: "/cert-icons/google-cloud-icon.webp",
    className: "cert-logo cert-logo-gcp",
  },
  anthropic: {
    src: "/cert-icons/claude-ai-icon.webp",
    className: "cert-logo cert-logo-claude",
  },
  cognizant: {
    src: "/cert-icons/CTSH.svg",
    className: "cert-logo cert-logo-cognizant",
  },
  aws: {
    src: "/cert-icons/aws-icon.webp",
    className: "cert-logo cert-logo-aws",
  },
  github: {
    src: "/cert-icons/github.svg",
    className: "cert-logo cert-logo-github",
  },
};

function CertIcon({ cert }) {
  const brandIcon = BRAND_ICONS[cert.icon];

  if (brandIcon) {
    return (
      <span className="cert-icon-frame">
        <Image
          src={brandIcon.src}
          alt={`${cert.issuer} logo`}
          width={32}
          height={32}
          className={brandIcon.className}
        />
      </span>
    );
  }

  return (
    <span className="cert-icon-frame">
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
    </span>
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
            <CertIcon cert={cert} />
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
