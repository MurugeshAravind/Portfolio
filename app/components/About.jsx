import Image from "next/image";
import profileImg from "../../profile.webp";


export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <span className="section-num">04</span>
        <h2>About</h2>
      </div>

      <div className="about-grid">
        <div className="about-photo-col">
          <div className="about-photo-wrap">
            <Image
              src={profileImg}
              alt="Murugesh Aravind"
              width={240}
              height={240}
              className="about-photo"
            />
          </div>
        </div>

        <div className="about-content">
          <p className="about-lead">
            I build frontend systems for environments where failure is expensive — banking platforms, enterprise products, and large-scale applications where performance, security, and reliability are non-negotiable.
          </p>

          <p className="about-text">
            I’m a Senior Frontend Engineer based in Bangalore with 8+ years of experience modernizing legacy architectures, improving performance, and shipping changes safely at scale. My work sits at the intersection of frontend engineering, system design, and operational reliability.
          </p>

          <h3 className="about-subheading">Over the years, I’ve helped deliver:</h3>
          <ul className="about-list" role="list">
            <li className="about-list-item">50,000+ user platforms supporting enterprise workflows</li>
            <li className="about-list-item">40% load time improvements through performance optimization</li>
            <li className="about-list-item">85%+ test coverage as a quality baseline, not a milestone</li>
            <li className="about-list-item">Large-scale migrations completed with zero rollbacks</li>
          </ul>

          <h3 className="about-subheading">I’m drawn to difficult problems:</h3>
          <ul className="about-list" role="list">
            <li className="about-list-item">Turning tangled legacy codebases into maintainable React architectures.</li>
            <li className="about-list-item">Improving systems without disrupting teams.</li>
            <li className="about-list-item">Shipping faster without compromising stability.</li>
          </ul>

          <h3 className="about-subheading">My engineering principles:</h3>
          <div className="about-principles">
            <div className="about-principle-item">
              <h4 className="about-principle-title">Test-First by Default</h4>
              <p className="about-principle-desc">
                Testing is part of the development loop — not a cleanup task before release.
              </p>
            </div>
            <div className="about-principle-item">
              <h4 className="about-principle-title">Design for Failure</h4>
              <p className="about-principle-desc">
                Feature flags, rollback paths, and incremental delivery aren’t optional when systems matter.
              </p>
            </div>
            <div className="about-principle-item">
              <h4 className="about-principle-title">Build for the Next Engineer</h4>
              <p className="about-principle-desc">
                Clean code matters, but maintainable systems matter more. I optimize for clarity, sustainability, and long-term ownership.
              </p>
            </div>
          </div>

          <p className="about-text">
            Outside enterprise work, I’m exploring cloud and AI-powered systems, combining modern frontend engineering with intelligent workflows and deterministic reliability.
          </p>

          <p className="about-text">
            I’m interested in building products where frontend isn’t treated as UI implementation — but as architecture, performance, and user impact.
          </p>

          <div className="about-links">
            <a
              href="https://github.com/MurugeshAravind"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="about-link-icon">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/murugesh-aravind-0ab64847"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="about-link-icon">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
