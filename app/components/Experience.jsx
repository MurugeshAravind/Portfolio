import { experience } from "../data/experience";

/**
 * Four roles, dated on the left and written as a paragraph on the right.
 *
 * The bullets this replaced (three or four per role, each a fragment starting
 * with a verb) are what made the section read as a resume pasted into a
 * browser. The figures are unchanged; only their packaging is.
 */
export default function Experience() {
  return (
    <section id="experience" className="section" tabIndex={-1}>
      <h2 className="section-label">Experience</h2>

      <ol className="exp-list">
        {experience.map((job) => (
          <li key={job.company} className="exp-item">
            <p className="exp-period">
              {job.period}
              {job.current && <span className="exp-badge">Current</span>}
              <span className="exp-location">{job.location}</span>
            </p>

            <div>
              <h3 className="exp-company">{job.company}</h3>
              <p className="exp-role">
                {job.role}
                {job.via && (
                  <>
                    {" · "}
                    <span className="exp-role-via">Contract via {job.via}</span>
                  </>
                )}
              </p>
              <p className="exp-body">{job.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
