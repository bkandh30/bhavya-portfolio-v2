import Link from "next/link";
import { Section } from "@/components/section";
import { about } from "@/content/about";
import { experience } from "@/content/experience";
import { skills } from "@/content/skills";
import { projects } from "@/content/projects";
import { links } from "@/content/links";

export default function Home() {
  return (
    <main id="main" className="mx-auto max-w-5xl px-6 py-16 space-y-12">
      {/* About Section */}
      <section className="rounded-2xl bg-card p-8">
        <h1 className="text-3xl font-semibold">{about.name}</h1>
        <p className="mt-1 text-muted">{about.tagline}</p>
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
          <Link href={links.github} className="underline">
            GitHub
          </Link>
          <Link href={links.linkedin} className="underline">
            Linkedin
          </Link>
          <Link href={links.email} className="underline">
            Email
          </Link>
        </div>
      </section>
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
