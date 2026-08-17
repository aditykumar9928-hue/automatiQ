import { TrendingUp, ArrowUpRight } from 'lucide-react';

type Project = {
  client: string;
  category: string;
  title: string;
  description: string;
  results: { value: string; label: string }[];
  gradient: string;
};

const projects: Project[] = [
  {
    client: 'SaaS Support Platform',
    category: 'AI Chatbot + RAG',
    title: 'Instant support that deflected 68% of tickets',
    description:
      'A retrieval-augmented chatbot trained on the client’s docs and past tickets, deployed on web and Intercom. Tier-1 questions are answered instantly; complex cases route to the right human with full context.',
    results: [
      { value: '68%', label: 'Tickets deflected' },
      { value: '4.2min', label: 'Avg. response time' },
      { value: '-41%', label: 'Support cost' },
    ],
    gradient: 'from-brand-600/40 to-glow-600/30',
  },
  {
    client: 'B2B Marketing Agency',
    category: 'Lead Gen Automation',
    title: 'AI outbound that 3x’d qualified pipeline',
    description:
      'An autonomous lead-generation system that sources prospects, enriches them with AI, drafts personalized outreach, and syncs everything into HubSpot — running 24/7 without an SDR team.',
    results: [
      { value: '3.1x', label: 'Qualified meetings' },
      { value: '1,200', label: 'Leads / month' },
      { value: '0', label: 'Manual SDR hours' },
    ],
    gradient: 'from-glow-500/40 to-aqua-400/25',
  },
  {
    client: 'E-commerce Brand',
    category: 'Workflow Automation',
    title: 'Order-to-fulfillment automation across 8 tools',
    description:
      'An n8n orchestration layer connecting Shopify, Stripe, the 3PL warehouse, Slack, and accounting — automating order routing, tracking, reconciliation, and exception alerts.',
    results: [
      { value: '92%', label: 'Orders auto-fulfilled' },
      { value: '6hrs', label: 'Saved per day' },
      { value: '99.9%', label: 'Flow uptime' },
    ],
    gradient: 'from-aqua-400/40 to-brand-500/25',
  },
  {
    client: 'Financial Services Firm',
    category: 'Custom AI Integration',
    title: 'Private AI analyst over 1M documents',
    description:
      'A secure, on-premise RAG platform lets analysts ask natural-language questions across a million internal documents — with citations, access controls, and a full audit trail.',
    results: [
      { value: '85%', label: 'Faster research' },
      { value: '1M+', label: 'Docs indexed' },
      { value: '100%', label: 'On-prem & audited' },
    ],
    gradient: 'from-brand-500/40 to-glow-500/30',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-aqua-300">
            Case studies
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Real automations, real results
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            A selection of systems we’ve designed and shipped — and the
            measurable impact they delivered.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="reveal group relative overflow-hidden rounded-3xl glass p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-glow-400/40"
              data-reveal-delay={i * 90}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="relative flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                  {p.category}
                </span>
                <ArrowUpRight className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </div>

              <p className="relative mt-5 text-xs uppercase tracking-wider text-slate-400">
                {p.client}
              </p>
              <h3 className="relative mt-1 text-xl font-semibold text-white sm:text-2xl">
                {p.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-slate-300">
                {p.description}
              </p>

              <dl className="relative mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
                {p.results.map((r) => (
                  <div key={r.label}>
                    <dt className="flex items-center gap-1 text-xl font-bold text-gradient-brand sm:text-2xl">
                      <TrendingUp className="hidden h-4 w-4 text-success-400 sm:block" />
                      {r.value}
                    </dt>
                    <dd className="mt-1 text-[11px] text-slate-400 sm:text-xs">
                      {r.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
