# Student Management System (SMS) - Next.js

A comprehensive mentorship-focused Student Management System built with Next.js 15, TypeScript, and MongoDB.

## 🚀 Phase 1: Project Foundation (COMPLETED)

### ✅ What's Been Set Up

**Core Technologies:**
- Next.js 15.3.3 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- ESLint for code quality
- MongoDB with Prisma ORM

**Dependencies Installed:**
- `zustand` - State management
- `next-auth` - Authentication
- `prisma` - Database ORM
- `zod` - Schema validation
- `react-hook-form` - Form handling
- `recharts` - Data visualization
- `lucide-react` - Icons
- `clsx` & `tailwind-merge` - Utility classes

### 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Protected dashboard routes
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
├── lib/                   # Utilities and configurations
│   ├── prisma.ts         # Database client and utilities
│   └── utils.ts          # Common utility functions
├── hooks/                 # Custom React hooks
├── store/                 # Zustand state management
│   ├── useAuthStore.ts   # Authentication state
│   └── useUIStore.ts     # UI state (modals, notifications, etc.)
└── types/                 # TypeScript definitions
    └── index.ts          # All type definitions
prisma/
└── schema.prisma         # Database schema
```

### 🗄️ Database Schema

**Core Collections:**
- **User** - Base user model with roles (ADMIN, DEVELOPER, MANAGER, SRE, MENTOR, STUDENT)
- **StudentProfile** - Extended student information
- **MentorProfile** - Extended mentor information  
- **SREProfile** - Extended SRE information
- **Batch** - Student batches with status tracking
- **Mission** - Learning missions within batches
- **Junction Tables** - StudentBatch, StudentMission, MissionMentor for relationships

**Key Features:**
- Role-based access control (RBAC)
- Status tracking (ACTIVE, BANNED, DELISTED, etc.)
- Flexible relationship management
- Audit trails with timestamps

### 🔧 State Management

**Authentication Store (`useAuthStore`):**
- User authentication state
- Role-based access control
- Persistent login state
- Error handling

**UI Store (`useUIStore`):**
- Sidebar state management
- Modal management
- Notification system
- Theme preferences
- Loading states
- Form state tracking

### 🛠️ Utility Functions

**Common Utilities:**
- Date formatting and relative time
- Email and phone validation
- String manipulation
- Array operations
- Number formatting
- Status and role utilities
- Pagination helpers
- Error handling
- File utilities
- Debounce and throttle functions

### 📋 Next Steps

**Phase 2: Authentication & Core Infrastructure**
- [ ] NextAuth.js setup with JWT strategy
- [ ] Role-based middleware for route protection
- [ ] Login/logout flows
- [ ] Password reset functionality

**Phase 3: Core Dashboards**
- [ ] Student Dashboard (V1 MVP)
- [ ] Mentor Dashboard (V1 MVP)
- [ ] SRE Dashboard (V1 MVP)

**Phase 4: Advanced Features**
- [ ] Admin & Manager Dashboards
- [ ] Real-time features
- [ ] File upload system

## 🚀 Getting Started

1. **Clone and Install:**
   ```bash
   cd sms-erp
   npm install
   ```

2. **Environment Setup:**
   ```bash
   cp env.example .env.local
   # Edit .env.local with your MongoDB connection string
   ```

3. **Database Setup:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Run Development Server:**
   ```bash
   npm run dev
   ```

5. **Open Browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
