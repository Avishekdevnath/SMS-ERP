'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/useAuthStore'
import { 
  Bell, 
  Phone, 
  Users, 
  AlertTriangle,
  MessageSquare,
  BarChart3,
  Settings,
  Plus
} from 'lucide-react'

export default function SREDashboard() {
  const router = useRouter()
  const { user, isAuthenticated } = useAuthStore()
  const [activeTab, setActiveTab] = useState('overview')
  const [showCallModal, setShowCallModal] = useState(false)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login')
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-2xl font-semibold text-gray-900">156</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">At-Risk Students</p>
              <p className="text-2xl font-semibold text-gray-900">12</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Phone className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Calls Today</p>
              <p className="text-2xl font-semibold text-gray-900">8</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <MessageSquare className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending Tickets</p>
              <p className="text-2xl font-semibold text-gray-900">15</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => setShowCallModal(true)}
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Phone className="h-6 w-6 text-green-600 mr-3" />
              <div className="text-left">
                <p className="font-medium text-gray-900">Schedule Call</p>
                <p className="text-sm text-gray-500">Book student call</p>
              </div>
            </button>

            <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
              <div className="text-left">
                <p className="font-medium text-gray-900">At-Risk List</p>
                <p className="text-sm text-gray-500">View low performers</p>
              </div>
            </button>

            <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <MessageSquare className="h-6 w-6 text-purple-600 mr-3" />
              <div className="text-left">
                <p className="font-medium text-gray-900">Tickets</p>
                <p className="text-sm text-gray-500">Handle queries</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">Completed call with John Doe - attendance improved</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">New at-risk student identified: Sarah Smith</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">Resolved ticket for Mike Johnson</p>
                <p className="text-xs text-gray-500">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAtRiskList = () => (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">At-Risk Students</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {[
            { name: 'Sarah Smith', email: 'sarah@example.com', riskLevel: 'HIGH', attendance: 45, lastContact: '1 week ago', reason: 'Low attendance' },
            { name: 'Mike Johnson', email: 'mike@example.com', riskLevel: 'MEDIUM', attendance: 65, lastContact: '3 days ago', reason: 'Assignment delays' },
            { name: 'Emily Brown', email: 'emily@example.com', riskLevel: 'HIGH', attendance: 40, lastContact: '2 weeks ago', reason: 'No response to calls' },
            { name: 'David Wilson', email: 'david@example.com', riskLevel: 'MEDIUM', attendance: 70, lastContact: '5 days ago', reason: 'Progress concerns' }
          ].map((student, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-medium text-gray-900">{student.name}</h4>
                  <p className="text-sm text-gray-500">{student.email}</p>
                </div>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                  student.riskLevel === 'HIGH' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {student.riskLevel} RISK
                </span>
              </div>
              <div className="mb-3">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Attendance Rate</span>
                  <span>{student.attendance}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${
                      student.attendance < 50 ? 'bg-red-600' : 'bg-yellow-600'
                    }`}
                    style={{ width: `${student.attendance}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <p>Reason: {student.reason}</p>
                  <p>Last contact: {student.lastContact}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                    Call
                  </button>
                  <button className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700">
                    Email
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderCalls = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Scheduled Calls</h3>
        <button
          onClick={() => setShowCallModal(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" />
          Schedule Call
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="space-y-4">
            {[
              { student: 'Sarah Smith', date: '2024-01-20', time: '10:00 AM', purpose: 'Attendance follow-up', status: 'SCHEDULED' },
              { student: 'Mike Johnson', date: '2024-01-20', time: '2:00 PM', purpose: 'Progress review', status: 'SCHEDULED' },
              { student: 'Emily Brown', date: '2024-01-19', time: '3:00 PM', purpose: 'Motivation call', status: 'COMPLETED' }
            ].map((call, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{call.student}</h4>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                    call.status === 'SCHEDULED' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {call.status}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                  <span>{call.date}</span>
                  <span>{call.time}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">Purpose: {call.purpose}</p>
                <div className="flex justify-end space-x-2">
                  <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                    Start Call
                  </button>
                  <button className="px-3 py-1 text-sm bg-gray-600 text-white rounded hover:bg-gray-700">
                    Reschedule
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderTickets = () => (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Student Tickets</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {[
            { student: 'John Doe', subject: 'Technical issue with platform', status: 'OPEN', priority: 'HIGH' },
            { student: 'Sarah Smith', subject: 'Assignment submission problem', status: 'IN_PROGRESS', priority: 'MEDIUM' },
            { student: 'Mike Johnson', subject: 'Account access issue', status: 'RESOLVED', priority: 'LOW' }
          ].map((ticket, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-medium text-gray-900">{ticket.subject}</h4>
                  <p className="text-sm text-gray-500">From: {ticket.student}</p>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    ticket.priority === 'HIGH' ? 'bg-red-100 text-red-800' :
                    ticket.priority === 'MEDIUM' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {ticket.priority}
                  </span>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                    ticket.status === 'OPEN' ? 'bg-yellow-100 text-yellow-800' :
                    ticket.status === 'IN_PROGRESS' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {ticket.status}
                  </span>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                  Reply
                </button>
                <button className="px-3 py-1 text-sm bg-gray-600 text-white rounded hover:bg-gray-700">
                  Close
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderProfile = () => (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Profile & Settings</h3>
      </div>
      <div className="p-6">
        <div className="space-y-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Personal Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  defaultValue={user.name}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  defaultValue={user.email}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Notifications</h4>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                <span className="ml-2 text-sm text-gray-700">Email alerts for at-risk students</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                <span className="ml-2 text-sm text-gray-700">SMS notifications for urgent cases</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4">
            <Bell className="h-8 w-8 text-purple-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                SRE Dashboard
              </h1>
              <p className="text-gray-600">
                Welcome back, {user.name}! Ready to support our students?
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'atrisk', label: 'At-Risk List', icon: AlertTriangle },
              { id: 'calls', label: 'Calls', icon: Phone },
              { id: 'tickets', label: 'Tickets', icon: MessageSquare },
              { id: 'profile', label: 'Profile', icon: Settings }
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'atrisk' && renderAtRiskList()}
        {activeTab === 'calls' && renderCalls()}
        {activeTab === 'tickets' && renderTickets()}
        {activeTab === 'profile' && renderProfile()}
      </div>

      {/* Call Modal */}
      {showCallModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Schedule Call</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Student</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select a student</option>
                  <option>Sarah Smith</option>
                  <option>Mike Johnson</option>
                  <option>Emily Brown</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <input
                  type="time"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Purpose</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Attendance follow-up</option>
                  <option>Progress review</option>
                  <option>Motivation call</option>
                  <option>Technical support</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowCallModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowCallModal(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Schedule
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 