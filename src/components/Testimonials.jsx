import { useState } from 'react'
import Reveal from './Reveal'

const quotes = [
  {
    quote:
      '"Karan shipped our iOS and Android app from one codebase, on time, and it never felt like a compromise on either platform."',
    name: 'Aisha R.',
    role: 'Product Lead, fintech startup',
    image: '/testimonials/aisha-r.jpg',
  },
  {
    quote:
      '"Clear updates every week and a staging build I could actually click through. No surprises at launch."',
    name: 'Marcus T.',
    role: 'Founder, early-stage startup',
    image: '/testimonials/marcus-t.jpg',
  },
  {
    quote:
      '"He rebuilt our admin dashboard in weeks and it\'s held up under daily use by the whole ops team since."',
    name: 'Priya N.',
    role: 'Operations Manager',
    image: '/testimonials/priya-n.jpg',
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
          <p>Placeholder quotes — replace with real feedback once you have it.</p>
        </Reveal>
        <Reveal className="testi-scroller" onScroll={onScroll}>
          {quotes.map((item) => (
            <div className="testi-card" key={item.name}>
              <p className="quote">{item.quote}</p>
              <div className="who">
                <img className="avatar" src={item.image} alt={item.name} />
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
