# SMS ERP - Student Management ERP Platform

SMS ERP is a modern, role-based Student Management ERP built with Next.js, TypeScript, MongoDB, and Prisma. It helps institutes and training teams run admissions, mentoring, batch operations, mission tracking, and stakeholder dashboards from one system.

This repository is designed for teams that need a production-ready foundation for an education CRM/ERP with clean architecture, secure authentication flows, and scalable API patterns.

## Why SMS ERP

SMS ERP is focused on real operational needs:

- Centralized user and role management for `ADMIN`, `MANAGER`, `DEVELOPER`, `SRE`, `MENTOR`, and `STUDENT`
- Structured academic delivery through batches and missions
- Role-specific dashboard experiences
- Secure credential-based authentication APIs
- MongoDB data model with Prisma for maintainability and speed

If you are looking for a **Student Management System**, **Education ERP**, **Mentorship Management Platform**, or **Training Operations Dashboard**, this project gives you a strong starting point.

## Core Features

- Role-based user model with status tracking
- Authentication APIs (`register`, `login`, `change-password`)
- First-login password update flow
- Modular service layer via `src/lib`
- Prisma schema for users, profiles, batches, missions, and junction relationships
- Dashboard routes for each role
- Cloudinary-ready configuration for media workflows
- Email configuration layer for notification workflows

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Prisma ORM
- MongoDB Atlas / MongoDB
- Zustand (state management)
- Tailwind CSS
- Zod + React Hook Form
- ESLint

## Project Structure

```text
sms-erp/
  prisma/
    schema.prisma
  scripts/
    seed-users.ts
  src/
    app/
      api/
        auth/
          change-password/route.ts
          login/route.ts
          register/route.ts
      auth/
      dashboard/
    components/
    lib/
      prisma.ts
      cloudinary.ts
      email-config.ts
      utils.ts
    store/
    types/
  env.example
  package.json
```

## API Routes (Detailed)

Base path: `/api`

### 1) Register User

- Method: `POST`
- Route: `/api/auth/register`
- Purpose: Create a new user account with role-based access.

Request body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "StrongPassword123!",
  "role": "STUDENT"
}
```

Success response (`201`):

```json
{
  "user": {
    "id": "USER_ID",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "STUDENT",
    "status": "ACTIVE",
    "firstLogin": true,
    "createdAt": "2026-02-15T12:00:00.000Z",
    "updatedAt": "2026-02-15T12:00:00.000Z"
  }
}
```

Common errors:

- `400` Missing required fields / invalid role
- `409` User already exists
- `500` Registration failed

### 2) Login

- Method: `POST`
- Route: `/api/auth/login`
- Purpose: Authenticate user with email + password.

Request body:

```json
{
  "email": "john@example.com",
  "password": "StrongPassword123!"
}
```

Success response (`200`):

```json
{
  "user": {
    "id": "USER_ID",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "STUDENT",
    "status": "ACTIVE",
    "firstLogin": true,
    "createdAt": "2026-02-15T12:00:00.000Z",
    "updatedAt": "2026-02-15T12:00:00.000Z"
  },
  "firstLogin": true
}
```

Common errors:

- `400` Email and password are required
- `401` Invalid credentials / inactive account
- `500` Internal server error

### 3) Change Password

- Method: `POST`
- Route: `/api/auth/change-password`
- Purpose: Force first-time password update or regular password change.

Request body:

```json
{
  "email": "john@example.com",
  "currentPassword": "OldPassword123!",
  "newPassword": "NewStrongPassword123!"
}
```

Success response (`200`):

```json
{
  "message": "Password changed successfully",
  "user": {
    "id": "USER_ID",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "STUDENT",
    "status": "ACTIVE",
    "firstLogin": false,
    "createdAt": "2026-02-15T12:00:00.000Z",
    "updatedAt": "2026-02-15T12:10:00.000Z"
  }
}
```

Common errors:

- `400` Missing required fields
- `401` Current password incorrect
- `404` User not found
- `500` Internal server error

## Feature Explanations

### Authentication and Access Control

- Registration with role validation
- Secure password hashing (`bcryptjs`)
- Login with credential verification
- First-login password-change enforcement
- User status checks (`ACTIVE`, `BANNED`, `DELISTED`, `INACTIVE`)

### Role-Based Product Experience

- Dedicated dashboard routes for:
- `ADMIN`
- `MANAGER`
- `DEVELOPER`
- `SRE`
- `MENTOR`
- `STUDENT`
- Context-specific views and workflows by role

### Student Lifecycle and Mentorship Data Model

- User identity + role model
- Student, Mentor, and SRE profile extensions
- Batch management with lifecycle statuses
- Mission tracking under batches
- Junction relations:
- Student-Batch mapping
- Student-Mission mapping
- Mission-Mentor assignment

### Frontend UX Foundation

- App Router architecture with modular pages
- Typed form handling with `react-hook-form` + `zod`
- Global state management with Zustand
- Reusable components and utility-first styling

### Integrations Ready

- Cloudinary env-driven configuration for media uploads
- Email env-driven configuration for operational notifications
- External API placeholders for future integrations

### Developer Experience

- Type-safe codebase with TypeScript
- Prisma schema as single source of truth for data
- Linting and production build validation via npm scripts
- Seed script for rapid local/demo data bootstrapping

## Prerequisites

- Node.js 18.18+ (recommended: Node.js 20 LTS)
- npm 9+
- MongoDB connection string (local or Atlas)

## Environment Variables

Create a `.env.local` file in the project root.

Use `env.example` as the template and set all required values:

### Database

- `DATABASE_URL`

### Auth

- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`
- `JWT_SECRET`

