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

export default function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow-num">05 — FAQ</div>
          <h2>Common questions</h2>
        </Reveal>
        <Reveal className="faq-list">
          {items.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>
                {item.q}
                <span className="plus">+</span>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
