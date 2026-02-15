import Link from 'next/link'
import { heroStats } from '@/components/home/homeData'

export default function HeroSection() {
  return (
    <section className="sms-hero">
      <div className="sms-orb sms-orb-1" />
      <div className="sms-orb sms-orb-2" />
      <div className="sms-orb sms-orb-3" />

      <div className="sms-circuit-lines" aria-hidden="true">
        <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 400 H200 V200 H500 V350 H900 V150 H1200 V400 H1440" />
          <path d="M0 600 H150 V500 H400 V650 H700 V450 H1000 V600 H1440" />
        </svg>
      </div>

      <p className="sms-hero-tag">
        <span className="sms-dot" />
        System Online - v2.0
      </p>

      <h1 className="sms-hero-title">
        <span>Student Management</span>
        <span className="sms-gradient-text">ERP Platform</span>
      </h1>

      <p className="sms-hero-subtitle">
        A role-based operations hub for admissions, mentoring, batch management, and mission
        tracking, built for the next generation of education.
      </p>

      <div className="sms-hero-ctas">
        <Link href="/auth/login" className="sms-btn-primary">
          Get Started
        </Link>
        <a href="#features" className="sms-btn-secondary">
          Explore Features
        </a>
      </div>

      <div className="sms-hero-stats">
        {heroStats.map((stat) => (
          <div className="sms-hero-stat" key={stat.label}>
            <div className="sms-stat-value">{stat.value}</div>
            <div className="sms-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="sms-scroll-indicator">
        <span>Scroll</span>
        <div className="sms-scroll-line" />
      </div>
    </section>
  )
}
