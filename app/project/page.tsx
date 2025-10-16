import Link from "next/link";
import { projects } from "@/content/projects";
import { TechBadges } from "@/components/tech-badges";
import { Section } from "@/components/section";
import { isValidUrl } from "@/lib/validate";
import type { Route } from "next";

export const metadata = {
  title: "Projects — Bhavya Kandhari",
};

export default function ProjectsIndex() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 space-y-12">
      <Section id="projects-index" title="Projects">
        <ul className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <li key={p.slug} className="rounded-xl border border-white/10 p-5">
              <div className="font-medium">
                <Link href={`/projects/${p.slug}` as Route} className="underline">
                  {p.name}
                </Link>
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
      </Section>
    </main>
  );
}
