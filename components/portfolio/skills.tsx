'use client'

import { useReveal } from './use-reveal'
import { SectionHeading } from './reveal'
import { SKILL_CATEGORIES } from '@/lib/portfolio-data'

function SkillCard({
  title,
  skills,
  index,
}: {
  title: string
  skills: { name: string; level: number }[]
  index: number
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`reveal glow-hover rounded-2xl border border-border bg-card p-6 ${
        isVisible ? 'is-visible' : ''
      }`}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
    >
      <h3 className="font-heading mb-5 flex items-center gap-2 text-lg font-600">
        <span className="h-4 w-1 rounded-full bg-primary" />
        {title}
      </h3>
      <div className="flex flex-col gap-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="text-foreground">{skill.name}</span>
              <span className="text-xs text-muted-foreground">
                {skill.level}%
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-[width] duration-1000 ease-out"
                style={{ width: isVisible ? `${skill.level}%` : '0%' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-16 bg-secondary/30 py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          subtitle="A full-stack toolkit centered on the Java and Spring ecosystem, backed by solid database, testing, and DevOps fundamentals."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, i) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.skills}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
