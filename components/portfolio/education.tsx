'use client'

import { GraduationCap, MapPin } from 'lucide-react'
import { EDUCATION } from '@/lib/portfolio-data'
import { Reveal, SectionHeading } from './reveal'

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-24 md:px-6">
      <SectionHeading eyebrow="Education" title="My academic background" />

      <Reveal className="mx-auto max-w-3xl">
        <div className="glow-hover flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 sm:flex-row sm:items-center">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
            <GraduationCap className="h-7 w-7" />
          </span>
          <div className="flex-1">
            <h3 className="font-heading text-xl font-600">{EDUCATION.degree}</h3>
            <p className="mt-1 text-primary">{EDUCATION.school}</p>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {EDUCATION.location}
            </p>
          </div>
          <span className="self-start rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground sm:self-center">
            {EDUCATION.year}
          </span>
        </div>
      </Reveal>
    </section>
  )
}
