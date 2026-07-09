'use client'

import { useState } from 'react'
import { ChevronDown, Github, FolderGit2 } from 'lucide-react'
import { PROJECTS } from '@/lib/portfolio-data'
import { useReveal } from './use-reveal'
import { SectionHeading } from './reveal'

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number]
  index: number
}) {
  const [expanded, setExpanded] = useState(false)
  const { ref, isVisible } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`reveal glow-hover flex flex-col rounded-2xl border border-border bg-card p-6 ${
        isVisible ? 'is-visible' : ''
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
          <FolderGit2 className="h-6 w-6" />
        </span>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} on GitHub`}
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          <Github className="h-5 w-5" />
        </a>
      </div>

      <h3 className="font-heading mt-5 text-2xl font-700">{project.name}</h3>
      <p className="text-sm font-medium text-primary">{project.tagline}</p>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        {project.summary}
      </p>

      <div
        className={`grid transition-all duration-500 ease-out ${
          expanded ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-2 border-t border-border pt-4">
            {project.details.map((d, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary"
      >
        {expanded ? 'Hide Details' : 'View Details'}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${
            expanded ? 'rotate-180' : ''
          }`}
        />
      </button>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 bg-secondary/30 py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="Backend-heavy platforms designed for reliability, transactional integrity, and clean API design."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
