import type { Season, SeasonDTO } from "../types/season.types";

export function toSeason(dto: SeasonDTO): Season {
  return {
    id: dto.id,
    number: dto.number,
    episodeOrder: dto.episodeOrder ?? 0,
    premiereDate: dto.premiereDate ?? 'Desconocido',
    endDate: dto.endDate ?? 'Desconocido',
    image: dto.image?.medium ?? '',
    summary: dto.summary?.replace(/<[^>]*>/g, '') ?? 'Sin descripción',
  }
}
