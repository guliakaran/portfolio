import { useRef } from 'react'
import Reveal from './Reveal'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const projects = [
  {
    category: 'Fintech · Mobile',
    year: '2025',
    title: 'Personal wallet app',
    description:
      'Onboarding, transfers, and card controls — one React Native codebase, shipped to both app stores.',
    tags: ['React Native', 'Node.js', 'Express'],
  },
  {
    category: 'Marketplace · Web',
    year: '2024',
    title: 'Vendor marketplace platform',
    description:
      'Seller dashboards, order tracking, and search on a React front end with role-based access.',
    tags: ['React JS', 'Node.js'],
  },
  {
    category: 'Health & Fitness · Mobile',
    year: '2024',
    title: 'Activity tracking app',
    description:
      'Offline-first sync and background tracking, with an onboarding flow that cut signup drop-off.',
    tags: ['React Native', 'iOS', 'Android'],
  },
  {
    category: 'Internal tools · Web',
    year: '2023',
    title: 'Operations dashboard',
    description:
      'Real-time order and inventory tracking, replacing a spreadsheet for a 20-person ops team.',
    tags: ['React JS', 'Express'],
  },
]

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
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
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
          <p>Swap these for your own case studies and outcomes.</p>
        </Reveal>
        <div className="work-grid">
          {projects.map((project) => (
            <TiltCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
