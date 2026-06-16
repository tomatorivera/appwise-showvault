import type { CastMember, CastMemberDTO, Season, SeasonDTO, Show, ShowDTO } from "./show.types";

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

export function toCastMember(dto: CastMemberDTO): CastMember {
  return {
    id: dto.person.id,
    realName: dto.person.name,
    characterName: dto.character.name,
    image: dto.person.image?.medium ?? ''
  }
}