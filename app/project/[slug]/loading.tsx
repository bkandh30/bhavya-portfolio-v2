export default function LoadingProject() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="animate-pulse rounded-2xl bg-card p-8">
        <div className="h-6 w-2/3 rounded bg-white/10" />
        <div className="mt-4 h-4 w-1/2 rounded bg-white/10" />
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="h-6 rounded bg-white/10" />
          <div className="h-6 rounded bg-white/10" />
          <div className="h-6 rounded bg-white/10" />
        </div>
      </div>
    </main>
  );
}
