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
              width={320}
              height={427}
              className="about-photo"
              sizes="(max-width: 1024px) 240px, 320px"
            />
          </div>
        </div>

        <div className="about-content">
          <p className="about-text">
            I&apos;m a Senior Frontend Engineer based in India, with 8
            years building banking and enterprise platforms where performance,
            security, and accessibility are non-negotiable. My strength is taking
            tangled legacy codebases and making them fast, tested, and
            maintainable — without burning the team in the process.
          </p>

          <p className="about-text">
            Outside of client work I&apos;m exploring the full stack through AWS
            projects and open-source contributions. My default is:
            write the test first, ship behind a feature flag, and never
            let a migration touch production without a rollback plan.
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
