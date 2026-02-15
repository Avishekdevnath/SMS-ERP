'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

const topics = [
  'General Inquiry',
  'Technical Support',
  'Bug Report',
  'Feature Request',
  'Enterprise Sales',
  'Billing & Pricing',
  'Partnership',
  'Other',
]

const priorities = ['Low', 'Medium', 'High', 'Urgent'] as const

export default function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false)
  const [priority, setPriority] = useState<(typeof priorities)[number]>('Medium')
  const [message, setMessage] = useState('')
  const charCount = useMemo(() => message.length, [message])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="sct-hero">
        <div className="sct-orb sct-orb-1" />
        <div className="sct-orb sct-orb-2" />
        <p className="sct-breadcrumb">
          <span>Home</span>
          <span>/</span>
          <span className="active">Contact</span>
        </p>
        <h1>
          Get In <span>Touch</span>
        </h1>
        <p>Have a question, need support, or want to discuss a custom deployment?</p>
      </section>

      <section className="sct-layout">
        <aside className="sct-info">
          <div>
            <p className="sct-eyebrow">Direct Channels</p>
            <h2>Reach Us</h2>
            <div className="sct-cards">
              <article className="sct-card">
                <h3>Email Support</h3>
                <p>support@smserp.io</p>
              </article>
              <article className="sct-card">
                <h3>Live Chat</h3>
                <p>Available in-app for Pro plans</p>
              </article>
              <article className="sct-card">
                <h3>Enterprise Sales</h3>
                <p>+1 (888) 555-0199</p>
              </article>
            </div>
          </div>

          <div className="sct-hours">
            <p className="sct-eyebrow">Support Hours</p>
            <p>Mon-Fri: 09:00 - 18:00 UTC</p>
            <p>Saturday: 10:00 - 14:00 UTC</p>
            <p>Sunday: Closed</p>
          </div>
        </aside>

        <div className="sct-form-wrap">
          <div className="sct-form-head">
            <p className="sct-eyebrow">Submit Request</p>
            <h2>Send a Message</h2>
            <p>We typically respond within one business day.</p>
          </div>

          {submitted ? (
            <div className="sct-success">
              <h3>Message Transmitted</h3>
              <p>We have received your message and will respond shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="sct-row">
                <input className="sct-input" placeholder="First Name" required />
                <input className="sct-input" placeholder="Last Name" required />
              </div>
              <div className="sct-row">
                <input type="email" className="sct-input" placeholder="Email Address" required />
                <input className="sct-input" placeholder="Organization" />
              </div>
              <select className="sct-input" required defaultValue="">
                <option value="" disabled>
                  Select a topic
                </option>
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
              <div className="sct-priority">
                {priorities.map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={item === priority ? 'active' : ''}
                    onClick={() => setPriority(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <textarea
                className="sct-input sct-textarea"
                placeholder="Describe your issue..."
                maxLength={1000}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />
              <p className="sct-count">{charCount} / 1000</p>
              <div className="sct-submit-row">
                <button type="submit" className="sct-submit">
                  Transmit Message
                </button>
                <span>Response target: under 4 business hours.</span>
              </div>
            </form>
          )}
        </div>
      </section>

      <section className="sct-faq">
        <div className="sct-faq-head">
          <p className="sct-eyebrow">Common Questions</p>
          <h2>
            Frequently <span>Asked</span>
          </h2>
        </div>
        <div className="sct-faq-grid">
          <article>
            <h3>How fast do you respond?</h3>
            <p>Pro and Enterprise requests are prioritized during business hours.</p>
          </article>
          <article>
            <h3>Can you build custom integrations?</h3>
            <p>Yes. Enterprise plans can include scoped custom development support.</p>
          </article>
          <article>
            <h3>Do you help with onboarding?</h3>
            <p>Yes. We provide guided setup and migration support for enterprise customers.</p>
          </article>
          <article>
            <h3>How to report security issues?</h3>
            <p>Share details via direct support channels for responsible disclosure handling.</p>
          </article>
        </div>
      </section>

      <section className="sct-bottom-links">
        <Link href="/features">Explore Features</Link>
        <Link href="/auth/login">Go to Login</Link>
      </section>
    </>
  )
}
