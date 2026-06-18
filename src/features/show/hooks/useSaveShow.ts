import { useLocation, useNavigate } from "react-router-dom";
import type { Show } from "../types/show.types";
import { useAppStore } from "../../../app/appStore";

/**
 * Gestionar el guardado y eliminación de shows de la lista,
 * controlando la autenticación del usuario
 * 
 * @param {Show | undefined} data : show con el cual trabajar 
 */
export const useSaveShow = (data: Show | undefined) => {
  const navigate = useNavigate()
  const location = useLocation()

  const saveShow = useAppStore((state) => state.saveShow)
  const unsaveShow = useAppStore((state) => state.unsaveShow)
  const isAuthenticated = useAppStore((state) => state.isAuthenticated)

  const handleSave = () => {
    if (!isAuthenticated) 
    {
      navigate('/login', { state: { from: location.pathname }, replace: true })
      return
    }

    if (!data) 
    {
      alert('Ocurrió un error guardando el show')
      return
    }

    saveShow(data, 'plan-to-watch')
  }

  const handleUnsave = () => {
    if (!isAuthenticated) 
    {
      navigate('/login', { state: { from: location.pathname }, replace: true })
      return
    }

    if (!data) 
    {
      alert('Ocurrió un error guardando el show')
      return
    }

    unsaveShow(data.id)
  }

  return {
    handleSave, 
    handleUnsave
  }
} 