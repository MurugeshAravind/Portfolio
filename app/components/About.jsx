import { aboutParagraphs } from "../data/about";

/**
 * Prose only — no subheadings, no bullet lists, no "principles" cards. See the
 * note in data/about.js for why.
 *
 * The portrait moved to the hero. Keeping it here as well made the same square
 * photograph the dominant object in two sections, and the About story reads
 * better as a continuous column than as a caption beside a thumbnail.
 *
 * Outbound links live in the footer (app/components/Footer.jsx); keeping them out
 * of this section leaves the About story to finish on its own terms and avoids
 * duplicate profile links stacked right above the footer rule.
 */
export default function About() {
  return (
    <section id="about" className="section" tabIndex={-1}>
      <h2 className="section-label">About</h2>

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
    </section>
  );
}
