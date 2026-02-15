import { Orbitron, Syne } from 'next/font/google'
import HomeEffects from '@/components/home/HomeEffects'
import HomeFooter from '@/components/home/HomeFooter'
import HomeNavbar from '@/components/home/HomeNavbar'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
})

const values = [
  ['01', 'Transparency First', 'Operational clarity for every role.'],
  ['02', 'Role-Aware Design', 'Contextual interfaces for focused action.'],
  ['03', 'Operational Speed', 'Less overhead, faster decisions.'],
  ['04', 'Open by Default', 'MIT-licensed and developer-friendly.'],
  ['05', 'Security by Design', 'Secure auth, hashing, and status controls.'],
  ['06', 'Accessible Education', 'Enterprise-grade tools for every team.'],
]

const timeline = [
  ['Q1 2024', 'Origin', 'Built as an internal cohort operations tool.'],
  ['Q3 2024', 'Alpha', 'Role-based dashboards and relationship model shipped.'],
  ['Q1 2025', 'v1.0', 'Open-source release with full auth APIs.'],
  ['Q3 2025', 'v1.5', 'Managed and enterprise rollout started.'],
  ['2026', 'v2.0', 'Modernized UI and Next.js App Router foundation.'],
]

export default function AboutPage() {
  return (
    <main className={`sms-home sab-page ${orbitron.variable} ${syne.variable}`}>
      <HomeEffects />
      <HomeNavbar />

      <section className="sab-hero">
        <div className="sab-orb sab-orb-1" />
        <div className="sab-orb sab-orb-2" />
        <div className="sab-hero-inner">
          <div>
            <p className="sab-eyebrow">Our Mission</p>
            <h1>
              Building the Future of <span>Education Ops</span>
            </h1>
            <p>
              SMS ERP was built by educators and engineers who were tired of fragmented tools and
              operational blind spots.
            </p>
          </div>
          <article className="sab-mission-card">
            <p className="sab-eyebrow">Core Statement</p>
            <blockquote>
              Every educational institution deserves enterprise-grade operational infrastructure.
            </blockquote>
            <div className="sab-mission-stats">
              <div>
                <strong>1000+</strong>
                <span>Students</span>
              </div>
              <div>
                <strong>50+</strong>
                <span>Mentors</span>
              </div>
              <div>
                <strong>100+</strong>
                <span>Missions</span>
              </div>
              <div>
                <strong>95%</strong>
                <span>Success</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="sab-story">
        <div className="sab-section-head">
          <p className="sab-eyebrow">Our Story</p>
          <h2>
            Why We <span>Built This</span>
          </h2>
        </div>
        <div className="sab-story-copy">
          <p>
            SMS ERP started as a small internal system to replace spreadsheets and disconnected
            communication threads.
          </p>
          <p>
            As cohorts scaled, operational complexity became the bottleneck. We solved this by
            creating role-aware workflows in one unified platform.
          </p>
          <p>
            Today, SMS ERP supports institutes, bootcamps, and mentorship teams with an extensible,
            open, and production-focused foundation.
          </p>
        </div>
      </section>

      <section className="sab-values">
        <div className="sab-section-head centered">
          <p className="sab-eyebrow">What We Stand For</p>
          <h2>
            Core <span>Values</span>
          </h2>
        </div>
        <div className="sab-values-grid">
          {values.map(([id, title, text]) => (
            <article key={id} className="sab-value-card sms-reveal">
              <p className="sab-id">{id}</p>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sab-timeline">
        <div className="sab-section-head centered">
          <p className="sab-eyebrow">Product History</p>
          <h2>
            The <span>Roadmap</span>
          </h2>
        </div>
        <div className="sab-timeline-list">
          {timeline.map(([year, event, desc]) => (
            <article key={year} className="sab-timeline-item sms-reveal">
              <p className="sab-year">{year}</p>
              <h3>{event}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sab-cta">
        <h2>
          Want to Be Part of <span>the Story?</span>
        </h2>
        <p>Join the platform, contribute, or partner with us.</p>
      </section>

      <HomeFooter />
    </main>
  )
}
