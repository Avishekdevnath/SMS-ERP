export type FeatureTabKey = 'roles' | 'capabilities' | 'pricing' | 'demo'

export const featureTabs: Array<{ key: FeatureTabKey; label: string }> = [
  { key: 'roles', label: 'Roles' },
  { key: 'capabilities', label: 'Capabilities' },
  { key: 'pricing', label: 'Pricing' },
  { key: 'demo', label: 'Demo' },
]

export const roleItems = [
  {
    key: 'student',
    name: 'Student',
    short: 'Learning and progress tracking',
    accent: 'cyan',
    summary:
      'Track missions, monitor grades, and collaborate with mentors through a structured learner workflow.',
    features: [
      { label: 'Mission Tracking', text: 'Track assignment milestones and completion rates.' },
      { label: 'Performance Analytics', text: 'View grades, progress trends, and skill coverage.' },
      { label: 'Mentor Loop', text: 'Receive feedback and follow-up actions in one stream.' },
      { label: 'Resource Access', text: 'Access mission-specific learning material and references.' },
    ],
    permissions: ['View Missions', 'Submit Work', 'View Progress', 'Access Resources'],
  },
  {
    key: 'mentor',
    name: 'Mentor',
    short: 'Guidance and evaluation',
    accent: 'green',
    summary:
      'Manage student submissions, schedule sessions, and drive cohort outcomes with guided interventions.',
    features: [
      { label: 'Review Queue', text: 'Review submissions with clear status visibility.' },
      { label: 'Session Planner', text: 'Schedule one-on-one and group mentorship sessions.' },
      { label: 'Feedback Workflow', text: 'Deliver actionable feedback linked to each mission.' },
      { label: 'Cohort Insights', text: 'Track student-level and group-level performance trends.' },
    ],
    permissions: ['Manage Students', 'Review Submissions', 'Assign Tasks', 'Track Outcomes'],
  },
  {
    key: 'sre',
    name: 'SRE',
    short: 'Support and escalation',
    accent: 'violet',
    summary:
      'Coordinate student support operations, resolve blockers quickly, and maintain service quality.',
    features: [
      { label: 'Issue Tracking', text: 'Capture and prioritize student issues with status flow.' },
      { label: 'Escalation Matrix', text: 'Escalate unresolved items to mentors/managers rapidly.' },
      { label: 'Satisfaction Monitoring', text: 'Track support quality and response experience.' },
      { label: 'Communication Hub', text: 'Coordinate conversations across stakeholders.' },
    ],
    permissions: ['Manage Inquiries', 'Escalate Cases', 'Track Satisfaction', 'Coordinate Teams'],
  },
  {
    key: 'manager',
    name: 'Manager',
    short: 'Operations and outcomes',
    accent: 'orange',
    summary:
      'Oversee batch-level execution, mentor allocation, and KPI outcomes with operational control.',
    features: [
      { label: 'KPI Dashboard', text: 'Monitor completion, engagement, and attrition signals.' },
      { label: 'Batch Oversight', text: 'Supervise mission rollout across active cohorts.' },
      { label: 'Resource Allocation', text: 'Optimize mentor distribution and workload.' },
      { label: 'Reporting', text: 'Export actionable reports for planning and reviews.' },
    ],
    permissions: ['Manage Batches', 'Assign Mentors', 'View Reports', 'Set Targets'],
  },
  {
    key: 'developer',
    name: 'Developer',
    short: 'Platform and API operations',
    accent: 'light',
    summary:
      'Maintain platform reliability, integrations, and release quality across the application lifecycle.',
    features: [
      { label: 'System Maintenance', text: 'Deliver upgrades, patches, and performance tuning.' },
      { label: 'API Integration', text: 'Integrate external tools and internal service extensions.' },
      { label: 'Monitoring', text: 'Track logs and runtime health for quick intervention.' },
      { label: 'Troubleshooting', text: 'Resolve defects and support technical escalations.' },
    ],
    permissions: ['System Access', 'API Control', 'Error Monitoring', 'Deployment Operations'],
  },
  {
    key: 'admin',
    name: 'Admin',
    short: 'Governance and control',
    accent: 'red',
    summary:
      'Control users, policies, and system-wide settings with full administrative governance.',
    features: [
      { label: 'Access Control', text: 'Manage roles, statuses, and permission boundaries.' },
      { label: 'Configuration', text: 'Configure platform defaults and policy behavior.' },
      { label: 'Security Operations', text: 'Track suspicious activity and governance compliance.' },
      { label: 'Global Analytics', text: 'View full-system metrics across cohorts and roles.' },
    ],
    permissions: ['User Management', 'System Settings', 'Security Control', 'Global Reporting'],
  },
]

export const capabilities = [
  {
    id: '01',
    title: 'Authentication Pipeline',
    accent: 'cyan',
    items: ['Role-based login', 'First-login password change', 'Secure bcrypt password validation'],
    description: 'Built-in auth routes and role status checks for controlled access.',
  },
  {
    id: '02',
    title: 'Role-Aware Dashboards',
    accent: 'violet',
    items: ['Dedicated role views', 'Contextual widgets', 'Operational workflows by persona'],
    description: 'Separate workspaces for each role to reduce noise and increase focus.',
  },
  {
    id: '03',
    title: 'Batch and Mission Model',
    accent: 'green',
    items: ['Batch lifecycle states', 'Mission mapping', 'Mentor assignment relations'],
    description: 'Schema-driven academic workflow from cohort onboarding to completion.',
  },
  {
    id: '04',
    title: 'Analytics and Tracking',
    accent: 'orange',
    items: ['Progress indicators', 'Completion rates', 'Role-centric performance visibility'],
    description: 'Operational metrics that help teams identify momentum and risks.',
  },
  {
    id: '05',
    title: 'Media and Communication Ready',
    accent: 'cyan',
    items: ['Cloudinary env support', 'Email config abstraction', 'Extensible integration points'],
    description: 'Prepared infrastructure for media upload and communication workflows.',
  },
  {
    id: '06',
    title: 'Deployment-Ready Foundation',
    accent: 'red',
    items: ['Prisma prebuild generation', 'Production build validation', 'Vercel-compatible setup'],
    description: 'Hardened build process designed for modern cloud deployment.',
  },
]

export const pricingPlans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'for pilot teams',
    featured: false,
    ctaLabel: 'Create Account',
    ctaHref: '/auth/register',
    items: ['Core auth routes', 'Role dashboard foundation', 'Community support'],
  },
  {
    name: 'Pro',
    price: '$49',
    period: 'per month',
    featured: true,
    ctaLabel: 'Get Started',
    ctaHref: '/auth/register',
    items: ['Everything in Starter', 'Advanced feature modules', 'Priority email support'],
  },
  {
    name: 'Enterprise',
    price: '$199',
    period: 'per month',
    featured: false,
    ctaLabel: 'Contact Sales',
    ctaHref: '/auth/register',
    items: ['Everything in Pro', 'Custom workflow design', 'Dedicated onboarding support'],
  },
]

export const demoTabs = [
  {
    key: 'admin',
    label: 'Admin Dashboard',
    metrics: ['Total Users: 1,248', 'Active Batches: 24', 'Missions Live: 87', 'Health: 99.9%'],
  },
  {
    key: 'student',
    label: 'Student View',
    metrics: ['Batch: COHORT-07', 'Missions Done: 12/18', 'Grade Average: 87%', 'Mentor: Available'],
  },
  {
    key: 'mentor',
    label: 'Mentor Panel',
    metrics: ['My Students: 18', 'Pending Reviews: 7', 'Sessions This Week: 5', 'Cohort Avg: 84%'],
  },
]
