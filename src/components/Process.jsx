import { useLayoutEffect, useRef } from 'react'
import Reveal from './Reveal'

const steps = [
  {
    when: 'Week 1',
    title: 'Discover',
    body: 'Define scope, platforms, and what "done" looks like before any code is written.',
  },
  {
    when: 'Weeks 2–5',
    title: 'Build',
    body: 'Weekly check-ins and a staging build you can click through, so nothing arrives as a surprise.',
  },
  {
    when: 'Week 6',
    title: 'Ship',
    body: 'Store submissions, deployment, and a short handover so your team can maintain it after launch.',
  },
]

const CIRCLE_TOP = 4
const CIRCLE_SIZE = 16
const CIRCLE_CENTER = CIRCLE_TOP + CIRCLE_SIZE / 2

export default function Process() {
  const timelineRef = useRef(null)
  const activeRef = useRef(-1)

  useLayoutEffect(() => {
    const timeline = timelineRef.current
    if (!timeline) return

    let ticking = false

    const apply = (index) => {
      const nodes = [...timeline.querySelectorAll('.t-step')]
      const fills = [...timeline.querySelectorAll('.rail-seg-fill')]

      nodes.forEach((step, i) => {
        step.classList.toggle('passed', i <= index)
      })

      fills.forEach((fill, i) => {
        fill.style.height = i < index ? '100%' : '0'
      })
    }

    const update = () => {
      ticking = false
      const nodes = [...timeline.querySelectorAll('.t-step')]
      if (!nodes.length) return

      const triggerY = window.innerHeight * 0.5
      let index = 0
      nodes.forEach((step, i) => {
        const center = step.getBoundingClientRect().top + CIRCLE_CENTER
        if (center <= triggerY) index = i
      })

      if (index === activeRef.current) return
      activeRef.current = index
      apply(index)
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    apply(0)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section className="section" id="process">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow-num">04 — Process</div>
          <h2>How a project runs</h2>
        </Reveal>
        <div className="timeline" ref={timelineRef}>
          {steps.map((step, index) => (
            <div className="t-step" key={step.title}>
              {index < steps.length - 1 && (
                <div className="rail-seg">
                  <div className="rail-seg-fill" />
                </div>
              )}
              <div className="tnum">{step.when}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
