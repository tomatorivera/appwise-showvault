import type { CastMember, CastMemberDTO } from "../types/cast.types";

export function toCastMember(dto: CastMemberDTO): CastMember {
  return {
    id: dto.person.id,
    realName: dto.person.name,
    characterName: dto.character.name,
    image: dto.person.image?.medium ?? '',
  }
}
