'use client'

import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { CONTACT } from '@/lib/portfolio-data'

export function Footer() {
  const socials = [
    { icon: Github, href: CONTACT.githubUrl, label: 'GitHub' },
    { icon: Linkedin, href: CONTACT.linkedinUrl, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${CONTACT.email}`, label: 'Email' },
  ]

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 md:flex-row md:justify-between md:px-6">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Siddhesh Waghmare. All rights
          reserved.
        </p>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="glow-hover inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-primary"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <button
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="glow-hover inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-primary"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
