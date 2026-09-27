import Link from "next/link";
import { caseStudy, migration } from "../data/work";
import { genaiHeading, genaiWork } from "../data/genai";
import { labProjects } from "../data/projects";

/**
 * The Work section, written as four blocks of prose rather than as a grid of
 * cards: the current platform, the AI learning work beside it, the migration
 * before it, and the lab projects underneath. Only the first and third were
 * client delivery — the AI block's heading says what it is, and the lab
 * projects are open source rather than client work.
 *
 * The card grid this replaced gave every project the same shape — an abstract
 * SVG visual, a name, a tag, three metric badges, a row of tech pills and two
 * links — which flattened a banking platform, an AI agent, and a mutual-fund
 * tracker into the same tile. Prose lets the three read as the different things
 * they are, and the visual weight now follows significance rather than
 * recency.
 */
export default function Work() {
  const homeLabs = labProjects.filter((project) => project.home);

  return (
    <section id="work" className="section" tabIndex={-1}>
      <h2 className="section-label">Work</h2>

      <article className="case-study">
        <h3 className="case-title">{caseStudy.title}</h3>
        <p className="case-meta">{caseStudy.meta}</p>

        {caseStudy.paragraphs.map((paragraph) => (
          <p key={paragraph} className="prose">
            {paragraph}
          </p>
        ))}

        <blockquote className="pull-quote">
          <p>{caseStudy.quote.text}</p>
          <cite>{caseStudy.quote.attribution}</cite>
        </blockquote>

        <p className="case-note">{caseStudy.note}</p>
      </article>

      {/* id kept: this block used to be its own section, and an inbound link to
          #genai should still land somewhere sensible. */}
      <div className="genai" id="genai">
        <h3 className="genai-intro">{genaiHeading}</h3>
        <div className="genai-list">
          {genaiWork.map((item) => (
            <article key={item.title} className="genai-item">
              <h4 className="genai-title">{item.title}</h4>
              <p className="genai-body">{item.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="migration">
        <h3 className="migration-title">{migration.title}</h3>
        <p className="migration-meta">
          {migration.subtitle}, {migration.meta}
        </p>
        <p className="prose">{migration.body}</p>
      </div>

      <div className="lab">
        <h3 className="section-title">Lab projects</h3>
        <div className="lab-grid">
          {homeLabs.map((project) => (
            <article key={project.id}>
              <h4 className="lab-name">{project.name}</h4>
              <p className="lab-kicker">{project.kicker}</p>
              <p className="lab-desc">{project.description}</p>
              <p className="lab-stack">{project.stack}</p>
              <div className="lab-links">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live site
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        <p className="section-foot">
          <Link href="/lab">All lab projects →</Link>
        </p>
      </div>
    </section>
  );
}
