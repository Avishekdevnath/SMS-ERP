'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import HomeNavbar from '@/components/home/HomeNavbar'
import HomeFooter from '@/components/home/HomeFooter'
import {
  capabilities,
  demoTabs,
  featureTabs,
  pricingPlans,
  roleItems,
  type FeatureTabKey,
} from '@/components/features/featuresData'

function FeaturesHero({
  activeTab,
  setActiveTab,
}: {
  activeTab: FeatureTabKey
  setActiveTab: (tab: FeatureTabKey) => void
}) {
  return (
    <section className="sfx-hero">
      <div className="sfx-orb sfx-orb-1" />
      <div className="sfx-orb sfx-orb-2" />
      <p className="sfx-breadcrumb">
        <span>Home</span>
        <span>/</span>
        <span className="sfx-active">Features</span>
      </p>
      <h1>
        Platform <span>Capabilities</span>
      </h1>
      <p>
        Explore role architecture, operational capabilities, pricing structure, and dashboard
        experience of SMS ERP.
      </p>
      <div className="sfx-tabbar">
        {featureTabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={activeTab === tab.key ? 'sfx-tab active' : 'sfx-tab'}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </section>
  )
}

function RolesTab() {
  const [activeRole, setActiveRole] = useState(roleItems[0].key)
  const role = useMemo(
    () => roleItems.find((item) => item.key === activeRole) ?? roleItems[0],
    [activeRole]
  )

  return (
    <section className="sfx-panel">
      <div className="sfx-roles-layout">
        <aside className="sfx-role-sidebar">
          {roleItems.map((item) => (
            <button
              type="button"
              key={item.key}
              className={item.key === activeRole ? `sfx-role-tab active ${item.accent}` : `sfx-role-tab ${item.accent}`}
              onClick={() => setActiveRole(item.key)}
            >
              <div>
                <strong>{item.name}</strong>
                <span>{item.short}</span>
              </div>
            </button>
          ))}
        </aside>
        <article className={`sfx-role-detail ${role.accent}`}>
          <p className="sfx-eyebrow">Role Profile</p>
          <h2>{role.name}</h2>
          <p className="sfx-lead">{role.summary}</p>
          <div className="sfx-role-grid">
            {role.features.map((feature) => (
              <div key={feature.label} className="sfx-role-card">
                <h3>{feature.label}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
          <div className="sfx-tags">
            {role.permissions.map((permission) => (
              <span key={permission}>{permission}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

function CapabilitiesTab() {
  return (
    <section className="sfx-panel">
      <div className="sfx-cap-grid">
        {capabilities.map((cap) => (
          <article key={cap.id} className={`sfx-cap-card ${cap.accent}`}>
            <p className="sfx-cap-num">{cap.id}</p>
            <h3>{cap.title}</h3>
            <p>{cap.description}</p>
            <ul>
              {cap.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function PricingTab() {
  return (
    <section className="sfx-panel">
      <div className="sfx-pricing-grid">
        {pricingPlans.map((plan) => (
          <article key={plan.name} className={plan.featured ? 'sfx-plan featured' : 'sfx-plan'}>
            {plan.featured ? <span className="sfx-plan-badge">Most Popular</span> : null}
            <h3>{plan.name}</h3>
            <p className="sfx-price">{plan.price}</p>
            <p className="sfx-period">{plan.period}</p>
            <ul>
              {plan.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href={plan.ctaHref} className={plan.featured ? 'sfx-btn-fill' : 'sfx-btn-outline'}>
              {plan.ctaLabel}
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

function DemoTab() {
  const [activeDemo, setActiveDemo] = useState(demoTabs[0].key)
  const tab = demoTabs.find((item) => item.key === activeDemo) ?? demoTabs[0]

  return (
    <section className="sfx-panel">
      <div className="sfx-demo-tabs">
        {demoTabs.map((item) => (
          <button
            type="button"
            key={item.key}
            onClick={() => setActiveDemo(item.key)}
            className={item.key === activeDemo ? 'active' : ''}
          >
            {item.label}
          </button>
        ))}
      </div>
      <article className="sfx-demo-screen">
        <div className="sfx-demo-header">
          <span>Preview</span>
          <strong>{tab.label}</strong>
        </div>
        <div className="sfx-demo-metrics">
          {tab.metrics.map((metric) => (
            <div key={metric}>{metric}</div>
          ))}
        </div>
      </article>
    </section>
  )
}

function BottomCta() {
  return (
    <section className="sfx-bottom-cta">
      <h2>
        Ready to <span>Deploy?</span>
      </h2>
      <p>Clone the repo, configure your environment variables, and launch quickly.</p>
      <div className="sfx-bottom-actions">
        <Link href="/auth/register" className="sfx-btn-fill">
          Start Free
        </Link>
        <Link href="/" className="sfx-btn-outline">
          Back to Home
        </Link>
      </div>
    </section>
  )
}

export default function FeaturesPageClient() {
  const [activeTab, setActiveTab] = useState<FeatureTabKey>('roles')

  return (
    <>
      <HomeNavbar />
      <FeaturesHero activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="sfx-content">
        {activeTab === 'roles' ? <RolesTab /> : null}
        {activeTab === 'capabilities' ? <CapabilitiesTab /> : null}
        {activeTab === 'pricing' ? <PricingTab /> : null}
        {activeTab === 'demo' ? <DemoTab /> : null}
      </div>

      <BottomCta />
      <HomeFooter />
    </>
  )
}
