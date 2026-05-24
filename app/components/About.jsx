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
            I’m a Senior Frontend Engineer based in Chennai with 8+ years of experience modernizing legacy architectures, improving performance, and shipping changes safely at scale. My work sits at the intersection of frontend engineering, system design, and operational reliability.
          </p>

          <h3 className="about-subheading">Over the years, I’ve helped deliver:</h3>
          <ul className="about-list">
            <li className="about-list-item">50,000+ user platforms supporting enterprise workflows</li>
            <li className="about-list-item">40% load time improvements through performance optimization</li>
            <li className="about-list-item">85%+ test coverage as a quality baseline, not a milestone</li>
            <li className="about-list-item">Large-scale migrations completed with zero rollbacks</li>
          </ul>

          <h3 className="about-subheading">I’m drawn to difficult problems:</h3>
          <ul className="about-list">
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
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/murugesh-aravind-0ab64847"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
