import { getIcon } from '@/components/home/IconMap'
import { roles } from '@/components/home/homeData'

export default function RolesSection() {
  return (
    <section id="features" className="sms-section">
      <div className="sms-section-header">
        <p className="sms-eyebrow">Access Control Matrix</p>
        <h2 className="sms-section-title">
          Engineered for <span>Every Role</span>
        </h2>
        <p className="sms-section-sub">
          Six distinct operational modes, each with purpose-built tools and isolated workflows.
        </p>
      </div>

      <div className="sms-roles-grid">
        {roles.map((role) => {
          const Icon = getIcon(role.icon)
          return (
            <article
              key={role.id}
              className={`sms-role-card sms-role-${role.accent} sms-reveal`}
            >
              <span className="sms-card-number">{role.id}</span>
              <div className="sms-card-icon">
                <Icon size={22} />
              </div>
              <h3>{role.title}</h3>
              <ul>
                {role.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}
