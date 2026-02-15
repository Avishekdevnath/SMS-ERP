'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuthStore } from '@/store/useAuthStore'
import { 
  Menu, 
  X, 
  User, 
  LogOut, 
  Settings, 
  Bell,
  ChevronDown,
  GraduationCap,
  Users,
  BarChart3,
  Code,
  Headphones,
  UserCheck
} from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)
  const { user, isAuthenticated, logout } = useAuthStore()

  const getRoleIcon = (role: string) => {
    switch (role?.toUpperCase()) {
      case 'STUDENT':
        return <GraduationCap className="h-4 w-4" />
      case 'MENTOR':
        return <Users className="h-4 w-4" />
      case 'SRE':
        return <Headphones className="h-4 w-4" />
      case 'MANAGER':
        return <UserCheck className="h-4 w-4" />
      case 'DEVELOPER':
        return <Code className="h-4 w-4" />
      case 'ADMIN':
        return <BarChart3 className="h-4 w-4" />
      default:
        return <User className="h-4 w-4" />
    }
  }

  const getRoleColor = (role: string) => {
    switch (role?.toUpperCase()) {
      case 'STUDENT':
        return 'bg-blue-100 text-blue-800'
      case 'MENTOR':
        return 'bg-green-100 text-green-800'
      case 'SRE':
        return 'bg-purple-100 text-purple-800'
      case 'MANAGER':
        return 'bg-orange-100 text-orange-800'
      case 'DEVELOPER':
        return 'bg-gray-100 text-gray-800'
      case 'ADMIN':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getNavItems = () => {
    if (!isAuthenticated) {
      return [
        { href: '/', label: 'Home' },
        { href: '/features', label: 'Features' },
        { href: '/auth/login', label: 'Login' },
      ]
    }

    // Role-based navigation items
    switch (user?.role?.toUpperCase()) {
      case 'STUDENT':
        return [
          { href: '/dashboard', label: 'Dashboard' },
          { href: '/courses', label: 'Courses' },
          { href: '/assignments', label: 'Assignments' },
          { href: '/progress', label: 'Progress' },
          { href: '/mentors', label: 'Mentors' },
        ]
      case 'MENTOR':
        return [
          { href: '/dashboard', label: 'Dashboard' },
          { href: '/students', label: 'Students' },
          { href: '/assignments', label: 'Assignments' },
          { href: '/sessions', label: 'Sessions' },
          { href: '/reports', label: 'Reports' },
        ]
      case 'SRE':
        return [
          { href: '/dashboard', label: 'Dashboard' },
          { href: '/students', label: 'Students' },
          { href: '/inquiries', label: 'Inquiries' },
          { href: '/support', label: 'Support' },
          { href: '/feedback', label: 'Feedback' },
        ]
      case 'MANAGER':
        return [
          { href: '/dashboard', label: 'Dashboard' },
          { href: '/programs', label: 'Programs' },
          { href: '/mentors', label: 'Mentors' },
          { href: '/reports', label: 'Reports' },
          { href: '/analytics', label: 'Analytics' },
        ]
      case 'DEVELOPER':
        return [
          { href: '/dashboard', label: 'Dashboard' },
          { href: '/system', label: 'System' },
          { href: '/api', label: 'API' },
          { href: '/logs', label: 'Logs' },
          { href: '/monitoring', label: 'Monitoring' },
        ]
      case 'ADMIN':
        return [
          { href: '/dashboard', label: 'Dashboard' },
          { href: '/users', label: 'Users' },
          { href: '/settings', label: 'Settings' },
          { href: '/reports', label: 'Reports' },
          { href: '/system', label: 'System' },
        ]
      default:
        return [
          { href: '/dashboard', label: 'Dashboard' },
        ]
    }
  }

  const handleLogout = () => {
    logout()
    setIsProfileDropdownOpen(false)
    setIsMenuOpen(false)
  }

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">SMS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {getNavItems().map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side - Auth/Profile */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                {/* Notifications */}
                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Bell className="h-5 w-5" />
                </button>

                {/* Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getRoleColor(user?.role || '')}`}>
                      {getRoleIcon(user?.role || '')}
                    </div>
                    <span className="text-sm font-medium text-gray-700 hidden sm:block">
                      {user?.name}
                    </span>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </button>

                  {isProfileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                        <p className="text-xs text-gray-500">{user?.email}</p>
                        <span className={`inline-block mt-1 px-2 py-1 text-xs rounded-full ${getRoleColor(user?.role || '')}`}>
                          {user?.role}
                        </span>
                      </div>
                      <Link
                        href="/profile"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProfileDropdownOpen(false)}
                      >
                        <User className="h-4 w-4 mr-2" />
                        Profile
                      </Link>
                      <Link
                        href="/settings"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProfileDropdownOpen(false)}
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="hidden md:flex items-center space-x-4">
                {/* <Link
                  href="/auth/login"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Login
                </Link> */}
                <Link
                  href="/auth/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              {getNavItems().map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {!isAuthenticated && (
                <div className="pt-4 space-y-2">
                  {/* <Link
                    href="/auth/login"
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link> */}
                  <Link
                    href="/auth/register"
                    className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 
