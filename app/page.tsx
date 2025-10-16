import Link from "next/link";
import { LeftRail } from "@/components/left-rail";
import { Section } from "@/components/section";
import { about } from "@/content/about";
import { experience } from "@/content/experience";
import { education } from "@/content/education";
import { skills } from "@/content/skills";
import { projects } from "@/content/projects";
import { TechBadges } from "@/components/tech-badges";
import { links } from "@/content/links";
import { isValidUrl } from "@/lib/validate";

export default function Home() {
  return (
    <main id="main" className="mx-auto max-w-5xl px-6 py-16 grid gap-12 lg:grid-cols-[280px,1fr]">
      <LeftRail />

      <div className="space-y-12">
        {/* About Section */}
        <section id="about" className="rounded-2xl bg-card p-8">
          <h1 className="text-3xl font-semibold">{about.name}</h1>
          <p className="mt-1 text-gray-400">{about.tagline}</p>
          <div className="mt-5 space-y-3 leading-7">
            {about.blurb.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Links Sub Section */}
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href={links.resume} className="rounded-md border px-4 py-2">
              View Résumé
            </Link>
            <Link href={links.github} className="underline" target="_blank">
              GitHub
            </Link>
            <Link href={links.linkedin} className="underline" target="_blank">
              LinkedIn
            </Link>
            <Link href={links.email} className="underline">
              Email
            </Link>
          </div>
        </section>

        {/* Experience Section */}
        <Section id="experience" title="Experience">
          <ul className="space-y-6">
            {experience.map((role) => (
              <li
                key={`${role.company}-${role.title}`}
                className="rounded-xl border border-white/10 p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="font-medium">
                    {role.title} — {role.company}
                  </div>
                  <div className="text-sm text-gray-400">
                    {role.start} — {role.end}
                  </div>
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-200">
                  {role.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                {role.tags?.length ? <TechBadges items={role.tags} /> : null}
              </li>
            ))}
          </ul>
        </Section>

        {/* Skills Section*/}
        <Section id="skills" title="Skills">
          <div className="grid gap-3 sm:grid-cols-2">
            <KV k="Languages" v={skills.languages.join(", ")} />
            <KV k="Frameworks" v={skills.frameworks.join(", ")} />
            <KV k="Cloud/DevOps" v={skills.cloudDevOps.join(", ")} />
            <KV k="Databases" v={skills.databases.join(", ")} />
            <KV k="Concepts" v={skills.concepts.join(", ")} />
          </div>
        </Section>

        {/* Education Section */}
        <Section id="education" title="Education">
          <ul className="space-y-4">
            {education.map((e) => (
              <li key={`${e.school}-${e.degree}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="font-medium">
                    {e.school} — {e.degree}
                  </div>
                  <div className="text-sm text-gray-400">{e.dates}</div>
                </div>
                {e.notes?.length ? (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-200">
                    {e.notes.map((n, i) => (
                      <li key={i}>{n}</li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </Section>

        {/* Projects Section */}
        {/* Projects Section */}
        <Section id="projects" title="Projects">
          <ul className="grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <li key={p.slug} className="rounded-xl border border-white/10 p-5">
                <div className="font-medium">
                  <a
                    href={`/projects/${p.slug}`}
                    className="underline hover:text-gray-300 transition-colors"
                  >
                    {p.name}
                  </a>
                  {p.year ? <span className="ml-2 text-sm text-gray-400">({p.year})</span> : null}
                </div>
                {p.summary ? <p className="mt-1 text-sm text-gray-300">{p.summary}</p> : null}
                {!!p.stack?.length && <TechBadges items={p.stack} />}
                {!!p.bullets?.length && (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-200">
                    {p.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
                {p.links && (isValidUrl(p.links.github) || isValidUrl(p.links.live)) ? (
                  <div className="mt-3 flex gap-4 text-sm underline">
                    {isValidUrl(p.links.github) && (
                      <a
                        href={p.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                    {isValidUrl(p.links.live) && (
                      <a
                        href={p.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 transition-colors"
                      >
                        Live
                      </a>
                    )}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <a href="/projects" className="underline hover:text-gray-300 transition-colors">
              View all projects →
            </a>
          </div>
        </Section>
      </div>
    </main>
  );
}

function KV({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-gray-400 w-40 shrink-0">{k}</span>
      <span>{v}</span>
    </div>
  );
}
