import type { ShowFilterConfig } from "../types/show.types";

export const FILTERS: ShowFilterConfig[] = [
  { key: "genre", match: (show, value) => show.genres.includes(value) },
  { key: "status", match: (show, value) => show.status === value }
]