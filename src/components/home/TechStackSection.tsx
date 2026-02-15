import { getIcon } from '@/components/home/IconMap'
import { techStack } from '@/components/home/homeData'

export default function TechStackSection() {
  return (
    <section id="tech" className="sms-tech-section">
      <div className="sms-section-header">
        <p className="sms-eyebrow">Technology Foundation</p>
        <h2 className="sms-section-title">
          Built on <span>Modern Stack</span>
        </h2>
      </div>

      <div className="sms-tech-grid">
        {techStack.map((item) => {
          const Icon = getIcon(item.icon)
          return (
            <article className="sms-tech-item sms-reveal" key={item.name}>
              <div className="sms-tech-icon">
                <Icon size={22} />
              </div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
