import { ArrowRight, Sparkles, Bot, Workflow, Zap } from 'lucide-react';

const stats = [
  { value: '120+', label: 'Workflows Automated' },
  { value: '10k+', label: 'Hours Saved / Month' },
  { value: '40+', label: 'AI Agents Deployed' },
];

const floatingChips = [
  { icon: Bot, label: 'AI Chatbot', className: 'left-[4%] top-[30%] animate-float' },
  { icon: Workflow, label: 'n8n Workflow', className: 'right-[6%] top-[22%] animate-float-slow' },
  { icon: Zap, label: 'Auto Lead Capture', className: 'left-[10%] bottom-[12%] animate-float-slow' },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-aurora pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]" />
      {/* Glowing orbs */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-600/30 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-glow-600/25 blur-3xl animate-pulse-glow" />

      {/* Floating glass chips (desktop) */}
      {floatingChips.map((chip) => (
        <div
          key={chip.label}
          className={`pointer-events-none absolute hidden lg:block ${chip.className}`}
        >
          <div className="glass flex items-center gap-2.5 rounded-2xl px-4 py-3 text-sm text-white/90">
            <chip.icon className="h-4 w-4 text-brand-300" />
            {chip.label}
          </div>
        </div>
      ))}

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-slate-200 backdrop-blur-md">
          <Sparkles className="h-4 w-4 text-glow-400" />
          AI Automation Agency
        </div>

        <h1
          className="reveal text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
          data-reveal-delay="80"
        >
          Automate the busywork.
          <br />
          <span className="text-gradient">Scale with intelligence.</span>
        </h1>

        <p
          className="reveal mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl"
          data-reveal-delay="160"
        >
          We design and deploy AI chatbots, AI calling agents, WhatsApp agents,
          and end-to-end workflow automation that save your team thousands of
          hours — so you can focus on growth, not repetitive tasks.
        </p>

        <div
          className="reveal mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          data-reveal-delay="240"
        >
          <a href="#contact" className="btn-primary text-base">
            Book a Free Call
            <ArrowRight className="h-5 w-5" />
          </a>
          <a href="#services" className="btn-ghost text-base">
            Explore Services
          </a>
        </div>

        <dl
          className="reveal mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4 sm:gap-8"
          data-reveal-delay="320"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl px-3 py-5 sm:px-6">
              <dt className="text-2xl font-bold text-white sm:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs text-slate-300 sm:text-sm">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
