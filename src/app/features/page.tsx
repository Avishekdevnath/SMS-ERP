import { Orbitron, Syne } from 'next/font/google'
import FeaturesPageClient from '@/components/features/FeaturesPageClient'
import HomeEffects from '@/components/home/HomeEffects'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
})

export default function FeaturesPage() {
  return (
    <main className={`sms-home sfx-page ${orbitron.variable} ${syne.variable}`}>
      <HomeEffects />
      <FeaturesPageClient />
    </main>
  )
}
