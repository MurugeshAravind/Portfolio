import Image from "next/image";
import { DATA } from "./data";
import avatarImg from "../profile.jpg";
import LazySpotlight from "./components/lazy-spotlight";
import { MobileNav, DesktopNav } from "./components/nav-links";

export default function HomePage() {
  return (
    <div className="relative">
      {/* Mouse Spotlight — client component, smoothed via rAF lerp */}
      <LazySpotlight />

      {/* Mobile Navigation - Client component for active state */}
      <MobileNav />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 pt-16 font-sans md:px-20 md:py-20 md:pt-24 lg:px-24 lg:py-0 lg:pt-0">
        <div className="lg:flex lg:justify-between lg:gap-24 2xl:justify-center 2xl:gap-48">

          {/* LEFT COLUMN: Header / Nav */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[40%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              <div className="animate-fade-up animate-fade-up-1 mb-6">
                <Image
                  src={avatarImg}
                  alt={DATA.name}
                  width={96}
                  height={96}
                  className="rounded-full ring-2 ring-teal-500/30 dark:ring-teal-400/30 ring-offset-2 ring-offset-white dark:ring-offset-neutral-950 object-cover"
                  priority
                />
              </div>
              <h1 className="animate-fade-up animate-fade-up-1 text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
                <a href="/">{DATA.name}</a>
              </h1>
              <h2 className="animate-fade-up animate-fade-up-2 mt-3 text-lg font-medium tracking-tight text-neutral-700 dark:text-neutral-300 sm:text-xl">
                {DATA.title}
              </h2>

              <ul className="animate-fade-up animate-fade-up-3 ml-1 mt-6 flex flex-wrap items-center gap-y-2" aria-label="Contact info">
                <li className="mr-5 text-xs text-neutral-500 flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 shrink-0" aria-hidden="true"><path fillRule="evenodd" d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clipRule="evenodd" /></svg>
                  {DATA.location}
                </li>
                <li className="mr-5 text-xs">
                  <a href={`mailto:${DATA.email}`} className="text-neutral-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 shrink-0" aria-hidden="true"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    {DATA.email}
                  </a>
                </li>
              </ul>

              {/* Social Links */}
              <ul className="animate-fade-up animate-fade-up-3 ml-1 mt-4 flex items-center gap-4" aria-label="Social links">
                <li>
                  <a href={DATA.github} target="_blank" rel="noopener noreferrer" className="block text-neutral-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors" aria-label="GitHub (opens in new tab)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/></svg>
                  </a>
                </li>
                <li>
                  <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer" className="block text-neutral-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors" aria-label="LinkedIn (opens in new tab)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"/></svg>
                  </a>
                </li>
              </ul>

              {/* Desktop Navigation — client component for active section tracking */}
              <DesktopNav />
            </div>
          </header>

          {/* RIGHT COLUMN: Content */}
          <main id="content" className="pt-20 lg:pt-24 lg:w-[50%] lg:py-24">

            {/* ABOUT */}
            <section id="about" className="mb-16 scroll-mt-20 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-labelledby="about-heading">
              <div className="sticky top-[53px] z-20 -mx-6 mb-4 bg-white/75 dark:bg-neutral-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                <h2 id="about-heading" className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-100">About</h2>
              </div>
              <div>
                <p className="mb-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {DATA.about}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Skills">
                  {DATA.skills.map((skill, i) => (
                    <li key={i}>
                      <span className="inline-flex items-center rounded-full bg-teal-200/60 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-900 dark:text-teal-300">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* EXPERIENCE */}
            <section id="experience" className="mb-16 scroll-mt-20 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-labelledby="experience-heading">
              <div className="sticky top-[53px] z-20 -mx-6 mb-4 bg-white/75 dark:bg-neutral-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
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
                          <p className="mt-2 text-sm leading-normal text-neutral-600 dark:text-neutral-400">
                            {job.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" className="mb-16 scroll-mt-20 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-labelledby="projects-heading">
              <div className="sticky top-[53px] z-20 -mx-6 mb-4 bg-white/75 dark:bg-neutral-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                <h2 id="projects-heading" className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-100">Projects</h2>
              </div>
              <div>
                <ul className="group/list">
                  {DATA.projects.map((project, index) => {
                    const hasLink = project.link && project.link !== "#";
                    const Tag = hasLink ? "a" : "div";
                    const linkProps = hasLink
                      ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
                      : {};

                    return (
                      <li key={index} className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-75">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-100 dark:lg:group-hover:bg-neutral-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                          <div className="z-10 sm:col-span-8">
                            <h3 className="font-medium leading-snug text-neutral-900 dark:text-neutral-100">
                              <Tag
                                {...linkProps}
                                className="inline-flex items-center gap-1 font-medium leading-tight text-neutral-900 dark:text-neutral-100 hover:text-teal-600 dark:hover:text-teal-300 focus-visible:text-teal-600 dark:focus-visible:text-teal-300 group/link text-base transition-colors"
                              >
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>{project.name}</span>
                                {hasLink && (
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" aria-hidden="true"><path fillRule="evenodd" d="M9.25 3.75a.75.75 0 0 1 .75-.75h3.25A.75.75 0 0 1 14 3.75V7a.75.75 0 0 1-1.5 0V5.56l-6.22 6.22a.75.75 0 0 1-1.06-1.06L11.44 4.5H10a.75.75 0 0 1-.75-.75ZM2 8a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 2 8Zm0 3.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" /></svg>
                                )}
                              </Tag>
                            </h3>
                            <p className="mt-2 text-sm leading-normal text-neutral-600 dark:text-neutral-400">
                              {project.description}
                            </p>
                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                              {project.tech.map((tech, techIndex) => (
                                <li key={techIndex} className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-200/60 dark:bg-teal-400/10 px-2.5 py-0.5 text-xs font-medium text-teal-900 dark:text-teal-300">
                                    {tech}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>

            <footer className="max-w-md pb-16 text-sm text-neutral-500 sm:pb-0">
              <p>
                Built with{" "}
                <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="font-medium text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Next.js
                </a>{" "}
                &amp;{" "}
                <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="font-medium text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Tailwind CSS
                </a>
                . Deployed on{" "}
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="font-medium text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Vercel
                </a>
                .
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
