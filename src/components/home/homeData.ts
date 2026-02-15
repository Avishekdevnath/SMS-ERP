export type RoleCard = {
  id: string
  title: string
  icon: string
  accent: string
  items: string[]
}

export type TechItem = {
  icon: string
  name: string
  description: string
}

export type ApiItem = {
  method: 'POST'
  route: string
  description: string
  sample: string
}

export const heroStats = [
  { value: '1000+', label: 'Active Students' },
  { value: '50+', label: 'Expert Mentors' },
  { value: '100+', label: 'Missions Complete' },
  { value: '95%', label: 'Success Rate' },
]

export const roles: RoleCard[] = [
  {
    id: '01',
    title: 'Student',
    icon: 'graduation-cap',
    accent: 'cyan',
    items: [
      'Track course progress and assignments',
      'Access learning materials and resources',
      'Communicate with mentors and peers',
      'View grades and performance analytics',
    ],
  },
  {
    id: '02',
    title: 'Mentor',
    icon: 'users',
    accent: 'green',
    items: [
      'Manage student progress and feedback',
      'Create and assign learning tasks',
      'Schedule one-on-one sessions',
      'Monitor student performance metrics',
    ],
  },
  {
    id: '03',
    title: 'SRE',
    icon: 'headphones',
    accent: 'violet',
    items: [
      'Student relationship management',
      'Handle student inquiries and support',
      'Coordinate between students and mentors',
      'Track student satisfaction and feedback',
    ],
  },
  {
    id: '04',
    title: 'Manager',
    icon: 'bar-chart',
    accent: 'orange',
    items: [
      'Oversee program operations and strategy',
      'Manage mentor assignments and workload',
      'Generate reports and analytics',
      'Monitor program performance and KPIs',
    ],
  },
  {
    id: '05',
    title: 'Developer',
    icon: 'code',
    accent: 'light',
    items: [
      'System maintenance and updates',
      'Technical support and troubleshooting',
      'API integration and customization',
      'Performance optimization and monitoring',
    ],
  },
  {
    id: '06',
    title: 'Admin',
    icon: 'shield',
    accent: 'red',
    items: [
      'User management and permissions',
      'System configuration and settings',
      'Data backup and security management',
      'Comprehensive system analytics',
    ],
  },
]

export const techStack: TechItem[] = [
  { icon: 'zap', name: 'Next.js 15', description: 'App Router, SSR, API Routes' },
  { icon: 'atom', name: 'React 19', description: 'Concurrent rendering foundation' },
  { icon: 'diamond', name: 'TypeScript', description: 'End-to-end type safety' },
  { icon: 'leaf', name: 'MongoDB', description: 'Atlas-ready NoSQL storage' },
  { icon: 'layers', name: 'Prisma ORM', description: 'Schema-first data layer' },
  { icon: 'palette', name: 'Tailwind CSS', description: 'Utility-first styling' },
  { icon: 'boxes', name: 'Zustand', description: 'Minimal global state' },
  { icon: 'check-circle', name: 'Zod + RHF', description: 'Validated form workflows' },
]

export const authApis: ApiItem[] = [
  {
    method: 'POST',
    route: '/api/auth/register',
    description:
      'Create a new user account with validated role assignment and secure password hashing.',
    sample: `{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "StrongPass123!",
  "role": "STUDENT"
}`,
  },
  {
    method: 'POST',
    route: '/api/auth/login',
    description:
      'Authenticate with email and password. Returns user data and firstLogin flag.',
    sample: `{
  "email": "john@example.com",
  "password": "StrongPass123!"
}`,
  },
  {
    method: 'POST',
    route: '/api/auth/change-password',
    description:
      'Force first-login password reset or regular credential rotation.',
    sample: `{
  "email": "john@example.com",
  "currentPassword": "Old123!",
  "newPassword": "New456!"
}`,
  },
]

export const footerLinks = {
  platform: ['Features', 'Pricing', 'API Docs', 'Documentation'],
  support: ['Help Center', 'Contact Us', 'Status', 'Community'],
  company: ['About', 'Blog', 'Careers', 'Privacy'],
}
