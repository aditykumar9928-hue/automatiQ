import { CheckCircle2, Rocket, ShieldCheck, Gauge } from 'lucide-react';

const pillars = [
  {
    icon: Rocket,
    title: 'Results-driven, not hype-driven',
    text: 'Every automation we ship is tied to a measurable outcome — hours saved, conversion lifted, or cost reduced. No black boxes.',
  },
  {
    icon: Gauge,
    title: 'Fast, reliable delivery',
    text: 'Most workflows go live in 1–3 weeks. We build in sprints with live previews, so you see progress from day one.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & private by design',
    text: 'Your data stays yours. We follow least-privilege access, encrypted storage, and SOC2-aware deployment patterns.',
  },
  {
    icon: CheckCircle2,
    title: 'Built to scale with you',
    text: 'From 100 to 100k runs a day, our automations are engineered for reliability with monitoring, retries, and alerts.',
  },
];

const metrics = [
  { value: '3.5x', label: 'Avg. ROI in 90 days' },
  { value: '99.9%', label: 'Workflow uptime' },
  { value: '14 days', label: 'Avg. time to launch' },
  { value: '24/7', label: 'Monitoring & support' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      {/* glow accents */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-600/15 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-glow-400">
              Why choose us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              A team obsessed with your outcomes
            </h2>
            <p className="mt-5 text-lg text-slate-300">
              AutomatiQ pairs senior automation engineers with AI specialists to
              ship systems that work — and keep working. We have automated
              operations for SaaS startups, agencies, and e-commerce brands
              across three continents.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-5">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="glass rounded-2xl p-5 text-center"
                >
                  <dt className="text-3xl font-bold text-gradient-brand">
                    {m.value}
                  </dt>
                  <dd className="mt-1 text-sm text-slate-300">{m.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="reveal glass rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-400/40"
                data-reveal-delay={i * 90}
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5">
                  <p.icon className="h-5 w-5 text-brand-300" />
                </div>
                <h3 className="mt-4 font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
