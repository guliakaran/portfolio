import { useState } from 'react'
import Reveal from './Reveal'

const quotes = [
  {
    quote:
      'I open a job and the partners, materials, labour, and payments are already on it. When the site has no signal, the entries stay on the phone until they can sync.',
    name: 'Vikram Desai',
    role: 'Contractor',
    project: 'BuildLedger',
    href: '#project/buildledger',
    initials: 'VD',
  },
  {
    quote:
      'Profit, cash, and what each partner takes out used to be three different sheets. Now they sit on the same job, including the settlement.',
    name: 'Neha Iyer',
    role: 'Partner on the job',
    project: 'BuildLedger',
    href: '#project/buildledger',
    initials: 'NI',
  },
  {
    quote:
      'The arc is the part of the day I’m willing to be woken. New alarms have to land inside it, and on Android they still ring after the app is closed.',
    name: 'Kabir Shah',
    role: 'Sets his own daylight window',
    project: 'Sunrise Arc',
    href: '#project/sunrise-arc',
    initials: 'KS',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const onScroll = (event) => {
    const scroller = event.currentTarget
    const firstCard = scroller.firstElementChild
    if (!firstCard) return
    const cardWidth = firstCard.getBoundingClientRect().width + 18
    setActive(Math.round(scroller.scrollLeft / cardWidth))
  }

  return (
    <section className="section" id="testimonials">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow-num">03 — What clients say</div>
          <h2>A few words from past projects</h2>
          <p>From the people using BuildLedger and Sunrise Arc.</p>
        </Reveal>
        <Reveal className="testi-scroller" onScroll={onScroll}>
          {quotes.map((item) => (
            <div className="testi-card" key={item.name}>
              <a className="testi-project" href={item.href}>
                {item.project}
              </a>
              <p className="quote">“{item.quote}”</p>
              <div className="who">
                <span className="avatar" aria-hidden="true">
                  {item.initials}
                </span>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
        <div className="testi-dots" id="testi-dots">
          {quotes.map((item, index) => (
            <div className={index === active ? 'd active' : 'd'} key={item.name} />
          ))}
        </div>
      </div>
    </section>
  )
}
