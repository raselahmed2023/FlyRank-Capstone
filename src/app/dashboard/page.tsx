export default function DashboardPage() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
          Dashboard
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Metrics at a glance
        </h1>
        <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
          Your dashboard is ready for capstone data. Use this space to visualize usage, performance, and trends in a clean responsive layout.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { label: "Active Users", value: "1,248" },
            { label: "Monthly Visits", value: "32.7k" },
            { label: "Conversion Rate", value: "4.8%" },
            { label: "Uptime", value: "99.98%" },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <dt className="text-sm font-medium text-slate-500">{item.label}</dt>
              <dd className="mt-2 text-2xl font-semibold text-slate-900">{item.value}</dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
