// src/features/shows/useShow.ts
import { useQueries } from '@tanstack/react-query'
import { showService } from '../services/show.service'

export function useShow(id: number | undefined) {
  const [show, seasons, cast] = useQueries({
    queries: [
      {
        queryKey: ['show', id],
        queryFn: () => showService.getShow(id!),
        enabled: !!id,
      },
      {
        queryKey: ['show-seasons', id],
        queryFn: () => showService.getShowSeasons(id!),
        enabled: !!id,
      },
      {
        queryKey: ['show-cast', id],
        queryFn: () => showService.getShowCasting(id!),
        enabled: !!id,
      },
    ],
  })

  return { show, seasons, cast }
}
