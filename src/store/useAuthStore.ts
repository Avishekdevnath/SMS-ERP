import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { UserRole, UserStatus, type AuthUser } from '@/types'

interface AuthState {
  user: AuthUser | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

interface AuthActions {
  login: (user: AuthUser) => void
  logout: () => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  clearError: () => void
  hasRole: (role: UserRole) => boolean
  hasAnyRole: (roles: UserRole[]) => boolean
  isActive: () => boolean
}

type AuthStore = AuthState & AuthActions

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      // State
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Actions
      login: (user: AuthUser) =>
        set({
          user,
          isAuthenticated: true,
          error: null,
        }),

      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
          error: null,
        }),

      setLoading: (loading: boolean) =>
        set({
          isLoading: loading,
        }),

      setError: (error: string | null) =>
        set({
          error,
        }),

      clearError: () =>
        set({
          error: null,
        }),

      // Role-based access control
      hasRole: (role: UserRole) => {
        const { user } = get()
        return user?.role === role
      },

      hasAnyRole: (roles: UserRole[]) => {
        const { user } = get()
        return user ? roles.includes(user.role) : false
      },

      isActive: () => {
        const { user } = get()
        return user?.status === UserStatus.ACTIVE
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
)

// Selector hooks for better performance
export const useUser = () => useAuthStore((state) => state.user)
export const useIsAuthenticated = () => useAuthStore((state) => state.isAuthenticated)
export const useIsLoading = () => useAuthStore((state) => state.isLoading)
export const useAuthError = () => useAuthStore((state) => state.error)

// Role-based selectors
export const useIsAdmin = () => useAuthStore((state) => state.hasRole(UserRole.ADMIN))
export const useIsDeveloper = () => useAuthStore((state) => state.hasRole(UserRole.DEVELOPER))
export const useIsManager = () => useAuthStore((state) => state.hasRole(UserRole.MANAGER))
export const useIsSRE = () => useAuthStore((state) => state.hasRole(UserRole.SRE))
export const useIsMentor = () => useAuthStore((state) => state.hasRole(UserRole.MENTOR))
export const useIsStudent = () => useAuthStore((state) => state.hasRole(UserRole.STUDENT))

// Staff role check (Admin, Developer, Manager, SRE, Mentor)
export const useIsStaff = () =>
  useAuthStore((state) =>
    state.hasAnyRole([
      UserRole.ADMIN,
      UserRole.DEVELOPER,
      UserRole.MANAGER,
      UserRole.SRE,
      UserRole.MENTOR,
    ])
  )

// Management role check (Admin, Developer, Manager)
export const useIsManagement = () =>
  useAuthStore((state) =>
    state.hasAnyRole([UserRole.ADMIN, UserRole.DEVELOPER, UserRole.MANAGER])
  ) 