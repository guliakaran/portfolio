import { useState } from 'react'
import Reveal from './Reveal'

const items = [
  {
    q: 'How do you price a project?',
    a: 'Most projects are fixed-price based on scope, agreed before work starts. For open-ended or ongoing work, I bill weekly.',
  },
  {
    q: 'Do you work solo or with a team?',
    a: "Solo by default, so you're always talking to the person writing the code. I bring in specialists for design or QA when a project needs it.",
  },
  {
    q: "What's a typical timeline?",
    a: 'A focused mobile or web app usually takes 4–8 weeks from kickoff to store submission or launch, depending on scope.',
  },
  {
    q: 'Can you take over an existing codebase?',
    a: 'Yes — I regularly pick up existing React Native, React, or Node projects and can start with an audit before committing to a scope.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes, happy to sign an NDA before any details are shared.',
  },
]

function Chevron() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 9.5 12 15l6-5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)
  const panelId = `faq-panel-${index}`

  return (
    <div className={open ? 'faq-item is-open' : 'faq-item'}>
      <button
        type="button"
        className="faq-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="faq-num">{String(index + 1).padStart(2, '0')}</span>
        <span className="faq-q">{item.q}</span>
        <span className="plus">
          <Chevron />
        </span>
      </button>
      <div className="faq-panel" id={panelId}>
        <div className="faq-panel-inner">
          <p>{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="wrap faq-layout">
        <Reveal className="section-head faq-intro">
          <div className="eyebrow-num">05 — FAQ</div>
          <h2>Common questions</h2>
          <p>Scope, timeline, and how a project usually starts.</p>
        </Reveal>
        <Reveal className="faq-list">
          {items.map((item, index) => (
            <FAQItem key={item.q} item={item} index={index} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
