import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const work = projects.filter((p) => !p.lab);
  const labs = projects.filter((p) => p.lab);

  return (
    <section id="work" className="section">
      <div className="section-header">
        <span className="section-num">01</span>
        <h2>Work</h2>
      </div>
      <div className="projects-grid">
        {work.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {labs.length > 0 && (
        <>
          <div className="section-header labs-header">
            <h3>Labs</h3>
          </div>
          <div className="projects-grid labs-grid">
            {labs.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
