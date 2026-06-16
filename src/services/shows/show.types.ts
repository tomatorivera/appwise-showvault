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

export type SeasonDTO = {
  id: number
  number: number
  episodeOrder: number | null
  premiereDate: string | null
  endDate: string | null
  image: { medium: string; original: string } | null
}

export type Season = {
  id: number
  number: number
  episodeOrder: number
  premiereDate: string
  endDate: string
  image: string
}

export type CastMemberDTO = {
  person: { id: number; name: string; image: { medium: string } | null }
  character: { name: string }
}

export type CastMember = {
  id: number
  realName: string
  characterName: string
  image: string
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
  status: WatchStatus
  addedAt: number // Date.now()
}

export type WatchStatus = 'plan-to-watch' | 'watching' | 'completed'