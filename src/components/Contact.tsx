import { useState, type FormEvent } from 'react';
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Calendar,
  MessageSquare,
  Phone,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

const services = [
  'AI Chatbots',
  'AI Calling Agents',
  'WhatsApp Agents',
  'Workflow Automation (n8n / Zapier / Make)',
  'Business Process Automation',
  'AI Agents',
  'Lead Generation Automation',
  'Custom AI Integrations',
  'Not sure yet',
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const company = String(data.get('company') ?? '').trim();
    const service = String(data.get('service') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    if (!name || !email || !message) {
      setStatus('error');
      setErrorMsg('Please fill in your name, email, and a short message.');
      return;
    }

    const { error } = await supabase.from('leads').insert({
      name,
      email,
      company: company || null,
      service: service || null,
      message,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong sending your message. Please try again.');
      return;
    }

    setStatus('success');
    form.reset();
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-72 w-72 rounded-full bg-glow-600/20 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: pitch + quick links */}
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
              Let’s talk
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Book a free call
            </h2>
            <p className="mt-5 text-lg text-slate-300">
              Tell us where you’re losing hours. We’ll map the first automation
              you should ship — no commitment, no jargon, just a clear plan.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/40"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-glow-600">
                  <Calendar className="h-5 w-5 text-white" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">
                    Schedule on Calendly
                  </span>
                  <span className="block text-xs text-slate-400">
                    30-minute discovery call
                  </span>
                </span>
              </a>

              <a
                href="https://wa.me/10000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-success-400/40"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-success-500 to-aqua-500">
                  <MessageSquare className="h-5 w-5 text-white" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">
                    Chat on WhatsApp
                  </span>
                  <span className="block text-xs text-slate-400">
                    Fastest response
                  </span>
                </span>
              </a>

              <a
                href="tel:+10000000000"
                className="glass flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-glow-400/40"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5">
                  <Phone className="h-5 w-5 text-brand-300" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">
                    Call us directly
                  </span>
                  <span className="block text-xs text-slate-400">
                    +1 (000) 000-0000
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal" data-reveal-delay="120">
            <div className="glass-strong rounded-3xl p-7 sm:p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-success-500 to-aqua-500 shadow-glow">
                    <CheckCircle2 className="h-8 w-8 text-white" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-white">
                    Message sent
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-slate-300">
                    Thanks — we’ll get back to you within one business day with
                    next steps.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="btn-ghost mt-6 text-sm"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="form-input"
                        placeholder="Jane Doe"
                      />
                    </Field>
                    <Field label="Email" htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="form-input"
                        placeholder="jane@company.com"
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Company (optional)" htmlFor="company">
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        className="form-input"
                        placeholder="Acme Inc."
                      />
                    </Field>
                    <Field label="Service of interest" htmlFor="service">
                      <select
                        id="service"
                        name="service"
                        className="form-input"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="How can we help?" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="form-input resize-none"
                      placeholder="Tell us about the workflow you want to automate…"
                    />
                  </Field>

                  {status === 'error' && (
                    <p className="flex items-center gap-2 rounded-xl border border-error-400/30 bg-error-400/10 px-4 py-3 text-sm text-error-400">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full text-base disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    We typically reply within one business day.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Local styles for form controls to keep markup clean */}
      <style>{`
        .form-input {
          width: 100%;
          border-radius: 0.85rem;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.05);
          padding: 0.7rem 0.9rem;
          font-size: 0.95rem;
          color: #fff;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .form-input::placeholder { color: rgba(203,213,225,0.55); }
        .form-input:focus {
          border-color: rgba(167,139,250,0.6);
          box-shadow: 0 0 0 3px rgba(139,92,246,0.18);
          background: rgba(255,255,255,0.08);
        }
        .form-input option { color: #0a0b1e; }
      `}</style>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-200">
        {label}
      </span>
      {children}
    </label>
  );
}
