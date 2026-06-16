export type AuthContextValue = {
  user: { id: string; name: string; email: string } | null
  isAuthenticated: boolean
  error: string | null

  login: (email: string, password: string) => Promise<void> // async para simular latencia
  logout: () => void
}