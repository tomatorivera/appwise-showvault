import { useQuery } from "@tanstack/react-query";
import { getShows } from "../../../settings/api.config";

// Función para pruebas
export function useShows() {
  return useQuery({
    queryKey: ["shows"],
    queryFn: () => getShows(),
  })
}