import type { StateCreator } from 'zustand'
import type { WatchlistSlice, WatchStatus } from '../types/watchlist.types'
import type { AuthSlice } from '../../auth/types/auth.type'

export const createWatchlistSlice: StateCreator<AuthSlice & WatchlistSlice, [], [], WatchlistSlice> = (
  set,
  get
) => ({
  items: {},

  saveShow: (show, status) => {
    const userId = get().user?.id
    if (!userId)
      return

    set((state) => {
      if (state.isSaved(show.id))
        return state

      return {
        items: {
          ...state.items,
          [userId]: [
            ...(state.items[userId] ?? []),
            { ...show, watchStatus: status, addedAt: Date.now() },
          ],
        },
      }
    })
  },

  unsaveShow: (showId) => {
    const userId = get().user?.id
    if (!userId)
      return

    set((state) => ({
      items: {
        ...state.items,
        [userId]: state.items[userId].filter((item) => item.id !== showId),
      },
    }))
  },

  changeStatus: (showId, status) => {
    const userId = get().user?.id
    if (!userId)
      return

    set((state) => ({
      items: {
        ...state.items,
        [userId]: state.items[userId].map((item) =>
          item.id === showId ? { ...item, watchStatus: status } : item
        ),
      },
    }))
  },

  isSaved: (showId) => {
    const userId = get().user?.id
    if (!userId)
      return false

    return (get().items[userId] ?? []).some((item) => item.id === showId)
  },

  getStatus: (showId) => {
    const userId = get().user?.id
    if (!userId)
      return null

    return get().items[userId]?.find((item) => item.id === showId)?.watchStatus ?? null
  },
   
  totalPerStatus: () => {
    const userId = get().user?.id
    if (!userId) 
      return {
        'plan-to-watch': 0,
        watching: 0,
        completed: 0,
      } as Record<WatchStatus, number>

    return get().items[userId].reduce(
      (acc, item) => {
        acc[item.watchStatus]++
        return acc
      },
      { 
        'plan-to-watch': 0, 
        watching: 0, 
        completed: 0 
      } as Record<WatchStatus, number>
    )
  }
})