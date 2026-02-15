'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/Navbar'

export default function AppNavbar() {
  const pathname = usePathname()

  if (
    pathname === '/' ||
    pathname === '/features' ||
    pathname === '/auth/login' ||
    pathname === '/auth/register' ||
    pathname === '/about' ||
    pathname === '/contact'
  ) {
    return null
  }

  return <Navbar />
}
