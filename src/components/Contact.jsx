import { useState } from 'react'
import Reveal from './Reveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const name = form.name.trim()
    const email = form.email.trim()
    const message = form.message.trim()
    const subject = encodeURIComponent(`Project inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`)
    window.location.href = `mailto:karanguliadev@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="contact wrap" id="contact">
      <Reveal className="contact-card">
        <div className="contact-left">
          <h2>Got a project worth building well?</h2>
          <p>Send a few details below, or reach out directly — whichever's easier.</p>
          <div className="contact-actions">
            <a
              className="action-btn solid"
              href="https://calendly.com/karanguliadev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ico">📅</span> Book a 20-min call
            </a>
            <a
              className="action-btn outline"
              href="https://wa.me/919991191527"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ico">💬</span> WhatsApp
            </a>
            <a className="action-btn outline" href="mailto:karanguliadev@gmail.com">
              <span className="ico">✉️</span> karanguliadev@gmail.com
            </a>
          </div>
        </div>

        <form className="contact-form" id="contact-form" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="cf-name">Name</label>
            <input
              id="cf-name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={onChange}
            />
          </div>
          <div className="field">
            <label htmlFor="cf-email">Email</label>
            <input
              id="cf-email"
              name="email"
              type="email"
              placeholder="you@company.com"
              required
              value={form.email}
              onChange={onChange}
            />
          </div>
          <div className="field">
            <label htmlFor="cf-message">Project details</label>
            <textarea
              id="cf-message"
              name="message"
              placeholder="What are you building, and what's the timeline?"
              required
              value={form.message}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="submit-btn">
            Send message
          </button>
          <p className="hint">Opens your email app with this filled in, addressed to Karan.</p>
        </form>
      </Reveal>
    </section>
  )
}
