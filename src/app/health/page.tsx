import fs from "fs/promises";
import path from "path";

interface HealthEntry {
  id: number;
  check: string;
  status: string;
  lastUpdated: string;
}

async function getHealthData(): Promise<HealthEntry[]> {
  const filePath = path.join(process.cwd(), "public", "health-data.json");
  const file = await fs.readFile(filePath, "utf-8");
  return JSON.parse(file) as HealthEntry[];
}

export default async function HealthPage() {
  const healthData = await getHealthData();

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
          Health
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          System health and public status data
        </h1>
        <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
          This health page loads mock public data asynchronously to demonstrate server-rendered data fetching in the App Router.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {healthData.map((item) => (
            <article key={item.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold text-slate-900">{item.check}</h2>
              <p className="mt-2 text-sm text-slate-600">Status: <span className="font-medium text-slate-900">{item.status}</span></p>
              <p className="mt-1 text-sm text-slate-500">Last updated: {item.lastUpdated}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
