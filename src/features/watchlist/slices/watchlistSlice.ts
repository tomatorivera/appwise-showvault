import type { StateCreator } from 'zustand'
import type { WatchlistSlice, WatchStatus } from '../types/watchlist.types'

export const createWatchlistSlice: StateCreator<WatchlistSlice> = (
  set,
  get
) => ({
  items: [],

  saveShow: (show, status) => {
    set((state) => {
      if (state.isSaved(show.id))
        return state

      return {
        items: [
          ...state.items,
          { ...show, watchStatus: status, addedAt: Date.now() },
        ],
      }
    })
  },

  unsaveShow: (showId) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== showId),
    }))
  },

  changeSavedStatus: (showId, status) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === showId ? { ...item, watchStatus: status } : item
      ),
    }))
  },

  isSaved: (showId) => get().items.some((item) => item.id === showId),

  getStatus: (showId) =>
    get().items.find((item) => item.id === showId)?.watchStatus ?? null,

  totalPerStatus: () =>
    get().items.reduce(
      (acc, item) => {
        acc[item.watchStatus]++
        return acc
      },
      { 'plan-to-watch': 0, watching: 0, completed: 0 } as Record<
        WatchStatus,
        number
      >
    ),
})