### Email

- `EMAIL_SERVICE`
- `EMAIL_USER`
- `EMAIL_PASSWORD`
- `EMAIL_FROM_NAME`
- `ADMIN_EMAIL`

### Cloudinary

- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

### Optional External Integration

- `EXTERNAL_API_URL`
- `EXTERNAL_API_KEY`

Important:

- Never commit real secrets to Git.
- Use strong random values for all secrets.
- In production, define env vars in your hosting provider dashboard.

## Local Development Setup

1. Install dependencies:

```bash
npm install
```

2. Configure environment:

```bash
cp env.example .env.local
# Then edit .env.local
```

3. Generate Prisma client:

```bash
npx prisma generate
```

4. Push schema to database:

```bash
npx prisma db push
```

5. (Optional) Seed demo users:

```bash
npm run seed
```

6. Start the dev server:

```bash
npm run dev
```

7. Open the app:

- http://localhost:3000

## Production Build and Validation

Run these checks before every deployment:

```bash
npm run lint
npm run build
```

If both pass, the codebase is build-ready.

## Deployment Guide

### Option A: Vercel (Recommended for Next.js)

1. Push code to GitHub/GitLab/Bitbucket.
2. Import repository in Vercel.
3. Add all required environment variables from your `.env.local`.
4. Set `NEXTAUTH_URL` to your production domain.
5. Deploy.
6. After deploy, verify auth APIs and database connectivity.

### Option B: Node Server / VPS

1. Build the project:

```bash
npm install
npm run build
```

2. Configure production env vars on the server.
3. Start app:

```bash
npm run start
```

4. Run behind reverse proxy (Nginx/Caddy) with HTTPS.

## NPM Scripts

- `npm run dev` - Run local development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks
- `npm run seed` - Seed database with sample users

## Security Checklist

Before going live:

- Rotate and secure all secrets
- Set a valid production `NEXTAUTH_URL`
- Use strong email app password (not plain personal password)
- Restrict MongoDB network access and database user permissions
- Enable HTTPS on production domain
- Remove unused placeholder environment variables

## Product Positioning

SMS ERP is built for:

- EdTech startups
- Coaching institutes
- Mentorship programs
- Internal training teams
- Bootcamps and academy operations

It provides a practical base for scaling from an MVP to a full Student ERP with analytics, workflows, and automation.

## License

MIT License
