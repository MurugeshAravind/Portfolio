export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-left">
        <div className="eyebrow animate-in">
          <span className="eyebrow-dot" />
          <span>Open to senior / lead roles</span>
        </div>

        <h1 className="hero-title animate-in delay-1">
          Frontend engineer
          <br />
          who ships <em>at scale.</em>
        </h1>

        <p className="hero-sub animate-in delay-2">
          8 years building banking platforms and React architectures for 50,000+
          users. I turn complex legacy systems into fast, accessible, rigorously
          tested products.
        </p>

        <div className="hero-actions animate-in delay-3">
          <a href="#work" className="btn-primary">
            See my work
          </a>
          <a
            href="/Murugesh_Aravind_CV.pdf"
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="hero-right animate-in delay-2">
        <div className="stat-row">
          {[
            { num: "8+", label: "Years experience" },
            { num: "50k+", label: "Daily users" },
            { num: "40%", label: "Load time cut" },
          ].map((s) => (
            <div key={s.label} className="stat-card">
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="stack-card">
          <span className="stack-label">Core stack</span>
          <div className="stack-pills">
            {[
              "React",
              "TypeScript",
              "Next.js",
              "Redux Toolkit",
              "Zustand",
              "Jest",
              "Playwright",
            ].map((s) => (
              <span key={s} className="pill">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
