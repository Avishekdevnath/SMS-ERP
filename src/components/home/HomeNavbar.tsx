'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function HomeNavbar() {
  const pathname = usePathname()

  const navClass = (href: string) =>
    pathname === href ? 'sms-nav-link-active' : ''

  return (
    <nav className="sms-nav">
      <Link href="/" className="sms-nav-logo">
        <span className="sms-logo-icon">ERP</span>
        SMS ERP
      </Link>
      <ul className="sms-nav-links">
        <li>
          <Link href="/" className={navClass('/')}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/features" className={navClass('/features')}>
            Features
          </Link>
        </li>
        <li>
          <Link href="/auth/login">Login</Link>
        </li>
      </ul>
      <div className="sms-nav-actions">
        <Link href="/auth/register" className="sms-nav-btn">
          Get Started
        </Link>
      </div>
    </nav>
  )
}
