import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UIState {
  // Sidebar state
  sidebarOpen: boolean
  
  // Modal states
  modals: {
    [key: string]: boolean
  }
  
  // Notifications
  notifications: Array<{
    id: string
    type: 'success' | 'error' | 'warning' | 'info'
    title: string
    message: string
    duration?: number
  }>
  
  // Theme
  theme: 'light' | 'dark' | 'system'
  
  // Loading states
  loadingStates: {
    [key: string]: boolean
  }
  
  // Form states
  formStates: {
    [key: string]: {
      isDirty: boolean
      isValid: boolean
      errors: Record<string, string>
    }
  }
}

interface UIActions {
  // Sidebar actions
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
  
  // Modal actions
  openModal: (modalId: string) => void
  closeModal: (modalId: string) => void
  closeAllModals: () => void
  
  // Notification actions
  addNotification: (notification: Omit<UIState['notifications'][0], 'id'>) => void
  removeNotification: (id: string) => void
  clearNotifications: () => void
  
  // Theme actions
  setTheme: (theme: 'light' | 'dark' | 'system') => void
  
  // Loading actions
  setLoading: (key: string, loading: boolean) => void
  clearLoading: (key: string) => void
  
  // Form actions
  setFormState: (
    formId: string,
    state: Partial<UIState['formStates'][string]>
  ) => void
  clearFormState: (formId: string) => void
}

type UIStore = UIState & UIActions

export const useUIStore = create<UIStore>()(
  persist(
    (set, get) => ({
      // State
      sidebarOpen: false,
      modals: {},
      notifications: [],
      theme: 'system',
      loadingStates: {},
      formStates: {},

      // Sidebar actions
      toggleSidebar: () =>
        set((state) => ({
          sidebarOpen: !state.sidebarOpen,
        })),

      setSidebarOpen: (open: boolean) =>
        set({
          sidebarOpen: open,
        }),

      // Modal actions
      openModal: (modalId: string) =>
        set((state) => ({
          modals: {
            ...state.modals,
            [modalId]: true,
          },
        })),

      closeModal: (modalId: string) =>
        set((state) => ({
          modals: {
            ...state.modals,
            [modalId]: false,
          },
        })),

      closeAllModals: () =>
        set({
          modals: {},
        }),

      // Notification actions
      addNotification: (notification) => {
        const id = Math.random().toString(36).substr(2, 9)
        const newNotification = {
          ...notification,
          id,
          duration: notification.duration || 5000,
        }

        set((state) => ({
          notifications: [...state.notifications, newNotification],
        }))

        // Auto-remove notification after duration
        if (newNotification.duration > 0) {
          setTimeout(() => {
            get().removeNotification(id)
          }, newNotification.duration)
        }
      },

      removeNotification: (id: string) =>
        set((state) => ({
          notifications: state.notifications.filter((n) => n.id !== id),
        })),

      clearNotifications: () =>
        set({
          notifications: [],
        }),

      // Theme actions
      setTheme: (theme: 'light' | 'dark' | 'system') =>
        set({
          theme,
        }),

      // Loading actions
      setLoading: (key: string, loading: boolean) =>
        set((state) => ({
          loadingStates: {
            ...state.loadingStates,
            [key]: loading,
          },
        })),

      clearLoading: (key: string) =>
        set((state) => {
          const newLoadingStates = { ...state.loadingStates }
          delete newLoadingStates[key]
          return {
            loadingStates: newLoadingStates,
          }
        }),

      // Form actions
      setFormState: (formId: string, state) =>
        set((uiState) => ({
          formStates: {
            ...uiState.formStates,
            [formId]: {
              ...uiState.formStates[formId],
              ...state,
            },
          },
        })),

      clearFormState: (formId: string) =>
        set((state) => {
          const newFormStates = { ...state.formStates }
          delete newFormStates[formId]
          return {
            formStates: newFormStates,
          }
        }),
    }),
    {
      name: 'ui-storage',
      partialize: (state) => ({
        theme: state.theme,
        sidebarOpen: state.sidebarOpen,
      }),
    }
  )
)

// Selector hooks for better performance
export const useSidebarOpen = () => useUIStore((state) => state.sidebarOpen)
export const useTheme = () => useUIStore((state) => state.theme)
export const useNotifications = () => useUIStore((state) => state.notifications)

// Modal selectors
export const useModal = (modalId: string) =>
  useUIStore((state) => state.modals[modalId] || false)

// Loading selectors
export const useLoading = (key: string) =>
  useUIStore((state) => state.loadingStates[key] || false)

// Form selectors
export const useFormState = (formId: string) =>
  useUIStore((state) => state.formStates[formId])

// Utility functions
export const showSuccessNotification = (title: string, message: string) => {
  useUIStore.getState().addNotification({
    type: 'success',
    title,
    message,
  })
}

export const showErrorNotification = (title: string, message: string) => {
  useUIStore.getState().addNotification({
    type: 'error',
    title,
    message,
  })
}

export const showWarningNotification = (title: string, message: string) => {
  useUIStore.getState().addNotification({
    type: 'warning',
    title,
    message,
  })
}

export const showInfoNotification = (title: string, message: string) => {
  useUIStore.getState().addNotification({
    type: 'info',
    title,
    message,
  })
} 