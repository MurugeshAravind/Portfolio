const VISUAL_PATTERNS = {
  "open-account": (
    <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
      <defs>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="var(--accent2)" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <line x1="50" y1="50" x2="350" y2="50" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
      <line x1="50" y1="100" x2="350" y2="100" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
      <line x1="50" y1="150" x2="350" y2="150" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
      <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
      <line x1="200" y1="20" x2="200" y2="180" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
      <line x1="300" y1="20" x2="300" y2="180" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
      
      <rect x="160" y="40" width="80" height="100" rx="6" stroke="var(--accent)" strokeOpacity="0.15" strokeWidth="1" fill="none" />
      <path d="M200 55 L230 70 L230 110 Q230 130 200 140 Q170 130 170 110 L170 70 Z" stroke="var(--accent)" strokeWidth="1.5" fill="url(#shieldGrad)" className="svg-draw" />
      <path d="M190 100 L197 107 L212 90" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      
      <circle cx="200" cy="97" r="45" stroke="var(--accent2)" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.3" />
    </svg>
  ),
  "angular-react-migration": (
    <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
      <defs>
        <linearGradient id="reactGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--accent2)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <line x1="50" y1="50" x2="350" y2="50" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
      <line x1="50" y1="100" x2="350" y2="100" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
      <line x1="50" y1="150" x2="350" y2="150" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
      
      <path d="M100 60 L130 70 L125 130 L100 145 L75 130 L70 70 Z" stroke="rgba(239, 68, 68, 0.2)" strokeWidth="1.5" fill="none" />
      <polygon points="100,75 120,125 110,125 100,100 90,125 80,125" stroke="rgba(239, 68, 68, 0.15)" fill="none" />
      
      <path d="M160 100 L200 100" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 2" strokeLinecap="round" className="svg-draw" />
      <polygon points="198,95 208,100 198,105" fill="var(--accent)" />
      
      <g className="react-logo-group">
        <circle cx="280" cy="100" r="12" fill="url(#reactGrad)" />
        <ellipse cx="280" cy="100" rx="45" ry="16" stroke="var(--accent2)" strokeWidth="1.5" strokeOpacity="0.6" fill="none" transform="rotate(30 280 100)" />
        <ellipse cx="280" cy="100" rx="45" ry="16" stroke="var(--accent2)" strokeWidth="1.5" strokeOpacity="0.6" fill="none" transform="rotate(90 280 100)" />
        <ellipse cx="280" cy="100" rx="45" ry="16" stroke="var(--accent2)" strokeWidth="1.5" strokeOpacity="0.6" fill="none" transform="rotate(150 280 100)" />
      </g>
    </svg>
  ),
  "tic-tac-toe": (
    <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
      <defs>
        <linearGradient id="gameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--accent2)" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <line x1="50" y1="50" x2="350" y2="50" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
      <line x1="50" y1="100" x2="350" y2="100" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
      <line x1="50" y1="150" x2="350" y2="150" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
      
      <rect x="130" y="40" width="140" height="120" rx="6" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="url(#gameGrad)" className="svg-draw" />
      <line x1="176" y1="40" x2="176" y2="160" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
      <line x1="224" y1="40" x2="224" y2="160" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
      <line x1="130" y1="80" x2="270" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
      <line x1="130" y1="120" x2="270" y2="120" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
      
      <line x1="145" y1="52" x2="161" y2="68" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="161" y1="52" x2="145" y2="68" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      
      <circle cx="200" cy="60" r="10" stroke="var(--accent2)" strokeWidth="2" fill="none" />
      
      <line x1="242" y1="92" x2="253" y2="108" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="260" y1="92" x2="242" y2="108" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      
      <circle cx="153" cy="140" r="10" stroke="var(--accent2)" strokeWidth="2" fill="none" />
      <circle cx="200" cy="100" r="10" stroke="var(--accent2)" strokeWidth="2" strokeOpacity="0.3" fill="none" />
    </svg>
  ),
  fundscope: (
    <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
      <defs>
        <linearGradient id="fundGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--accent2)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="50" y1="50" x2="350" y2="50" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
      <line x1="50" y1="100" x2="350" y2="100" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
      <line x1="50" y1="150" x2="350" y2="150" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
      
      <rect x="90" y="40" width="220" height="120" rx="6" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
      
      <path d="M110 140 L135 115 L165 125 L195 90 L230 100 L265 65 L290 55 L290 140 Z" fill="url(#fundGrad)" />
      
      <path d="M110 140 L135 115 L165 125 L195 90 L230 100 L265 65 L290 55" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" className="svg-draw" />
      
      <line x1="110" y1="140" x2="290" y2="140" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
      
      <circle cx="290" cy="55" r="4" fill="var(--accent)" />
      <circle cx="195" cy="90" r="3" fill="var(--accent2)" />
    </svg>
  ),
  portfolio: (
    <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
      <defs>
        <linearGradient id="portGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--accent2)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <line x1="50" y1="50" x2="350" y2="50" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
      <line x1="50" y1="100" x2="350" y2="100" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
      <line x1="50" y1="150" x2="350" y2="150" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
      
      <rect x="110" y="40" width="180" height="120" rx="8" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" fill="url(#portGrad)" className="svg-draw" />
      <line x1="110" y1="65" x2="290" y2="65" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      
      <circle cx="125" cy="52" r="3.5" fill="rgba(239, 68, 68, 0.4)" />
      <circle cx="137" cy="52" r="3.5" fill="rgba(245, 158, 11, 0.4)" />
      <circle cx="149" cy="52" r="3.5" fill="rgba(16, 185, 129, 0.4)" />
      
      <path d="M130 85 L142 93 L130 101" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" className="svg-draw" />
      <line x1="152" y1="93" x2="210" y2="93" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
      
      <rect x="130" y="115" width="130" height="6" rx="3" fill="rgba(255, 255, 255, 0.15)" />
      <rect x="130" y="127" width="100" height="6" rx="3" fill="rgba(255, 255, 255, 0.1)" />
      <rect x="130" y="139" width="115" height="6" rx="3" fill="var(--accent2)" fillOpacity="0.3" />
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
