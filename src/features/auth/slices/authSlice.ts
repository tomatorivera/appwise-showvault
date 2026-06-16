import type { StateCreator } from "zustand";
import type { AuthSlice } from "../types/auth.type";
import { MOCK_USERS } from "../data/mockUsers";

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  
  login(email: string, password: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const existente = MOCK_USERS.find(
          (u) => u.email === email && u.password === password
        )

        if (existente) {
          set(
            {
              user: existente,
              isAuthenticated: true,
              error: null
            },
            false
          )
        } else {
          set(
            {
              error: 'Credenciales inválidas',
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