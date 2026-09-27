import Image from "next/image";

/**
 * A list of credentials, shared by the homepage (the three featured) and
 * /credentials (all of them), so the two can't drift apart.
 *
 * The issuer and the issue/expiry dates sit on one mono line instead of three
 * stacked ones, and the skills are a single line of text rather than a row of
 * pills. AGENTS.md §4 puts stack evidence inside project rows and forbids a
 * stand-alone skill cloud — a pill per skill inside every credential was that
 * cloud, distributed.
 */
const BRAND_ICONS = {
  "google-cloud": { src: "/cert-icons/google-cloud-icon.webp" },
  anthropic: { src: "/cert-icons/claude-ai-icon.webp" },
  cognizant: { src: "/cert-icons/CTSH.svg" },
  aws: { src: "/cert-icons/aws-icon.webp" },
  // GitHub and OpenAI ship white-on-transparent. On the dark theme this site
  // used to have they needed nothing; on paper they would be invisible, so
  // they get flattened to ink. The other five carry their own colour.
  github: { src: "/cert-icons/github.svg", invert: true },
  openai: { src: "/cert-icons/openai.svg", invert: true },
  oracle: { src: "/cert-icons/oracle.svg" },
};

function CertIcon({ cert }) {
  const brand = BRAND_ICONS[cert.icon];
  if (!brand) return null;

  return (
    <Image
      src={brand.src}
      alt=""
      width={24}
      height={24}
      className={brand.invert ? "cert-icon cert-icon-invert" : "cert-icon"}
    />
  );
}

export default function CertList({ items }) {
  return (
    <ul className="certs-list">
      {items.map((cert) => {
        const body = (
          <>
            <CertIcon cert={cert} />
            <span className="cert-info">
              <span className="cert-name">{cert.name}</span>
              <span className="cert-dates">
                {cert.issuer} · Issued {cert.issuedDate}
                {cert.expiryDate ? ` · Expires ${cert.expiryDate}` : ""}
              </span>
              {cert.skills.length > 0 && (
                <span className="cert-tech">{cert.skills.join(" · ")}</span>
              )}
            </span>
          </>
        );

        // Credentials with no public badge URL render unlinked rather than as
        // a link that goes nowhere.
        return (
          <li key={cert.name}>
            {cert.credentialUrl ? (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-row"
              >
                {body}
              </a>
            ) : (
              <div className="cert-row">{body}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
