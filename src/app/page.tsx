"use client";

import { Nav } from "@/components/Nav";
import { Terminal, Prompt, Output } from "@/components/Terminal";
import { Section } from "@/components/Section";
import data from "@/data/portfolio.json";

/* ── Cross line with + markers (reused at top/bottom of main) ── */
function CrossLine() {
  return (
    <div className="relative h-px bg-neutral-200 dark:bg-neutral-800">
      <div className="cross-marker left-0" />
      <div className="cross-marker left-full" />
    </div>
  );
}

export default function Home() {
  const { sectionTitles, personal, socials, terminal, skills, skillsFootnote, experience, education, projects, achievements, activities, contact } = data;

  return (
    <div className="pt-6 pb-6">
      <Nav />

      <main className="max-w-4xl mx-auto border-x border-neutral-200 dark:border-neutral-800 min-h-screen relative">
        <div className="hidden lg:block absolute top-0 left-0 right-0">
          <CrossLine />
        </div>

        <div className="px-5 md:px-10 pt-20 md:pt-24 pb-16 md:pb-20 space-y-16 md:space-y-24">
          {/* ── Hero ── */}
          <section id="about" className="pt-8 md:pt-24 pb-8">
            <p className="text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.3em] mb-8">
              {personal.title}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white leading-[1.05] tracking-tight">
              {personal.name.first}
              <br />
              {personal.name.last}
            </h1>
            <p className="text-neutral-500 dark:text-neutral-400 mt-8 max-w-lg leading-[1.8] text-sm">
              {personal.bio}{" "}
              {personal.currentWork.text}{" "}
              <a
                href={personal.currentWork.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-neutral-500 transition-colors"
              >
                {personal.currentWork.company}
              </a>
              .
            </p>

            {/* Social links */}
            <div className="flex flex-wrap gap-x-5 gap-y-3 md:gap-6 mt-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors text-xs uppercase tracking-widest py-1"
                >
                  {s.label}
                </a>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 text-xs">
              <a
                href={`mailto:${personal.email}`}
                className="text-white dark:text-black bg-black dark:bg-white px-5 py-3 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors uppercase tracking-widest text-center sm:w-auto"
              >
                Contact
              </a>
              <a
                href="#experience"
                className="text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 px-5 py-3 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors uppercase tracking-widest text-center sm:w-auto"
              >
                My Work
              </a>
            </div>

            {/* Terminal */}
            <div className="mt-14">
              <Terminal>
                {terminal.map((t, i) => (
                  <div key={i}>
                    <Prompt>{t.prompt}</Prompt>
                    <Output>{t.output}</Output>
                  </div>
                ))}
              </Terminal>
            </div>
          </section>

          {/* ── Skills ── */}
          <Section id="skills" title={sectionTitles.skills}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 dark:bg-neutral-800">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-white dark:bg-black p-4 sm:p-5">
                  <h3 className="text-[11px] text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.2em] mb-4">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-x-3 gap-y-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="bg-white dark:bg-black p-4 sm:p-5 flex items-center justify-center">
                <p className="text-xs text-neutral-400 dark:text-neutral-600 italic">
                  {skillsFootnote}
                </p>
              </div>
            </div>
          </Section>

          {/* ── Experience ── */}
          <Section id="experience" title={sectionTitles.experience}>
            <div className="space-y-0 divide-y divide-neutral-200 dark:divide-neutral-800">
              {experience.map((exp) => (
                <div key={exp.company} className="py-8 first:pt-0 last:pb-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-black dark:text-white text-base font-semibold">
                          {exp.role}
                        </h3>
                        {"tag" in exp && exp.tag && (
                          <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 border border-neutral-300 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400">
                            {exp.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-neutral-400 dark:text-neutral-500 text-xs mt-1.5">
                        {exp.company} &middot; {exp.location}
                      </p>
                    </div>
                    <span className="text-neutral-400 dark:text-neutral-600 text-xs shrink-0 md:mt-1">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-sm text-neutral-500 dark:text-neutral-400 flex gap-3 leading-[1.7]"
                      >
                        <span className="text-neutral-300 dark:text-neutral-600 mt-0.5 shrink-0">
                          —
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* ── Education ── */}
          <Section id="education" title={sectionTitles.education}>
            <div className="space-y-0 divide-y divide-neutral-200 dark:divide-neutral-800">
              {education.map((edu) => (
                <div key={edu.degree} className="py-8 first:pt-0 last:pb-0">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-4">
                    <div>
                      <h3 className="text-black dark:text-white text-base font-semibold">
                        {edu.degree}
                      </h3>
                      <p className="text-neutral-400 dark:text-neutral-500 text-xs mt-1">
                        {edu.institution} &middot; {edu.location}
                      </p>
                    </div>
                    <span className="text-neutral-400 dark:text-neutral-600 text-xs shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  {edu.grade && (
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {edu.grade}
                    </p>
                  )}
                  {edu.coursework && (
                    <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                      <h4 className="text-[11px] text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.2em] mb-3">
                        Coursework
                      </h4>
                      <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="text-xs text-neutral-500 dark:text-neutral-400"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Section>

          {/* ── Projects ── */}
          <Section id="projects" title={sectionTitles.projects}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200 dark:bg-neutral-800">
              {projects.map((proj) => (
                <a
                  key={proj.name}
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-black p-4 sm:p-6 group hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-200 flex flex-col"
                >
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="text-black dark:text-white font-semibold group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
                      {proj.name}
                    </h3>
                    <span className="text-neutral-300 dark:text-neutral-600 text-xs group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors">
                      ↗
                    </span>
                  </div>
                  <p className="text-neutral-400 dark:text-neutral-500 text-xs mb-4">
                    {proj.description}
                  </p>
                  <ul className="space-y-2">
                    {proj.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-xs text-neutral-500 dark:text-neutral-400 flex gap-2 leading-[1.7]"
                      >
                        <span className="text-neutral-300 dark:text-neutral-600 shrink-0">
                          —
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-auto pt-6">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] text-neutral-400 dark:text-neutral-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </Section>

          {/* ── Achievements ── */}
          <Section id="achievements" title={sectionTitles.achievements}>
            <ul className="space-y-3">
              {achievements.map((item, i) => (
                <li
                  key={i}
                  className="text-sm text-neutral-500 dark:text-neutral-400 flex gap-3 leading-[1.7]"
                >
                  <span className="text-neutral-300 dark:text-neutral-600 mt-0.5 shrink-0">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* ── Activities ── */}
          <Section id="activities" title={sectionTitles.activities}>
            <div className="space-y-0 divide-y divide-neutral-200 dark:divide-neutral-800">
              {activities.map((activity, i) => (
                <div key={i} className="py-6 first:pt-0 last:pb-0">
                  {"url" in activity && activity.url ? (
                    <a
                      href={activity.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-baseline justify-between"
                    >
                      <div>
                        <h3 className="text-black dark:text-white text-sm font-semibold mb-1">
                          {activity.title}
                        </h3>
                        {activity.description && (
                          <p className="text-sm text-neutral-500 dark:text-neutral-400">
                            {activity.description}
                          </p>
                        )}
                      </div>
                      <span className="text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors text-sm ml-4 shrink-0">
                        ↗
                      </span>
                    </a>
                  ) : (
                    <>
                      <h3 className="text-black dark:text-white text-sm font-semibold mb-3">
                        {activity.title}
                      </h3>
                      {activity.description && (
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                          {activity.description}
                        </p>
                      )}
                    </>
                  )}
                  {"items" in activity && activity.items && (
                    <ul className="space-y-2">
                      {activity.items.map((item, j) => (
                        <li
                          key={j}
                          className="text-sm text-neutral-500 dark:text-neutral-400 flex gap-3 leading-[1.7]"
                        >
                          <span className="text-neutral-300 dark:text-neutral-600 mt-0.5 shrink-0">
                            —
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </Section>

          {/* ── Contact ── */}
          <Section id="contact" title={sectionTitles.contact}>
            <div className="max-w-md">
              <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-[1.8] mb-8">
                {contact.message}
              </p>
              <a
                href={`mailto:${personal.email}`}
                className="inline-block text-white dark:text-black bg-black dark:bg-white px-5 sm:px-6 py-3 text-[10px] sm:text-xs uppercase tracking-widest hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors break-all sm:break-normal"
              >
                {personal.email}
              </a>
              <div className="flex flex-wrap gap-x-5 gap-y-3 md:gap-6 mt-10 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors text-xs uppercase tracking-widest py-1"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </Section>
        </div>

        <div className="hidden lg:block absolute bottom-0 left-0 right-0">
          <CrossLine />
        </div>
        <div className="lg:hidden h-px bg-neutral-200 dark:bg-neutral-800" />
      </main>

      <footer className="max-w-4xl mx-auto text-center py-8">
        <p className="text-neutral-400 dark:text-neutral-600 text-[11px] tracking-widest uppercase">
          {personal.footerName} &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
