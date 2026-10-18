import Image from "next/image";
import profileImg from "../../profile.webp";
import { aboutParagraphs } from "../data/about";

/**
 * Prose only — no subheadings, no bullet lists, no "principles" cards. See the
 * note in data/about.js for why.
 *
 * Outbound links live in the footer (app/components/Footer.jsx); keeping them out
 * of this section leaves the About story to finish on its own terms and avoids
 * duplicate profile links stacked right above the footer rule.
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
        </div>
      </div>
    </section>
  );
}

