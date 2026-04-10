const VISUAL_PATTERNS = {
  "open-account": (
    <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
      {/* Shield / secure banking motif */}
      <rect x="160" y="40" width="80" height="100" rx="4" stroke="rgba(200,245,69,0.25)" strokeWidth="1.5" fill="none" />
      <path d="M200 55 L230 70 L230 110 Q230 130 200 140 Q170 130 170 110 L170 70 Z" stroke="rgba(200,245,69,0.35)" strokeWidth="1" fill="rgba(200,245,69,0.04)" />
      <path d="M190 100 L197 107 L212 90" stroke="rgba(200,245,69,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="60" y1="80" x2="140" y2="80" stroke="rgba(200,245,69,0.1)" strokeWidth="1" />
      <line x1="60" y1="95" x2="130" y2="95" stroke="rgba(200,245,69,0.07)" strokeWidth="1" />
      <line x1="60" y1="110" x2="120" y2="110" stroke="rgba(200,245,69,0.05)" strokeWidth="1" />
      <line x1="260" y1="80" x2="340" y2="80" stroke="rgba(200,245,69,0.1)" strokeWidth="1" />
      <line x1="270" y1="95" x2="340" y2="95" stroke="rgba(200,245,69,0.07)" strokeWidth="1" />
      <line x1="280" y1="110" x2="340" y2="110" stroke="rgba(200,245,69,0.05)" strokeWidth="1" />
    </svg>
  ),
  "angular-react-migration": (
    <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
      {/* Angular to React transformation */}
      <polygon points="120,130 150,60 180,130" stroke="rgba(255,100,100,0.3)" strokeWidth="1.5" fill="rgba(255,100,100,0.04)" />
      <line x1="130" y1="115" x2="170" y2="115" stroke="rgba(255,100,100,0.2)" strokeWidth="1" />
      <path d="M195 95 L220 95" stroke="rgba(200,245,69,0.3)" strokeWidth="1.5" strokeLinecap="round" markerEnd="" />
      <polygon points="218 90 228 95 218 100" fill="rgba(200,245,69,0.3)" />
      <circle cx="280" cy="95" r="28" stroke="rgba(59,130,246,0.35)" strokeWidth="1.5" fill="rgba(59,130,246,0.04)" />
      <ellipse cx="280" cy="95" rx="45" ry="16" stroke="rgba(59,130,246,0.15)" strokeWidth="1" fill="none" />
      <ellipse cx="280" cy="95" rx="16" ry="45" stroke="rgba(59,130,246,0.15)" strokeWidth="1" fill="none" />
      <circle cx="280" cy="95" r="5" fill="rgba(59,130,246,0.3)" />
    </svg>
  ),
  "tic-tac-toe": (
    <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
      {/* Tic-tac-toe grid with X and O */}
      <line x1="167" y1="50" x2="167" y2="150" stroke="rgba(59,130,246,0.2)" strokeWidth="1.5" />
      <line x1="233" y1="50" x2="233" y2="150" stroke="rgba(59,130,246,0.2)" strokeWidth="1.5" />
      <line x1="130" y1="83" x2="270" y2="83" stroke="rgba(59,130,246,0.2)" strokeWidth="1.5" />
      <line x1="130" y1="117" x2="270" y2="117" stroke="rgba(59,130,246,0.2)" strokeWidth="1.5" />
      <line x1="140" y1="58" x2="158" y2="76" stroke="rgba(200,245,69,0.4)" strokeWidth="2" strokeLinecap="round" />
      <line x1="158" y1="58" x2="140" y2="76" stroke="rgba(200,245,69,0.4)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="200" cy="67" r="11" stroke="rgba(200,245,69,0.4)" strokeWidth="2" fill="none" />
      <line x1="242" y1="91" x2="260" y2="109" stroke="rgba(200,245,69,0.4)" strokeWidth="2" strokeLinecap="round" />
      <line x1="260" y1="91" x2="242" y2="109" stroke="rgba(200,245,69,0.4)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="149" cy="133" r="11" stroke="rgba(200,245,69,0.3)" strokeWidth="1.5" fill="none" />
    </svg>
  ),
  fundscope: (
    <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
      {/* Chart / fund tracker motif */}
      <rect x="100" y="50" width="200" height="110" rx="6" stroke="rgba(200,245,69,0.15)" strokeWidth="1" fill="rgba(200,245,69,0.02)" />
      <polyline points="120,130 155,110 185,120 215,85 250,95 280,65" stroke="rgba(16,185,129,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <polyline points="120,130 155,120 185,125 215,105 250,110 280,90" stroke="rgba(59,130,246,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="4 3" />
      <circle cx="215" cy="85" r="4" fill="rgba(16,185,129,0.5)" />
      <circle cx="280" cy="65" r="4" fill="rgba(16,185,129,0.6)" />
      <line x1="120" y1="140" x2="280" y2="140" stroke="rgba(200,245,69,0.1)" strokeWidth="1" />
      <line x1="120" y1="50" x2="120" y2="140" stroke="rgba(200,245,69,0.08)" strokeWidth="1" />
      <text x="130" y="70" fill="rgba(200,245,69,0.2)" fontSize="10" fontFamily="monospace">NAV</text>
    </svg>
  ),
  portfolio: (
    <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
      {/* Code/terminal motif */}
      <rect x="120" y="45" width="160" height="110" rx="6" stroke="rgba(200,245,69,0.2)" strokeWidth="1" fill="rgba(200,245,69,0.02)" />
      <line x1="120" y1="65" x2="280" y2="65" stroke="rgba(200,245,69,0.15)" strokeWidth="1" />
      <circle cx="133" cy="55" r="3" fill="rgba(255,100,100,0.3)" />
      <circle cx="143" cy="55" r="3" fill="rgba(255,200,50,0.3)" />
      <circle cx="153" cy="55" r="3" fill="rgba(100,200,100,0.3)" />
      <path d="M140 85 L155 95 L140 105" stroke="rgba(200,245,69,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="163" y1="90" x2="220" y2="90" stroke="rgba(200,245,69,0.15)" strokeWidth="1" strokeLinecap="round" />
      <line x1="163" y1="100" x2="200" y2="100" stroke="rgba(200,245,69,0.1)" strokeWidth="1" strokeLinecap="round" />
      <line x1="148" y1="115" x2="230" y2="115" stroke="rgba(59,130,246,0.12)" strokeWidth="1" strokeLinecap="round" />
      <line x1="148" y1="125" x2="195" y2="125" stroke="rgba(59,130,246,0.08)" strokeWidth="1" strokeLinecap="round" />
      <line x1="148" y1="135" x2="210" y2="135" stroke="rgba(200,245,69,0.08)" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
};

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
