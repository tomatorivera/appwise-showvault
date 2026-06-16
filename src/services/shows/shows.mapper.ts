import type { Show, ShowDTO } from "./show.types";

export function toShow(dto: ShowDTO): Show {
  return {
    id: dto.id,
    title: dto.name,
    status: (dto.status as Show['status']) ?? 'Unknown',
    year: dto.premiered ? new Date(dto.premiered).getFullYear() : null,
    rating: dto.rating.average ?? 0,
    image: dto.image?.medium ?? '/placeholder.png',
    genres: dto.genres,
    summary: dto.summary?.replace(/<[^>]*>/g, '') ?? 'Sin descripción',
    network: dto.network?.name ?? 'Unknown',
    type: dto.type
  }
}
