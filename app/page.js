import Image from "next/image";
import { DATA } from "./data";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Awards", href: "#awards" },
  { name: "Education", href: "#education" },
];

function HomePage() {
  return (
    <div className="md:flex md:gap-12">
      <nav className="md:hidden sticky top-0 z-50 bg-white/90 dark:bg-neutral-950/90 backdrop-blur mb-8 py-2 -mx-4 px-4 border-b border-neutral-200 dark:border-neutral-800">
        <ul className="flex gap-4 overflow-x-auto text-lg font-medium text-neutral-600 dark:text-neutral-400">
          {NAV_LINKS.map((link) => (
            <li key={link.name} className="shrink-0">
              <a href={link.href} className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors block py-3">{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <aside className="hidden md:block shrink-0 w-48">
        <nav className="sticky top-24" aria-label="Section Navigation">
          <ul className="space-y-3 text-base text-neutral-500 dark:text-neutral-400">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors">{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 space-y-12 md:space-y-16 max-w-2xl">
      <section id="about" className="space-y-4 scroll-mt-16">
        <div className="flex flex-col-reverse items-start md:flex-row md:justify-between gap-4">
          <div className="w-full md:flex-1 space-y-1.5">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">{DATA.name}</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              {DATA.title}
            </p>
            <p className="text-sm text-neutral-500">{DATA.location} | {DATA.email} | {DATA.phone}</p>
          </div>
          <div className="relative shrink-0 w-28 h-28 rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-800">
            <Image
              src={DATA.avatarUrl}
              alt={DATA.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {DATA.about}
        </p>
      </section>
      
      <section id="skills" className="space-y-6 scroll-mt-16">
        <h2 className="text-xl md:text-2xl font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {DATA.skills.map((skill, index) => (
             <span key={index} className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-xs md:text-sm text-neutral-600 dark:text-neutral-400">{skill}</span>
          ))}
        </div>
      </section>

      <section id="experience" className="space-y-6 scroll-mt-16">
        <h2 className="text-xl md:text-2xl font-semibold">Experience</h2>
        <div className="space-y-8">
          {DATA.experience.map((job, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div>
                <h3 className="font-medium">{job.company}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{job.role}</p>
                <ul className="list-disc list-outside ml-4 text-sm text-neutral-500 mt-2 max-w-xl space-y-1">
                  {job.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
              <span className="text-sm text-neutral-400 tabular-nums">{job.period}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="awards" className="space-y-6 scroll-mt-16">
        <h2 className="text-xl md:text-2xl font-semibold">Awards & Certifications</h2>
        <ul className="list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
            {DATA.awards.map((award, index) => (
                <li key={`award-${index}`}>{award}</li>
            ))}
            {DATA.certifications.map((cert, index) => (
                <li key={`cert-${index}`}>{cert}</li>
            ))}
        </ul>
      </section>

      <section id="education" className="space-y-6 scroll-mt-16">
        <h2 className="text-xl md:text-2xl font-semibold">Education</h2>
        <div className="space-y-4">
          {DATA.education.map((edu, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
               <div>
                  <h3 className="font-medium">{edu.institution}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{edu.degree}</p>
               </div>
               <span className="text-sm text-neutral-400 tabular-nums">{edu.period}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
    </div>
  );
}

export default HomePage;