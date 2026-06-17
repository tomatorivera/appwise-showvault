import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAppStore } from '../../app/appStore'

const ProtectedRoute = () => {
  const isAuthenticated = useAppStore((state) => state.isAuthenticated)
  const location = useLocation()

  if (!isAuthenticated)
    return <Navigate to="/login" state={{ from: location.pathname }} replace />

  return <Outlet />
}

export default ProtectedRoute
