export default function FeaturesPage() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
          Features
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Built for clarity and speed
        </h1>
        <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
          A responsive feature overview is a perfect foundation for your capstone. This page showcases clean content sections and a fast, accessible layout.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Responsive design",
              description: "Layouts that work smoothly across mobile, tablet, and desktop screens.",
            },
            {
              title: "Server components",
              description: "Keep rendering on the server by default with stable App Router patterns.",
            },
            {
              title: "Tailwind CSS",
              description: "Use modern utility classes for clean spacing, typography, and responsive structure.",
            },
          ].map((feature) => (
            <article key={feature.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-semibold text-slate-900">{feature.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
