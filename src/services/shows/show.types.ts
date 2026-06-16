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

export type ShowPreview = Pick<
  Show,
  'id' | 'title' | 'status' | 'rating' | 'type' | 'genres' | 'image' | 'year' | 'network'
>
