import { site } from "../data/site";

/**
 * Where contact lives. Profiles and the CV, and deliberately no email address:
 * AGENTS.md forbids raw emails in HTML, and there is no Formspree endpoint
 * configured, so a contact form would post nowhere. A mailto would be the
 * conventional answer and is the one thing that is not available here.
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <ul className="footer-links">
          {site.links.map(({ label, href }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href={site.cvPath} download={site.cvFileName}>
              Download CV (PDF)
            </a>
          </li>
        </ul>

        <p className="footer-note">{site.name} · Bengaluru, India</p>
      </div>
    </footer>
  );
}
