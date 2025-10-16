"use client";

import Link from "next/link";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
] as const;

export function LeftRail() {
  const active = useActiveSection(SECTIONS.map((s) => s.id));

  return (
    <aside className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Bhavya Kandhari</h1>
        <p className="text-gray-400">Software Developer · Backend & Cloud</p>
      </div>

      <nav aria-label="Section navigation" className="space-y-2 text-sm">
        {SECTIONS.map((s) => {
          const isActive = active === s.id;
          return (
            <Link
              key={s.id}
              href={`#${s.id}`}
              className={cn(
                "block rounded-md px-3 py-2",
                isActive ? "bg-white/10 text-white" : "text-gray-300 hover:bg-white/5",
              )}
            >
              {s.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex gap-4 text-sm underline">
        <Link href="https://github.com/bkandh30" target="_blank">
          GitHub
        </Link>
        <Link href="https://www.linkedin.com/in/bhavyakandhari" target="_blank">
          LinkedIn
        </Link>
        <Link href="mailto:bhavya.kandhari.eng@gmail.com">Email</Link>
      </div>
    </aside>
  );
}
