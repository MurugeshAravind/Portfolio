import { site } from "../data/site";

/**
 * Where contact lives: the profiles, and deliberately no email address.
 * AGENTS.md forbids raw emails in HTML, and there is no Formspree endpoint
 * configured, so a contact form would post nowhere. A mailto would be the
 * conventional answer and is the one thing that is not available here.
 *
 * The CV download that sat beside these links is gone for now. See the note in
 * data/site.js for why, and for what has to be true before it returns.
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
        </ul>

        <p className="footer-note">{site.name} · Bengaluru, India</p>
      </div>
    </footer>
  );
}
