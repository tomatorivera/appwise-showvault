export type SeasonDTO = {
  id: number
  number: number
  episodeOrder: number | null
  premiereDate: string | null
  endDate: string | null
  image: { medium: string; original: string } | null
  summary: string | null
}

export type Season = {
  id: number
  number: number
  episodeOrder: number
  premiereDate: string
  endDate: string
  image: string
  summary: string
}