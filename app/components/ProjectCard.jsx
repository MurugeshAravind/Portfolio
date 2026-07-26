import { VISUAL_PATTERNS } from "./ProjectVisuals";

export default function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.featured ? "featured" : ""}`}>
      <div className="project-visual" data-id={project.id}>
        {VISUAL_PATTERNS[project.id]}
      </div>

      <div className="project-info">
        <span className="project-tag">{project.tag}</span>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-desc">{project.description}</p>

        {project.impact.length > 0 && (
          <div className="project-impact">
            {project.impact.map((i) => (
              <div key={i.label} className="impact-stat">
                <span className="impact-num">{i.num}</span>
                <span className="impact-label">{i.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className="project-stack">
          {project.stack.map((s) => (
            <span key={s} className="pill pill-sm">
              {s}
            </span>
          ))}
        </div>

        {(project.live || project.repo) && (
          <div className="project-links">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-live"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live demo
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-repo"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View source
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
