'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, Download, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { CONTACT, HERO_TITLES } from '@/lib/portfolio-data'

function useTypewriter(words: string[]) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let delay = deleting ? 45 : 90

    if (!deleting && text === current) {
      delay = 1600
    } else if (deleting && text === '') {
      delay = 350
    }

    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setWordIndex((i) => i + 1)
      } else {
        setText(
          current.substring(0, deleting ? text.length - 1 : text.length + 1),
        )
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words])

  return text
}

export function Hero() {
  const typed = useTypewriter(HERO_TITLES)

  const socials = [
    { icon: Github, href: CONTACT.githubUrl, label: 'GitHub' },
    { icon: Linkedin, href: CONTACT.linkedinUrl, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${CONTACT.email}`, label: 'Email' },
    { icon: Phone, href: `tel:+91${CONTACT.phone}`, label: 'Phone' },
  ]

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      {/* Animated background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div
          className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-chart-2/20 blur-3xl animate-blob"
          style={{ animationDelay: '3s' }}
        />
        <div
          className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-chart-3/15 blur-3xl animate-blob"
          style={{ animationDelay: '6s' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,transparent,var(--background))]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for opportunities
          </p>

          <h1 className="font-heading text-4xl font-800 leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I&apos;m{' '}
            <span className="text-primary">Siddhesh Waghmare</span>
          </h1>

          <div className="mt-4 flex h-9 items-center text-xl font-medium text-muted-foreground sm:text-2xl md:h-10 md:text-3xl">
            <span className="text-foreground">{typed}</span>
            <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-primary md:h-8" />
          </div>

          <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Building reliable, scalable backend systems with Java, Spring Boot,
            and Microservices — with a passion for clean APIs and well-tested code.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={CONTACT.resumeUrl}
              download
              className="glow-hover inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="glow-hover inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="glow-hover inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-primary"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  )
}
