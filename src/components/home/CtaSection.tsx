import Link from 'next/link'

export default function CtaSection() {
  return (
    <section className="sms-cta-section">
      <div className="sms-cta-bg" />
      <h2 className="sms-cta-title">
        <span>Ready to Launch?</span>
        <span className="sms-gradient-text">Transform Your Institution.</span>
      </h2>
      <p className="sms-cta-sub">
        Join students and mentors already operating on SMS ERP. Your next cohort is one click
        away.
      </p>
      <Link href="/auth/register" className="sms-btn-primary">
        Initialize Account
      </Link>
    </section>
  )
}
