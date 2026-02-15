import Link from 'next/link'
import { footerLinks } from '@/components/home/homeData'

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="sms-footer-col">
      <h4>{title}</h4>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <Link href="#">{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function HomeFooter() {
  return (
    <footer className="sms-footer">
      <div className="sms-footer-inner">
        <div className="sms-footer-brand">
          <h3>SMS ERP</h3>
          <p>
            Empowering education through technology and innovation for EdTech startups, institutes,
            bootcamps, and training teams.
          </p>
        </div>

        <FooterColumn title="Platform" links={footerLinks.platform} />
        <FooterColumn title="Support" links={footerLinks.support} />
        <FooterColumn title="Company" links={footerLinks.company} />
      </div>

      <div className="sms-footer-bottom">
        <p>Copyright 2026 SMS ERP. All rights reserved.</p>
        <div className="sms-footer-status">
          <span className="sms-dot" />
          All systems operational
        </div>
      </div>
    </footer>
  )
}
