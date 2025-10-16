import { Badge } from "@/components/ui/badge";
import type { ExperienceItem } from "@/content/experience";

export function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ul className="space-y-6">
      {items.map((role) => (
        <li key={`${role.company}-${role.title}`} className="rounded-xl border border-white/10 p-5">
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
          {role.tags?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {role.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
