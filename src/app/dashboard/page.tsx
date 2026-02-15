'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/useAuthStore'

export default function DashboardPage() {
  const router = useRouter()
  const { user, isAuthenticated } = useAuthStore()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login')
      return
    }

    if (user) {
      // Redirect to role-specific dashboard
      switch (user.role) {
        case 'STUDENT':
          router.push('/dashboard/student')
          break
        case 'MENTOR':
          router.push('/dashboard/mentor')
          break
        case 'SRE':
          router.push('/dashboard/sre')
          break
        case 'MANAGER':
          router.push('/dashboard/manager')
          break
        case 'DEVELOPER':
          router.push('/dashboard/developer')
          break
        case 'ADMIN':
          router.push('/dashboard/admin')
          break
        default:
          router.push('/dashboard/student')
      }
    }
  }, [isAuthenticated, user, router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
    </div>
  )
} 