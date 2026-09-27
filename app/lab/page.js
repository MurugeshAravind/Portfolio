import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { labProjects } from "../data/projects";

export const metadata = {
  title: "Lab — Murugesh Aravind",
  description:
    "Open-source projects and experiments: a leave-impact analytics tool, a defensive AI email agent, a mutual fund tracker, and a multiplayer game on AWS.",
  alternates: { canonical: "https://aravind.is-a.dev/lab" },
};

/**
 * All four lab projects. The homepage shows the two strongest and links here —
 * a full grid on the landing page diluted the work that actually matters.
 */
export default function LabPage() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main" tabIndex={-1}>
        <div className="subpage">
          <h1 className="subpage-title">Lab</h1>
          <p className="subpage-intro">
            Things built for their own sake — open source, mostly, and mostly to
            work through a problem I had not solved before. The day job is on
            the homepage.
          </p>

          <div className="lab-grid">
            {labProjects.map((project) => (
              <article key={project.id}>
                <h2 className="lab-name">{project.name}</h2>
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
        </div>
      </main>
      <Footer />
    </>
  );
}
