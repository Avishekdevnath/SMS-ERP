import { getIcon } from '@/components/home/IconMap'

const nodes = [
  { position: 'top', icon: 'graduation-cap', label: 'Student' },
  { position: 'tr', icon: 'users', label: 'Mentor' },
  { position: 'right', icon: 'headphones', label: 'SRE' },
  { position: 'br', icon: 'bar-chart', label: 'Manager' },
  { position: 'bottom', icon: 'code', label: 'Dev' },
  { position: 'bl', icon: 'shield', label: 'Admin' },
  { position: 'left', icon: 'layers', label: 'Batch' },
  { position: 'tl', icon: 'check-circle', label: 'Mission' },
]

export default function SystemOverviewSection() {
  return (
    <section id="system" className="sms-overview">
      <div className="sms-overview-inner">
        <div className="sms-overview-visual sms-reveal">
          <div className="sms-system-map">
            <div className="sms-ring sms-ring-3" />
            <div className="sms-ring sms-ring-2" />
            <div className="sms-ring sms-ring-1" />
            <div className="sms-system-center">SMS ERP</div>
            {nodes.map((node) => {
              const Icon = getIcon(node.icon)
              return (
                <div className="sms-node" data-pos={node.position} key={node.label}>
                  <Icon size={18} />
                  <span className="sms-node-label">{node.label}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="sms-overview-text sms-reveal">
          <p className="sms-eyebrow">Architecture Overview</p>
          <h2>
            One System. <span>Unified Intelligence.</span>
          </h2>
          <p>
            SMS ERP centralizes your entire educational operation from student onboarding to
            mission completion into a single, coherent system.
          </p>
          <p>
            Built on Next.js App Router with MongoDB and Prisma, the platform scales from a
            single cohort to thousands of concurrent students without friction.
          </p>
          <div className="sms-feature-pills">
            {[
              'Role-Based Access',
              'First-Login Flow',
              'Batch Management',
              'Mission Tracking',
              'JWT Auth',
              'Cloudinary Media',
              'Email Notify',
              'Prisma ORM',
            ].map((pill) => (
              <span className="sms-pill" key={pill}>
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
