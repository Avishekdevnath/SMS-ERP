type SupportedEmailService = 'gmail'

export interface EmailConfig {
  service: SupportedEmailService
  user: string
  password: string
  fromName: string
  adminEmail: string
}

function getRequiredEnv(name: string): string {
  const value = process.env[name]
  if (!value || !value.trim()) {
    throw new Error(`${name} is not configured`)
  }
  return value.trim()
}

export function getEmailConfig(): EmailConfig {
  const service = getRequiredEnv('EMAIL_SERVICE').toLowerCase()
  if (service !== 'gmail') {
    throw new Error(`Unsupported EMAIL_SERVICE: ${service}`)
  }

  return {
    service: 'gmail',
    user: getRequiredEnv('EMAIL_USER'),
    password: getRequiredEnv('EMAIL_PASSWORD'),
    fromName: getRequiredEnv('EMAIL_FROM_NAME'),
    adminEmail: getRequiredEnv('ADMIN_EMAIL'),
  }
}

export function getEmailFromHeader(): string {
  const { fromName, user } = getEmailConfig()
  return `${fromName} <${user}>`
}
