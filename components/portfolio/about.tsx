'use client'
import { basePath } from '@/lib/base-path'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { STATS } from '@/lib/portfolio-data'
import { Reveal, SectionHeading } from './reveal'

function Counter({
  value,
  suffix,
  decimals,
}: {
  value: number
  suffix: string
  decimals: number
}) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const duration = 1400
            const start = performance.now()
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setDisplay(value * eased)
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.5 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="font-heading text-4xl font-800 text-primary sm:text-5xl">
      {display.toFixed(decimals)}
      {suffix}
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 md:px-6">
      <SectionHeading
        eyebrow="About"
        title="Turning complex requirements into clean backends"
      />

      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="mx-auto w-full max-w-xs">
          <div className="glow-hover relative rounded-3xl border border-border bg-card p-2">
            <div className="absolute -inset-1 -z-10 rounded-3xl bg-primary/20 blur-2xl" />
            <Image
              src={`${basePath}/profile.png`}
              alt="Portrait of Siddhesh Waghmare"
              width={480}
              height={480}
              className="aspect-square w-full rounded-2xl object-cover"
              priority
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
            Java Fullstack Developer with{' '}
            <span className="font-semibold text-foreground">
              1.5+ years of experience
            </span>{' '}
            building backend systems using Java, Spring Boot, and Microservices,
            with frontend exposure via Angular. Skilled in designing RESTful APIs
            and databases with Hibernate, PostgreSQL, and MySQL, and working in
            Agile teams to ship reliable, well-tested software.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-card p-4 text-center sm:p-6"
              >
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
                <p className="mt-2 text-xs leading-tight text-muted-foreground sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
