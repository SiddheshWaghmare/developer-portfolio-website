'use client'

import { useState } from 'react'
import {
  Check,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'
import { CONTACT } from '@/lib/portfolio-data'
import { Reveal, SectionHeading } from './reveal'

const WEB3FORMS_ACCESS_KEY = '533f3166-bd1f-4585-810a-cb99f4829a77'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio contact from ${form.name}`,
          from_name: form.name,
          email: form.email,
          message: form.message,
          to: CONTACT.email,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setTimeout(() => setStatus('idle'), 4000)
    }
  }
  const details = [
    { icon: Phone, label: 'Phone', value: `+91 ${CONTACT.phone}`, href: `tel:+91${CONTACT.phone}` },
    { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Linkedin, label: 'LinkedIn', value: CONTACT.linkedin, href: CONTACT.linkedinUrl },
    { icon: Github, label: 'GitHub', value: CONTACT.github, href: CONTACT.githubUrl },
    { icon: MapPin, label: 'Location', value: CONTACT.location, href: undefined },
  ]

  return (
    <section id="contact" className="scroll-mt-16 bg-secondary/30 py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          subtitle="Have an opportunity or just want to connect? Drop me a message and I'll get back to you."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="glow-hover inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-60"
              >
                {status === 'idle' && (
                  <>
                    Send Message <Send className="h-4 w-4" />
                  </>
                )}
                {status === 'sending' && <>Sending...</>}
                {status === 'sent' && (
                  <>
                    Message sent <Check className="h-4 w-4" />
                  </>
                )}
                {status === 'error' && <>Failed — try again</>}
              </button>
            </form>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-4">
            {details.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="glow-hover flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      {label}
                    </p>
                    <p className="truncate font-medium text-foreground">{value}</p>
                  </div>
                </div>
              )
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
