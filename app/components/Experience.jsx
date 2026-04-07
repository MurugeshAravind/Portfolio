import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-header">
        <span className="section-num">02</span>
        <h2>Experience</h2>
      </div>
      <ol className="exp-list">
        {experience.map((job, index) => (
          <li key={job.company} className={`exp-item ${index === 0 ? "exp-item--current" : ""}`}>
            <div className="exp-period">
              {job.period}
              {index === 0 && <span className="exp-badge">Current</span>}
            </div>
            <div>
              <h3 className="exp-company">{job.company}</h3>
              <p className="exp-role">{job.role}</p>
              <ul className="exp-bullets">
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
