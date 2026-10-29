import { useState } from 'react'
import Reveal from './Reveal'

function Icon({ children }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {children}
    </svg>
  )
}

function CalendarIcon() {
  return (
    <Icon>
      <rect x="4" y="5.5" width="16" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 3.8v3.4M16 3.8v3.4M4 10.2h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </Icon>
  )
}

function ChevronIcon() {
  return (
    <svg className="chev" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9.5 12 15l6-5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MeetIcon() {
  return (
    <Icon>
      <path
        d="M4 8.5A2.5 2.5 0 0 1 6.5 6h7A2.5 2.5 0 0 1 16 8.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 15.5v-7Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M16 10.2 20 8v8l-4-2.2" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </Icon>
  )
}

function TeamsIcon() {
  return (
    <Icon>
      <path d="M9 10.5h6M9 14h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M7 6.5h10A2.5 2.5 0 0 1 19.5 9v6A2.5 2.5 0 0 1 17 17.5H9.2L5.5 20v-2.6A2.5 2.5 0 0 1 4.5 15V9A2.5 2.5 0 0 1 7 6.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Icon>
  )
}

function ChatIcon() {
  return (
    <Icon>
      <path
        d="M6.5 7.5h11A2.5 2.5 0 0 1 20 10v5.2a2.5 2.5 0 0 1-2.5 2.5H11l-3.6 2.6v-2.6H6.5A2.5 2.5 0 0 1 4 15.2V10a2.5 2.5 0 0 1 2.5-2.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Icon>
  )
}

function MailIcon() {
  return (
    <Icon>
      <rect x="3.5" y="6" width="17" height="12" rx="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="m4.5 7.5 7.5 5.5 7.5-5.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </Icon>
  )
}

const GOOGLE_MEET_EMAIL = 'karanguliadev@gmail.com'
const TEAMS_EMAIL = 'karanguliadev@outlook.com'

const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Meeting with Karan')}&add=${encodeURIComponent(GOOGLE_MEET_EMAIL)}&details=${encodeURIComponent('Intro call from the portfolio. Join with the attached Google Meet link.')}&vcon=meet`
const googleMeetUrl = `https://accounts.google.com/AccountChooser?continue=${encodeURIComponent(googleCalendarUrl)}`

const teamsUrl = `https://teams.cloud.microsoft/l/meeting/new?subject=${encodeURIComponent('Meeting with Karan')}&attendees=${encodeURIComponent(TEAMS_EMAIL)}&content=${encodeURIComponent("Hi Karan, I'd like to meet.")}`

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [showMeetings, setShowMeetings] = useState(false)

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
          <div className="eyebrow-num">06 — Contact</div>
          <h2>
            Got a project worth <span className="grad">building well?</span>
          </h2>
          <p>Send a few details, or book a short call. Either one is enough to start.</p>
          <div className="contact-actions">
            <button
              type="button"
              className={showMeetings ? 'action-btn solid is-open' : 'action-btn solid'}
              aria-expanded={showMeetings}
              aria-controls="meeting-options"
              onClick={() => setShowMeetings((open) => !open)}
            >
              <span className="ico">
                <CalendarIcon />
              </span>
              <span>Book a 20-min call</span>
              <ChevronIcon />
            </button>
            {showMeetings && (
              <div className="meeting-options" id="meeting-options">
                <a
                  className="action-btn meet-btn"
                  href={googleMeetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="ico">
                    <MeetIcon />
                  </span>
                  <span className="meet-btn-copy">
                    <span>Google Meet</span>
                    <span className="meet-btn-mail">{GOOGLE_MEET_EMAIL}</span>
                  </span>
                </a>
                <a
                  className="action-btn meet-btn"
                  href={teamsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="ico">
                    <TeamsIcon />
                  </span>
                  <span className="meet-btn-copy">
                    <span>Microsoft Teams</span>
                    <span className="meet-btn-mail">{TEAMS_EMAIL}</span>
                  </span>
                </a>
              </div>
            )}
          </div>
          <div className="contact-links">
            <a href="https://wa.me/919466595905" target="_blank" rel="noopener noreferrer">
              <ChatIcon /> WhatsApp
            </a>
            <a href="mailto:karanguliadev@gmail.com">
              <MailIcon /> karanguliadev@gmail.com
            </a>
          </div>
        </div>

        <form className="contact-form" id="contact-form" onSubmit={onSubmit}>
          <p className="form-kicker">Project inquiry</p>
          <div className="field-row">
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
