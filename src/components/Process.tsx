import { Search, Wrench, Rocket, Headset, type LucideIcon } from 'lucide-react';

type Step = {
  icon: LucideIcon;
  step: string;
  title: string;
  text: string;
};

const steps: Step[] = [
  {
    icon: Search,
    step: '01',
    title: 'Discover',
    text: 'We map your workflows, pinpoint the highest-leverage automations, and define clear success metrics — usually in a single working session.',
  },
  {
    icon: Wrench,
    step: '02',
    title: 'Build',
    text: 'We design and engineer your automation in short sprints with live previews, so you watch it take shape and can steer as we go.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Automate',
    text: 'We deploy with monitoring, retries, and alerts — then run it against real traffic and tune until the outcomes hit your targets.',
  },
  {
    icon: Headset,
    step: '04',
    title: 'Support',
    text: 'Ongoing maintenance, optimizations, and new automations as you grow. We treat your systems like our own infrastructure.',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-glow-600/15 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
            How we work
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            From idea to automated in four steps
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            A clear, proven process that turns manual chaos into reliable,
            measurable automation.
          </p>
        </div>

        <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-[68px] hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />

          {steps.map((s, i) => (
            <div
              key={s.step}
              className="reveal relative"
              data-reveal-delay={i * 100}
            >
              <div className="glass rounded-3xl p-7 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-400/40">
                <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-glow-600 shadow-glow">
                  <s.icon className="h-7 w-7 text-white" />
                  <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full border border-white/15 bg-ink-900 text-xs font-bold text-white">
                    {s.step}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
