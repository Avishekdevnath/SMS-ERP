import Link from "next/link";
import { 
  Users, 
  GraduationCap, 
  Headphones, 
  UserCheck, 
  Code,
  ArrowRight,
  CheckCircle,
  BarChart3
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Student Management System
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Streamline your educational institution with our comprehensive platform designed for students, mentors, and administrators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/login"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Every Role
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform provides specialized tools and features designed for different user roles in the educational ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Student Features */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Student</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Track course progress and assignments
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Access learning materials and resources
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Communicate with mentors and peers
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  View grades and performance analytics
                </li>
              </ul>
            </div>

            {/* Mentor Features */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Mentor</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Manage student progress and feedback
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Create and assign learning tasks
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Schedule one-on-one sessions
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Monitor student performance metrics
                </li>
              </ul>
            </div>

            {/* SRE Features */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Headphones className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">SRE</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Student relationship management
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Handle student inquiries and support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Coordinate between students and mentors
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Track student satisfaction and feedback
                </li>
              </ul>
            </div>

            {/* Manager Features */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <UserCheck className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Manager</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Oversee program operations and strategy
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Manage mentor assignments and workload
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Generate reports and analytics
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Monitor program performance and KPIs
                </li>
              </ul>
            </div>

            {/* Developer Features */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <Code className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Developer</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  System maintenance and updates
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Technical support and troubleshooting
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  API integration and customization
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Performance optimization and monitoring
                </li>
              </ul>
            </div>

            {/* Admin Features */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-lg">
                  <BarChart3 className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Admin</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  User management and permissions
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  System configuration and settings
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Data backup and security management
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Comprehensive system analytics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Mentors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-gray-600">Completed Missions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students and mentors who are already using our platform to achieve their goals.
          </p>
          <Link
            href="/auth/register"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Journey Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Student Management System</h3>
              <p className="text-gray-400">
                Empowering education through technology and innovation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">API</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Status</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Student Management System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
