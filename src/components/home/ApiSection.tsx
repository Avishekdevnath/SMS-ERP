import { authApis } from '@/components/home/homeData'

export default function ApiSection() {
  return (
    <section id="api" className="sms-api-section">
      <div className="sms-section-header">
        <p className="sms-eyebrow">REST Endpoints</p>
        <h2 className="sms-section-title">
          Authentication <span>API</span>
        </h2>
        <p className="sms-section-sub">
          Three core endpoints handle the auth lifecycle: registration, login, and password
          rotation.
        </p>
      </div>

      <div className="sms-api-grid">
        {authApis.map((item) => (
          <article className="sms-api-card sms-reveal" key={item.route}>
            <span className="sms-api-method">{item.method}</span>
            <h3>{item.route}</h3>
            <p>{item.description}</p>
            <pre>{item.sample}</pre>
          </article>
        ))}
      </div>
    </section>
  )
}
