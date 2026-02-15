'use client'

import Link from 'next/link'
import { Lock, Mail, AlertCircle } from 'lucide-react'

export default function RegisterPage() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-red-100">
            <Lock className="h-6 w-6 text-red-600" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Closed System
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            This is a private Student Management System
          </p>
        </div>

        <div className="bg-white py-8 px-6 shadow rounded-lg">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-yellow-100 mb-4">
              <AlertCircle className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Access Restricted
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              This system is only available to pre-approved users with fixed accounts. 
              If you believe you should have access, please contact your administrator.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-sm font-medium text-blue-900 mb-1">
                    First Time Login?
                  </p>
                  <p className="text-sm text-blue-700">
                    If you have received login credentials via email, you will be required 
                    to change your password on your first login for security.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/auth/login"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Go to Login
            </Link>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            Need help? Contact your system administrator
          </p>
        </div>
      </div>
    </div>
  )
} 