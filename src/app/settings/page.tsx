export default function SettingsPage() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
          Settings
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Control panel for app configuration
        </h1>
        <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
          Configure basic options for your capstone app. The layout adapts to both small and large screens without additional dependencies.
        </p>

        <div className="mt-8 space-y-4">
          {[
            { title: "Account Preferences", details: "Manage your profile, notifications, and personalization." },
            { title: "Project Settings", details: "Adjust feature access, data refresh intervals, and dashboard preferences." },
            { title: "Support", details: "Access documentation links and contact resources when needed." },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
