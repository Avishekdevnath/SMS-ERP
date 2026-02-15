const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
const apiKey = process.env.CLOUDINARY_API_KEY
const apiSecret = process.env.CLOUDINARY_API_SECRET

export const cloudinary = {
  cloudName,
  apiKey,
  apiSecret,
}

export function getCloudinaryUploadUrl(): string {
  if (!cloudName) {
    throw new Error('NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is not configured')
  }

  return `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`
}

export function assertCloudinaryServerConfig(): void {
  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error('Cloudinary server configuration is incomplete')
  }
}
