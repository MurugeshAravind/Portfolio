import Image from "next/image";
import profileImg from "../../profile.webp";
import { aboutParagraphs } from "../data/about";
import { site } from "../data/site";

/**
 * Prose only — no subheadings, no bullet lists, no "principles" cards. See the
 * note in data/about.js for why.
 *
 * The profile links come from data/site.js rather than being written into the
 * JSX: AGENTS.md §2 puts links in app/data/, and the same hrefs were previously
 * hardcoded here, in Nav.jsx, and in layout.js.
 */
export default function About() {
  return (
    <section id="about" className="section" tabIndex={-1}>
      <h2 className="section-label">About</h2>

      <div className="about-grid">
        <div className="about-photo-wrap">
          <Image
            src={profileImg}
            alt="Murugesh Aravind"
            width={240}
            height={240}
            className="about-photo"
          />
        </div>

        <div className="about-content">
          {aboutParagraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={index === 0 ? "about-lead" : "about-text"}
            >
              {paragraph}
            </p>
          ))}

          <div className="about-links">
            {site.links.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
