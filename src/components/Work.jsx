import { useRef } from 'react'
import { projects } from '../data/projects'
import Reveal from './Reveal'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

function TiltCard({ project }) {
  const cardRef = useRef(null)
  const reduceMotion = usePrefersReducedMotion()

  const onMove = (event) => {
    if (reduceMotion) return
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rx = (y / rect.height - 0.5) * -6
    const ry = (x / rect.width - 0.5) * 6
    card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`
    card.style.setProperty('--gx', `${x}px`)
    card.style.setProperty('--gy', `${y}px`)
  }

  const onLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = ''
  }

  return (
    <Reveal
      as="a"
      href={`#project/${project.slug}`}
      className="tilt-card"
      ref={cardRef}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <div className="glow" />
      <div className="meta">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.card}</p>
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <span className="card-link">View details</span>
    </Reveal>
  )
}

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow-num">02 — Selected work</div>
          <h2>A few recent builds</h2>
          <p>Two products, built end to end. Open either one for the details.</p>
        </Reveal>
        <div className="work-grid">
          {projects.map((project) => (
            <TiltCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
