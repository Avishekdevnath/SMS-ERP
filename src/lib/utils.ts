import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Utility function to merge Tailwind CSS classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Date formatting utilities
export function formatDate(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function formatDateTime(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function formatRelativeTime(date: Date | string): string {
  const d = new Date(date)
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - d.getTime()) / 1000)

  if (diffInSeconds < 60) {
    return 'Just now'
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60)
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`
  }

  const diffInHours = Math.floor(diffInMinutes / 60)
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`
  }

  const diffInDays = Math.floor(diffInHours / 24)
  if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`
  }

  return formatDate(d)
}

// Validation utilities
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

// String utilities
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str
  return str.slice(0, length) + '...'
}

// Array utilities
export function unique<T>(array: T[]): T[] {
  return [...new Set(array)]
}

export function groupBy<T, K extends string | number | symbol>(
  array: T[],
  key: (item: T) => K
): Record<K, T[]> {
  return array.reduce((groups, item) => {
    const group = key(item)
    groups[group] = groups[group] || []
    groups[group].push(item)
    return groups
  }, {} as Record<K, T[]>)
}

// Number utilities
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

export function formatPercentage(value: number, total: number): string {
  if (total === 0) return '0%'
  return Math.round((value / total) * 100) + '%'
}

// Status utilities
export function getStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case 'active':
    case 'completed':
      return 'text-green-600 bg-green-100'
    case 'pending':
    case 'draft':
      return 'text-yellow-600 bg-yellow-100'
    case 'banned':
    case 'delisted':
    case 'inactive':
      return 'text-red-600 bg-red-100'
    case 'paused':
      return 'text-orange-600 bg-orange-100'
    default:
      return 'text-gray-600 bg-gray-100'
  }
}

export function getStatusBadge(status: string): string {
  switch (status.toLowerCase()) {
    case 'active':
      return 'bg-green-100 text-green-800'
    case 'completed':
      return 'bg-blue-100 text-blue-800'
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'draft':
      return 'bg-gray-100 text-gray-800'
    case 'banned':
      return 'bg-red-100 text-red-800'
    case 'delisted':
      return 'bg-red-100 text-red-800'
    case 'inactive':
      return 'bg-gray-100 text-gray-800'
    case 'paused':
      return 'bg-orange-100 text-orange-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

// Role utilities
export function getRoleDisplayName(role: string): string {
  switch (role.toUpperCase()) {
    case 'ADMIN':
      return 'Administrator'
    case 'DEVELOPER':
      return 'Developer'
    case 'MANAGER':
      return 'Manager'
    case 'SRE':
      return 'Student Relationship Executive'
    case 'MENTOR':
      return 'Mentor'
    case 'STUDENT':
      return 'Student'
    default:
      return capitalize(role)
  }
}

export function getRoleColor(role: string): string {
  switch (role.toUpperCase()) {
    case 'ADMIN':
      return 'bg-purple-100 text-purple-800'
    case 'DEVELOPER':
      return 'bg-blue-100 text-blue-800'
    case 'MANAGER':
      return 'bg-indigo-100 text-indigo-800'
    case 'SRE':
      return 'bg-pink-100 text-pink-800'
    case 'MENTOR':
      return 'bg-green-100 text-green-800'
    case 'STUDENT':
      return 'bg-gray-100 text-gray-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

// Pagination utilities
export function getPaginationInfo(
  page: number,
  limit: number,
  total: number
): {
  currentPage: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
  startIndex: number
  endIndex: number
} {
  const totalPages = Math.ceil(total / limit)
  const currentPage = Math.max(1, Math.min(page, totalPages))
  const hasNext = currentPage < totalPages
  const hasPrev = currentPage > 1
  const startIndex = (currentPage - 1) * limit
  const endIndex = Math.min(startIndex + limit, total)

  return {
    currentPage,
    totalPages,
    hasNext,
    hasPrev,
    startIndex,
    endIndex,
  }
}

// Error handling utilities
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message
  }
  if (typeof error === 'string') {
    return error
  }
  return 'An unknown error occurred'
}

// File utilities
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

export function getFileExtension(filename: string): string {
  return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2)
}

// Debounce utility
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Throttle utility
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
} 