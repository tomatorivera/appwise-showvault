import { create } from "zustand";
import type { AuthSlice } from "../features/auth/types/auth.type";
import { devtools, persist } from "zustand/middleware";
import { createAuthSlice } from "../features/auth/slices/authSlice";

export const useAppStore = create<AuthSlice>() (
  devtools(
    persist(
      (...args) => ({
        ...createAuthSlice(...args)
      }),
      {
        name: "showvault:v1",
        partialize: (state) => ({
          user: state.user,
          isAuthenticated: state.isAuthenticated
        })
      }
    )
  )
)