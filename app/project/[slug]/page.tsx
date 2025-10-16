import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { TechBadges } from "@/components/tech-badges";
import { isValidUrl } from "@/lib/validate";
import type { Route } from "next";

function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const p = getProject(params.slug);
  const title = p ? `${p.name} — Projects — Bhavya Kandhari` : "Project — Bhavya Kandhari";
  const description =
    p?.summary ??
    `Details for ${p?.name ?? "project"} by Bhavya Kandhari${p?.year ? ` (${p.year})` : ""}.`;
  return { title, description };
}

export default function ProjectPage({ params }: PageProps) {
  const p = getProject(params.slug);
  if (!p) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 space-y-8">
      <div className="rounded-2xl bg-card p-8">
        <h1 className="text-2xl font-semibold">{p.name}</h1>
        {p.year ? <div className="mt-1 text-sm text-gray-400">{p.year}</div> : null}
        {p.summary ? <p className="mt-3 text-gray-300">{p.summary}</p> : null}
        {!!p.stack?.length && <TechBadges items={p.stack} />}

        {!!p.bullets?.length && (
          <ul className="mt-6 list-disc space-y-2 pl-5 text-gray-200">
            {p.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}

        {p.links && (isValidUrl(p.links.github) || isValidUrl(p.links.live)) ? (
          <div className="mt-6 flex gap-6 text-sm underline">
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
      </div>

      <div className="text-sm">
        <Link href={"/projects" as Route} className="underline">
          ← Back to Projects
        </Link>
      </div>
    </main>
  );
}
