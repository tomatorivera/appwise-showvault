/********* MODELS *********/

export type ShowDTO = {
  id: number
  name: string
  type: string
  language: string
  genres: string[]
  status: string // "Running" | "Ended" | "In Development" | ...
  premiered: string | null
  rating: { average: number | null }
  network: { name: string } | null
  image: { medium: string; original: string } | null
  summary: string | null
}

export type SearchShowDTO = {
  score: number,
  show: ShowDTO
}

export type Show = {
  id: number
  title: string
  status: 'Running' | 'Ended' | 'Unknown'
  year: number | null
  rating: number
  image: string
  genres: string[]
  summary: string
  network: string | 'Unknown'
  type: string
}

export type ShowPreview = Pick<
  Show,
  | 'id'
  | 'title'
  | 'status'
  | 'rating'
  | 'type'
  | 'genres'
  | 'image'
  | 'year'
  | 'network'
>

export type SavedShow = Show & {
  watchStatus: WatchStatus
  addedAt: number // Date.now()
}

export type WatchStatus = 'plan-to-watch' | 'watching' | 'completed'

export type ShowFilterKey = 'genre' | 'status'
export type ShowFilterConfig = { key: ShowFilterKey, match: (show: Show, value: string) => boolean }
export type ShowFilter = { key: ShowFilterKey, values: string[] }

/********* SERVICES *********/

export interface GetShowsParams {
  search?: string,
  page?: number
}

export interface IShowService {
  getShows: (search?: string, page?: number) => Promise<Show[]>
  getShow: (id: number) => Promise<Show>
}