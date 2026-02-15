'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAuthStore } from '@/store/useAuthStore'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import PasswordChangeModal from '@/components/PasswordChangeModal'
import HomeEffects from '@/components/home/HomeEffects'
import HomeNavbar from '@/components/home/HomeNavbar'
import HomeFooter from '@/components/home/HomeFooter'

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showPasswordChangeModal, setShowPasswordChangeModal] = useState(false)
  const [currentUser, setCurrentUser] = useState<{ email: string } | null>(null)
  const [rememberMe, setRememberMe] = useState(false)
  const router = useRouter()
  const { login, error, setError, clearError } = useAuthStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    clearError()

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Login failed')
      }

      // Check if this is first login
      if (result.firstLogin) {
        setCurrentUser(result.user)
        setShowPasswordChangeModal(true)
        setIsLoading(false)
        return
      }

      // Normal login flow
      login(result.user)
      router.push('/dashboard')
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Login failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handlePasswordChange = async (passwordData: { currentPassword: string; newPassword: string; confirmPassword: string }) => {
    try {
      if (!currentUser) {
        throw new Error('User session is missing. Please login again.')
      }

      const response = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: currentUser.email,
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Password change failed')
      }

      // Login with updated user data
      login(result.user)
      setShowPasswordChangeModal(false)
      router.push('/dashboard')
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Password change failed. Please try again.')
    }
  }

  return (
    <main className="sms-home slg-page">
      <HomeEffects />
      <HomeNavbar />

      <div className="slg-layout">
        <section className="slg-left">
          <div className="slg-orb slg-orb-1" />
          <div className="slg-orb slg-orb-2" />
          <p className="slg-eyebrow">Secure Access Portal</p>
          <h1>
            Welcome Back to <span>SMS ERP</span>
          </h1>
          <p className="slg-desc">
            Your unified command center for student management, mentoring, batch operations, and
            mission tracking.
          </p>
          <div className="slg-pills">
            <span>Student</span>
            <span>Mentor</span>
            <span>SRE</span>
            <span>Manager</span>
            <span>Developer</span>
            <span>Admin</span>
          </div>
          <div className="slg-note">
            <p>
              Session is encrypted end-to-end. Credentials are hashed with bcryptjs and never
              stored in plain text.
            </p>
          </div>
        </section>

        <section className="slg-right">
          <div className="slg-card">
            <div className="slg-header">
              <div className="slg-icon-wrap">ERP</div>
              <h2>Sign In</h2>
              <p>Enter your credentials to access the system</p>
            </div>

            {error ? (
              <div className="slg-error">
                <p>{error}</p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="slg-group">
                <label htmlFor="email">Email Address</label>
                <div className="slg-input-wrap">
                  <Mail className="slg-input-icon" size={16} />
                  <input
                    {...register('email')}
                    id="email"
                    type="email"
                    autoComplete="email"
                    className="slg-input"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                {errors.email ? <p className="slg-field-error">{errors.email.message}</p> : null}
              </div>

              <div className="slg-group">
                <label htmlFor="password">Password</label>
                <div className="slg-input-wrap">
                  <Lock className="slg-input-icon" size={16} />
                  <input
                    {...register('password')}
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    className="slg-input"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    className="slg-toggle"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
                {errors.password ? (
                  <p className="slg-field-error">{errors.password.message}</p>
                ) : null}
              </div>

              <div className="slg-options">
                <label className="slg-remember">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(event) => setRememberMe(event.target.checked)}
                  />
                  <span>Remember me</span>
                </label>
                <Link href="/auth/register" className="slg-link">
                  Need access?
                </Link>
              </div>

              <button type="submit" disabled={isLoading} className="slg-submit">
                {isLoading ? 'Authenticating...' : 'Initialize Session'}
              </button>
            </form>

            <div className="slg-divider">
              <span>Need help?</span>
            </div>

            <div className="slg-help">
              <p>
                Contact your administrator or <Link href="/auth/register">request an account</Link>
              </p>
            </div>

            <Link href="/" className="slg-back">
              Back to Home
            </Link>
          </div>
        </section>
      </div>

      <HomeFooter />

      <PasswordChangeModal
        isOpen={showPasswordChangeModal}
        onClose={() => setShowPasswordChangeModal(false)}
        onSubmit={handlePasswordChange}
        isLoading={isLoading}
      />
    </main>
  )
}
