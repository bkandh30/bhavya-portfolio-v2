import { ReactNode } from "react";
import { Heading } from "@/components/heading";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="rounded-2xl bg-card p-8">
      <Heading id={id} level={2}>
        {title}
      </Heading>
      <div className="mt-4 space-y-3">{children}</div>
    </section>
  );
}
