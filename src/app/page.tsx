export default function Home() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
          Welcome to FlyRank
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          A polished App Router starter for your capstone.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          Use the navigation above to explore the dashboard, feature overview, settings page, and a mock health page that loads sample public data asynchronously.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {[
          {
            title: "Dashboard",
            description: "Track adoption metrics and get a high-level summary.",
          },
          {
            title: "Features",
            description: "Showcase product features and core capabilities.",
          },
          {
            title: "Settings",
            description: "Manage preferences and app configuration.",
          },
          {
            title: "Health",
            description: "Review system health checks and public mock data.",
          },
        ].map((card) => (
          <article key={card.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">{card.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
