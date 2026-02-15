'use client'

import Link from 'next/link'
import HomeEffects from '@/components/home/HomeEffects'
import HomeFooter from '@/components/home/HomeFooter'
import HomeNavbar from '@/components/home/HomeNavbar'

export default function RegisterPage() {
  return (
    <main className="sms-home srg-page">
      <HomeEffects />
      <HomeNavbar />

      <section className="srg-wrap">
        <div className="srg-orb srg-orb-1" />
        <div className="srg-orb srg-orb-2" />
        <div className="srg-orb srg-orb-3" />

        <article className="srg-card-outer">
          <div className="srg-card">
            <div className="srg-status">
              <div>
                <span className="srg-dot" />
                Access Denied - Closed System
              </div>
              <p>ERR_AUTH_403</p>
            </div>

            <div className="srg-body">
              <div className="srg-lock-wrap">
                <div className="srg-ring" />
                <div className="srg-ring" />
                <div className="srg-ring" />
                <div className="srg-lock">LOCK</div>
              </div>

              <div className="srg-head">
                <p className="srg-eyebrow">
                  <span className="srg-dot" />
                  Closed System
                </p>
                <h1>Access Restricted</h1>
                <p>
                  This is a private Student Management System. Public registration is disabled and
                  only pre-approved users can sign in.
                </p>
              </div>

              <div className="srg-grid">
                <article className="srg-info">
                  <h3>Self-Registration</h3>
                  <p>Public sign-up is disabled by platform policy.</p>
                </article>
                <article className="srg-info">
                  <h3>First Login</h3>
                  <p>Password change is required on first login for security.</p>
                </article>
                <article className="srg-info">
                  <h3>Request Access</h3>
                  <p>Contact your administrator to provision an account.</p>
                </article>
                <article className="srg-info">
                  <h3>Security</h3>
                  <p>Credentials are hashed and role-based access is enforced.</p>
                </article>
              </div>

              <div className="srg-notice">
                Have credentials? Continue to login. First-time users will be prompted to set a new
                password before dashboard access.
              </div>

              <div className="srg-actions">
                <Link href="/auth/login" className="srg-btn-primary">
                  Go to Login
                </Link>
                <Link href="/contact" className="srg-btn-outline">
                  Contact Admin
                </Link>
              </div>

              <p className="srg-help">
                Need help? <Link href="/contact">Contact your administrator</Link> or return to{' '}
                <Link href="/">home page</Link>.
              </p>
            </div>
          </div>
        </article>
      </section>

      <HomeFooter />
    </main>
  )
}
