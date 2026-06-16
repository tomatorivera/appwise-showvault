import type { StateCreator } from "zustand";
import type { AuthSlice } from "../types/auth.type";
import { MOCK_USERS } from "../data/mockUsers";

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoggingIn: false,
  
  login(email: string, password: string) {
    set({ isLoggingIn: true, error: null }, false)

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const existente = MOCK_USERS.find(
          (u) => u.email === email && u.password === password
        )

        if (existente) {
          set(
            {
              user: existente,
              isAuthenticated: true,
              isLoggingIn: false,
              error: null
            },
            false
          )
        } else {
          set(
            {
              isLoggingIn: false,
              error: 'Las credenciales ingresadas son inválidas',
            },
            false
          )
        }

        resolve()
      }, 3000)
    })
  },

  logout() {
    set({
      user: null,
      isAuthenticated: false,
      error: null
    }, false)
  },
})