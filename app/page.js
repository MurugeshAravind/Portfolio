"use client";

import { useEffect, useState } from "react";
import { DATA } from "./data";

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="relative">
      {/* Mouse Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      {/* Mobile Navigation - Fixed at Top */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/60 dark:bg-neutral-950/60 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-800/50 shadow-sm" aria-label="In-page jump links">
        <ul className="flex gap-6 justify-center py-4 px-6">
          {['About', 'Experience', 'Projects'].map((item) => (
            <li key={item}>
              <a className="group flex items-center" href={`#${item.toLowerCase()}`}>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  {item}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">

          {/* LEFT COLUMN: Header / Nav */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
                <a href="/">{DATA.name}</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-xl">
                {DATA.title}
              </h2>


              <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                <li className="mr-5 text-xs">
                  <span className="text-neutral-500">{DATA.location}</span>
                </li>
                {/* Add social icons here if available in DATA, for now just text */}
                <li className="mr-5 text-xs">
                  <a href={`mailto:${DATA.email}`} className="text-neutral-500 hover:text-teal-300">{DATA.email}</a>
                </li>
              </ul>

              {/* Desktop Navigation - Vertical with indicators */}
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  {['About', 'Experience', 'Projects'].map((item) => (
                    <li key={item}>
                      <a className="group flex items-center py-3" href={`#${item.toLowerCase()}`}>
                        <span className="nav-indicator mr-4 h-px w-8 bg-neutral-400 dark:bg-neutral-600 transition-all group-hover:w-16 group-hover:bg-neutral-900 dark:group-hover:bg-neutral-200 group-focus-visible:w-16 group-focus-visible:bg-neutral-900 dark:group-focus-visible:bg-neutral-200 motion-reduce:transition-none"></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-200 group-focus-visible:text-neutral-900 dark:group-focus-visible:text-neutral-200">
                          {item}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </header>

          {/* RIGHT COLUMN: Content */}
          <main id="content" className="pt-20 lg:pt-24 lg:w-1/2 lg:py-24">

            {/* ABOUT */}
            <section id="about" className="mb-16 scroll-mt-20 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-labelledby="about-heading">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/75 dark:bg-neutral-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                <h2 id="about-heading" className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-100">About</h2>
              </div>
              <div>
                <p className="mb-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {DATA.about}
                </p>
              </div>
            </section>

            {/* EXPERIENCE */}
            <section id="experience" className="mb-16 scroll-mt-20 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-labelledby="experience-heading">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/75 dark:bg-neutral-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                <h2 id="experience-heading" className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-100">Experience</h2>
              </div>
              <div>
                <ol className="group/list">
                  {DATA.experience.map((job, index) => (
                    <li key={index} className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-75">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-100 dark:lg:group-hover:bg-neutral-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-neutral-500 sm:col-span-2" aria-label={job.period}>
                          {job.period}
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-neutral-900 dark:text-neutral-100">
                            <div>
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>{job.role} · <span className="inline-block text-teal-600 dark:text-teal-300 group-hover:text-teal-700 dark:group-hover:text-teal-200 transition-colors">{job.company}</span></span>
                            </div>
                          </h3>
                          <ul className="mt-2 text-sm leading-normal text-neutral-600 dark:text-neutral-400 list-disc list-outside ml-4 space-y-2">
                            {job.description.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" className="mb-16 scroll-mt-20 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-labelledby="projects-heading">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/75 dark:bg-neutral-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                <h2 id="projects-heading" className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-100">Projects</h2>
              </div>
              <div>
                <ul className="group/list">
                  {DATA.projects.map((project, index) => (
                    <li key={index} className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-75">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-100 dark:lg:group-hover:bg-neutral-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <div className="z-10 sm:col-span-8">
                          <h3 className="font-medium leading-snug text-neutral-900 dark:text-neutral-100">
                            <a href={project.link && project.link !== "#" ? project.link : undefined} target="_blank" rel="noreferrer" className="inline-flex items-baseline font-medium leading-tight text-neutral-900 dark:text-neutral-100 hover:text-teal-600 dark:hover:text-teal-300 focus-visible:text-teal-600 dark:focus-visible:text-teal-300 group/link text-base">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>{project.name}</span>
                            </a>
                          </h3>
                          <p className="mt-2 text-sm leading-normal text-neutral-600 dark:text-neutral-400">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* SKILLS AS FOOTER/SECTION */}
            <section id="skills" className="mb-16 scroll-mt-20 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-labelledby="skills-heading">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/75 dark:bg-neutral-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                <h2 id="skills-heading" className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-100">Tech Stack</h2>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {DATA.skills.map((skill, index) => (
                  <span key={index} className="flex items-center rounded-full bg-teal-100 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-800 dark:text-teal-300">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <footer className="max-w-md pb-16 text-sm text-neutral-500 sm:pb-0">
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}