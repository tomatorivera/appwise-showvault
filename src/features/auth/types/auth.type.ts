import type { User } from "./user.type"

export type AuthSlice = {
  user: User | null
  isAuthenticated: boolean
  error: string | null

  login: (email: string, password: string) => Promise<void> // async para simular latencia
  logout: () => void
}