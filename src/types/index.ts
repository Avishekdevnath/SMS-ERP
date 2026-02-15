// User Roles
export enum UserRole {
  ADMIN = 'ADMIN',
  DEVELOPER = 'DEVELOPER',
  MANAGER = 'MANAGER',
  SRE = 'SRE',
  MENTOR = 'MENTOR',
  STUDENT = 'STUDENT'
}

// User Status
export enum UserStatus {
  ACTIVE = 'ACTIVE',
  BANNED = 'BANNED',
  DELISTED = 'DELISTED',
  INACTIVE = 'INACTIVE'
}

// Batch Status
export enum BatchStatus {
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  ARCHIVED = 'ARCHIVED',
  DRAFT = 'DRAFT'
}

// Mission Status
export enum MissionStatus {
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  PAUSED = 'PAUSED',
  DRAFT = 'DRAFT'
}

// User Types
export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  status: UserStatus
  firstLogin: boolean
  createdAt: Date
  updatedAt: Date
  studentProfile?: StudentProfile
  mentorProfile?: MentorProfile
  sreProfile?: SREProfile
}

export interface StudentProfile {
  id: string
  userId: string
  phone?: string
  address?: string
  emergencyContact?: string
  enrollmentDate: Date
  createdAt: Date
  updatedAt: Date
  user: User
  batches: StudentBatch[]
  missions: StudentMission[]
}

export interface MentorProfile {
  id: string
  userId: string
  phone?: string
  expertise: string[]
  bio?: string
  availability?: string
  createdAt: Date
  updatedAt: Date
  user: User
  missions: MissionMentor[]
}

export interface SREProfile {
  id: string
  userId: string
  phone?: string
  department?: string
  createdAt: Date
  updatedAt: Date
  user: User
}

// Batch Types
export interface Batch {
  id: string
  name: string
  code: string
  description?: string
  status: BatchStatus
  startDate: Date
  endDate?: Date
  maxStudents?: number
  createdAt: Date
  updatedAt: Date
  missions: Mission[]
  students: StudentBatch[]
}

// Mission Types
export interface Mission {
  id: string
  name: string
  description?: string
  batchId: string
  status: MissionStatus
  startDate?: Date
  endDate?: Date
  maxStudents?: number
  createdAt: Date
  updatedAt: Date
  batch: Batch
  students: StudentMission[]
  mentors: MissionMentor[]
}

// Junction Table Types
export interface StudentBatch {
  id: string
  studentId: string
  batchId: string
  joinedAt: Date
  status: string
  student: StudentProfile
  batch: Batch
}

export interface StudentMission {
  id: string
  studentId: string
  missionId: string
  joinedAt: Date
  status: string
  student: StudentProfile
  mission: Mission
}

export interface MissionMentor {
  id: string
  missionId: string
  mentorId: string
  assignedAt: Date
  status: string
  mission: Mission
  mentor: MentorProfile
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Pagination Types
export interface PaginationParams {
  page?: number
  limit?: number
  search?: string
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

// Form Types
export interface CreateUserForm {
  email: string
  name: string
  role: UserRole
  password: string
}

export interface UpdateUserForm {
  name?: string
  role?: UserRole
  status?: UserStatus
}

export interface CreateBatchForm {
  name: string
  code: string
  description?: string
  startDate: Date
  endDate?: Date
  maxStudents?: number
}

export interface CreateMissionForm {
  name: string
  description?: string
  batchId: string
  startDate?: Date
  endDate?: Date
  maxStudents?: number
}

// Dashboard Types
export interface DashboardStats {
  totalUsers: number
  totalStudents: number
  totalMentors: number
  totalBatches: number
  totalMissions: number
  activeStudents: number
  activeMentors: number
}

// Auth Types
export interface LoginForm {
  email: string
  password: string
}

export interface AuthUser {
  id: string
  email: string
  name: string
  role: UserRole
  status: UserStatus
  firstLogin: boolean
} 