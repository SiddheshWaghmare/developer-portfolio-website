'use client'

import { Briefcase, MapPin } from 'lucide-react'
import { EXPERIENCE } from '@/lib/portfolio-data'
import { Reveal, SectionHeading } from './reveal'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-24 md:px-6">
      <SectionHeading eyebrow="Experience" title="Where I've been working" />

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute bottom-0 left-4 top-2 w-px bg-border md:left-6" />

        {EXPERIENCE.map((job, i) => (
          <Reveal key={i} className="relative pl-14 md:pl-20">
            <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-primary md:h-12 md:w-12">
              <Briefcase className="h-4 w-4 md:h-5 md:w-5" />
            </span>

            <div className="glow-hover rounded-2xl border border-border bg-card p-6">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-heading text-xl font-600">{job.role}</h3>
                  <p className="text-primary">{job.company}</p>
                </div>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  {job.period}
                </span>
              </div>

              <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {job.location}
              </p>

              <ul className="mt-5 flex flex-col gap-3">
                {job.points.map((point, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
