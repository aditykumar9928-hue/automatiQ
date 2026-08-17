import {
  Bot,
  Workflow,
  Cpu,
  Target,
  Plug,
  Phone,
  MessageCircle,
  type LucideIcon,
} from 'lucide-react';

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
  accent: string;
};

const services: Service[] = [
  {
    icon: Bot,
    title: 'AI Chatbots',
    description:
      '24/7 conversational assistants trained on your knowledge base that handle support, qualify leads, and answer instantly — across web, WhatsApp, and Telegram.',
    points: ['Custom-trained on your data', 'Human handoff', 'Multi-channel'],
    accent: 'from-brand-500 to-brand-700',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description:
      'We connect your stack with n8n, Zapier, and Make so data moves itself — no more copy-paste between CRMs, sheets, and inboxes.',
    points: ['n8n · Zapier · Make', '500+ app integrations', 'Visual + code'],
    accent: 'from-glow-500 to-glow-600',
  },
  {
    icon: Cpu,
    title: 'Business Process Automation',
    description:
      'End-to-end automation of repetitive operations — invoicing, onboarding, reporting, and approvals — engineered for reliability and scale.',
    points: ['Doc & report automation', 'Approval flows', 'Error monitoring'],
    accent: 'from-aqua-400 to-aqua-500',
  },
  {
    icon: Bot,
    title: 'AI Agents',
    description:
      'Autonomous agents that plan, research, and take multi-step actions — booking meetings, enriching leads, and drafting replies on your behalf.',
    points: ['Tool-using agents', 'Memory & context', 'Autonomous goals'],
    accent: 'from-brand-400 to-glow-500',
  },
  {
    icon: Phone,
    title: 'AI Calling Agents',
    description:
      'Voice AI agents that handle inbound and outbound phone calls — qualifying leads, booking appointments, and answering FAQs with natural conversation, 24/7, in dozens of languages.',
    points: ['Inbound & outbound', 'Appointment booking', 'CRM auto-sync'],
    accent: 'from-brand-600 to-glow-500',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Agents',
    description:
      'WhatsApp-native AI agents that chat with customers where they already are — answering questions, qualifying leads, sending reminders, and closing sales inside WhatsApp, end to end.',
    points: ['24/7 WhatsApp chat', 'Lead qualifying & sales', 'Reminders & follow-ups'],
    accent: 'from-success-500 to-aqua-500',
  },
  {
    icon: Target,
    title: 'Lead Generation Automation',
    description:
      'AI-powered outbound that finds, enriches, and nurtures prospects automatically — feeding your CRM with qualified leads while you sleep.',
    points: ['AI prospecting', 'Auto-enrichment', 'CRM sync'],
    accent: 'from-glow-400 to-glow-600',
  },
  {
    icon: Plug,
    title: 'Custom AI Integrations',
    description:
      'Bespoke integrations that embed GPT-grade intelligence into your existing tools, databases, and internal systems — securely and reliably.',
    points: ['API & RAG systems', 'Private deployments', 'Secure by design'],
    accent: 'from-aqua-300 to-brand-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
            What we do
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Automation that actually moves the needle
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Eight core services covering the full automation stack — from
            AI chatbots, calling, and WhatsApp agents to deep custom integrations.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="reveal group relative overflow-hidden rounded-3xl p-7 glass transition-all duration-500 hover:-translate-y-1.5 hover:border-glow-400/40"
              data-reveal-delay={i * 80}
            >
              <div
                className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${s.accent} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40`}
              />

              <div
                className={`relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${s.accent} shadow-glow-sm`}
              >
                <s.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="relative mt-5 text-xl font-semibold text-white">
                {s.title}
              </h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-slate-300">
                {s.description}
              </p>

              <ul className="relative mt-5 flex flex-wrap gap-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
