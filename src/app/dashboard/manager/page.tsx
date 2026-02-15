'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/useAuthStore'
import { 
  BarChart3, 
  Users, 
  Target, 
  BookOpen,
  Plus,
  Settings,
  Award
} from 'lucide-react'

export default function ManagerDashboard() {
  const router = useRouter()
  const { user, isAuthenticated } = useAuthStore()
  const [activeTab, setActiveTab] = useState('overview')
  const [showBatchModal, setShowBatchModal] = useState(false)
  const [showMissionModal, setShowMissionModal] = useState(false)

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
              <p className="text-2xl font-semibold text-gray-900">324</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Target className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Batches</p>
              <p className="text-2xl font-semibold text-gray-900">8</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <BookOpen className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Missions</p>
              <p className="text-2xl font-semibold text-gray-900">24</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Award className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Mentors</p>
              <p className="text-2xl font-semibold text-gray-900">18</p>
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
              onClick={() => setShowBatchModal(true)}
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Users className="h-6 w-6 text-blue-600 mr-3" />
              <div className="text-left">
                <p className="font-medium text-gray-900">Create Batch</p>
                <p className="text-sm text-gray-500">Add new student batch</p>
              </div>
            </button>

            <button
              onClick={() => setShowMissionModal(true)}
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Target className="h-6 w-6 text-green-600 mr-3" />
              <div className="text-left">
                <p className="font-medium text-gray-900">Create Mission</p>
                <p className="text-sm text-gray-500">Add new learning mission</p>
              </div>
            </button>

            <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Award className="h-6 w-6 text-purple-600 mr-3" />
              <div className="text-left">
                <p className="font-medium text-gray-900">Assign Mentors</p>
                <p className="text-sm text-gray-500">Manage mentor assignments</p>
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
                <p className="text-sm text-gray-900">New batch &quot;2024-C&quot; created with 25 students</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">Mission &quot;Advanced React&quot; assigned to Batch 2024-A</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">Mentor Sarah Johnson assigned to 3 new students</p>
                <p className="text-xs text-gray-500">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderBatches = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Batch Management</h3>
        <button
          onClick={() => setShowBatchModal(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Batch
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="space-y-4">
            {[
              { name: 'Batch 2024-A', code: 'B24A', students: 28, missions: 4, status: 'ACTIVE', startDate: '2024-01-15' },
              { name: 'Batch 2024-B', code: 'B24B', students: 32, missions: 3, status: 'ACTIVE', startDate: '2024-02-01' },
              { name: 'Batch 2024-C', code: 'B24C', students: 25, missions: 2, status: 'ACTIVE', startDate: '2024-02-15' },
              { name: 'Batch 2023-D', code: 'B23D', students: 30, missions: 6, status: 'COMPLETED', startDate: '2023-09-01' }
            ].map((batch, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900">{batch.name}</h4>
                    <p className="text-sm text-gray-500">Code: {batch.code}</p>
                  </div>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                    batch.status === 'ACTIVE' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {batch.status}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 mb-3">
                  <div>
                    <span className="font-medium">Students:</span> {batch.students}
                  </div>
                  <div>
                    <span className="font-medium">Missions:</span> {batch.missions}
                  </div>
                  <div>
                    <span className="font-medium">Started:</span> {batch.startDate}
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                    View Details
                  </button>
                  <button className="px-3 py-1 text-sm bg-gray-600 text-white rounded hover:bg-gray-700">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderMissions = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Mission Management</h3>
        <button
          onClick={() => setShowMissionModal(true)}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Mission
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="space-y-4">
            {[
              { name: 'React Fundamentals', batch: 'Batch 2024-A', mentor: 'Sarah Johnson', students: 28, status: 'ACTIVE' },
              { name: 'Advanced JavaScript', batch: 'Batch 2024-A', mentor: 'Mike Chen', students: 28, status: 'ACTIVE' },
              { name: 'Node.js Backend', batch: 'Batch 2024-B', mentor: 'Alex Rodriguez', students: 32, status: 'ACTIVE' },
              { name: 'Database Design', batch: 'Batch 2024-B', mentor: 'Lisa Wang', students: 32, status: 'ACTIVE' }
            ].map((mission, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900">{mission.name}</h4>
                    <p className="text-sm text-gray-500">{mission.batch}</p>
                  </div>
                  <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                    {mission.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <span>Mentor: {mission.mentor}</span>
                  <span>Students: {mission.students}</span>
                </div>
                <div className="flex justify-end space-x-2">
                  <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                    View Progress
                  </button>
                  <button className="px-3 py-1 text-sm bg-gray-600 text-white rounded hover:bg-gray-700">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderMentors = () => (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Mentor Assignment</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {[
            { name: 'Sarah Johnson', email: 'sarah@example.com', students: 12, missions: 3, status: 'ACTIVE' },
            { name: 'Mike Chen', email: 'mike@example.com', students: 15, missions: 2, status: 'ACTIVE' },
            { name: 'Alex Rodriguez', email: 'alex@example.com', students: 8, missions: 1, status: 'ACTIVE' },
            { name: 'Lisa Wang', email: 'lisa@example.com', students: 18, missions: 4, status: 'ACTIVE' }
          ].map((mentor, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-medium text-gray-900">{mentor.name}</h4>
                  <p className="text-sm text-gray-500">{mentor.email}</p>
                </div>
                <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                  {mentor.status}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                <span>Students: {mentor.students}</span>
                <span>Missions: {mentor.missions}</span>
              </div>
              <div className="flex justify-end space-x-2">
                <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                  Assign Students
                </button>
                <button className="px-3 py-1 text-sm bg-gray-600 text-white rounded hover:bg-gray-700">
                  View Details
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
            <h4 className="font-medium text-gray-900 mb-4">System Settings</h4>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                <span className="ml-2 text-sm text-gray-700">Email notifications for batch updates</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                <span className="ml-2 text-sm text-gray-700">Weekly progress reports</span>
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
            <BarChart3 className="h-8 w-8 text-orange-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Manager Dashboard
              </h1>
              <p className="text-gray-600">
                Welcome back, {user.name}! Ready to manage our programs?
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'batches', label: 'Batches', icon: Users },
              { id: 'missions', label: 'Missions', icon: Target },
              { id: 'mentors', label: 'Mentors', icon: Award },
              { id: 'profile', label: 'Profile', icon: Settings }
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-orange-100 text-orange-700'
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
        {activeTab === 'batches' && renderBatches()}
        {activeTab === 'missions' && renderMissions()}
        {activeTab === 'mentors' && renderMentors()}
        {activeTab === 'profile' && renderProfile()}
      </div>

      {/* Batch Modal */}
      {showBatchModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Create New Batch</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Batch Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Batch 2024-D"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Batch Code</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., B24D"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowBatchModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowBatchModal(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Create Batch
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mission Modal */}
      {showMissionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Create New Mission</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mission Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Advanced React"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Batch</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select a batch</option>
                  <option>Batch 2024-A</option>
                  <option>Batch 2024-B</option>
                  <option>Batch 2024-C</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mentor</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select a mentor</option>
                  <option>Sarah Johnson</option>
                  <option>Mike Chen</option>
                  <option>Alex Rodriguez</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowMissionModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowMissionModal(false)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Create Mission
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 