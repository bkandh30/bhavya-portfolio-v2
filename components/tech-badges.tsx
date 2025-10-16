import type { JSX } from "react";
import { Badge } from "@/components/ui/badge";

type TechBadgesProps = {
  items: string[];
};

export function TechBadges({ items }: TechBadgesProps): JSX.Element | null {
  if (!items?.length) return null;

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {items.map((s) => (
        <Badge key={s}>{s}</Badge>
      ))}
    </div>
  );
}
