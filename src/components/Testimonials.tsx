import { Star, Quote } from 'lucide-react';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      'AutomatiQ replaced an entire support tier with a chatbot that actually answers correctly. Our CSAT went up while our ticket volume dropped by half. Genuinely game-changing.',
    name: 'Sarah Chen',
    role: 'Head of Support, SaaS Platform',
    initials: 'SC',
  },
  {
    quote:
      'Their lead-gen automation books more qualified meetings than our old SDR team did — and it never sleeps. The ROI showed up in the first month.',
    name: 'Marcus Reid',
    role: 'Founder, B2B Agency',
    initials: 'MR',
  },
  {
    quote:
      'We went from copy-pasting between six tools to everything just flowing. The n8n setup is bulletproof and the team monitors it like hawks. Worth every cent.',
    name: 'Priya Nair',
    role: 'COO, E-commerce Brand',
    initials: 'PN',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-glow-400">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Trusted by teams who ship
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            What operators say after we put their busywork on autopilot.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal relative flex flex-col rounded-3xl glass p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-glow-400/40"
              data-reveal-delay={i * 90}
            >
              <Quote className="h-8 w-8 text-glow-400/60" />
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className="h-4 w-4 fill-warning-400 text-warning-400"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-200">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-glow-600 text-sm font-bold text-white">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">
                    {t.name}
                  </span>
                  <span className="block text-xs text-slate-400">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
