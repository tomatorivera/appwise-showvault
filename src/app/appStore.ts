import { create } from "zustand";
import type { AuthSlice } from "../features/auth/types/auth.type";
import { devtools, persist } from "zustand/middleware";
import { createAuthSlice } from "../features/auth/slices/authSlice";
import { createWatchlistSlice } from "../features/watchlist/slices/watchlistSlice";
import type { WatchlistSlice } from "../features/watchlist/types/watchlist.types";

export const useAppStore = create<AuthSlice & WatchlistSlice>() (
  devtools(
    persist(
      (...args) => ({
        ...createAuthSlice(...args),
        ...createWatchlistSlice(...args)
      }),
      {
        name: "showvault:v1",
        partialize: (state) => ({
          user: state.user,
          isAuthenticated: state.isAuthenticated,
          items: state.items,
          totalPerStatus: state.totalPerStatus
        })
      }
    )
  )
)