import { Orbitron, Syne } from 'next/font/google'
import ApiSection from '@/components/home/ApiSection'
import CtaSection from '@/components/home/CtaSection'
import HeroSection from '@/components/home/HeroSection'
import HomeEffects from '@/components/home/HomeEffects'
import HomeFooter from '@/components/home/HomeFooter'
import HomeNavbar from '@/components/home/HomeNavbar'
import RolesSection from '@/components/home/RolesSection'
import SystemOverviewSection from '@/components/home/SystemOverviewSection'
import TechStackSection from '@/components/home/TechStackSection'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
})

export default function Home() {
  return (
    <main className={`sms-home ${orbitron.variable} ${syne.variable}`}>
      <HomeEffects />
      <HomeNavbar />
      <HeroSection />
      <RolesSection />
      <SystemOverviewSection />
      <TechStackSection />
      <ApiSection />
      <CtaSection />
      <HomeFooter />
    </main>
  )
}
