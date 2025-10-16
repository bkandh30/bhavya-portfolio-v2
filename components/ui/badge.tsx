import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded bg-white/10 px-2 py-0.5 text-xs leading-5",
        className,
      )}
    >
      {children}
    </span>
  );
}
