export function KeyVal({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baselines gap-2">
      <span className="text-gray-400 w-32 shrink-0">{k}</span>
      <span>{v}</span>
    </div>
  );
}
