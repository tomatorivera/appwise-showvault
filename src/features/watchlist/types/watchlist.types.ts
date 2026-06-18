import type { SavedShow, Show } from "../../show/types/show.types"

export type WatchStatus = 'plan-to-watch' | 'watching' | 'completed'

export type WatchlistSlice = {
  items: Record<number, SavedShow[]> // USER_ID: SHOWS SAVED
  saveShow: (show: Show, status: WatchStatus) => void
  unsaveShow: (showId: number) => void
  changeStatus: (showId: number, status: WatchStatus) => void
  isSaved: (showId: number) => boolean
  getStatus: (showId: number) => WatchStatus | null
  totalPerStatus: () => Record<WatchStatus, number>
}
