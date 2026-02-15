import { Orbitron, Syne } from 'next/font/google'
import ContactPageClient from '@/components/contact/ContactPageClient'
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

export default function ContactPage() {
  return (
    <main className={`sms-home sct-page ${orbitron.variable} ${syne.variable}`}>
      <HomeEffects />
      <HomeNavbar />
      <ContactPageClient />
      <HomeFooter />
    </main>
  )
}
