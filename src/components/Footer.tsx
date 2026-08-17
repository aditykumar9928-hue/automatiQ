import { Sparkles, Globe, AtSign, Share2, Mail, ArrowUpRight } from 'lucide-react';

const socials = [
  { icon: Globe, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: AtSign, label: 'Twitter / X', href: 'https://twitter.com' },
  { icon: Share2, label: 'GitHub', href: 'https://github.com' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@automatiq.ai' },
];

const nav = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-glow-600 shadow-glow-sm">
                <Sparkles className="h-5 w-5 text-white" />
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                Automati<span className="text-gradient-brand">Q</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              AI automation agency building chatbots, AI calling agents,
              WhatsApp agents, and workflow automation that save your team
              thousands of hours.
            </p>
          </div>

          <div className="md:justify-self-center">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:justify-self-end">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Connect
            </h3>
            <div className="mt-4 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-glow-400/50 hover:text-white"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="btn-ghost mt-5 inline-flex text-sm"
            >
              Book a free call
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} AutomatiQ. All rights reserved.</p>
          <p>Designed &amp; built for scale.</p>
        </div>
      </div>
    </footer>
  );
}
