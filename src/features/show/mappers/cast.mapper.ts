import type { CastMember, CastMemberDTO } from "../types/cast.types";

export function toCastMember(dto: CastMemberDTO): CastMember {
  return {
    id: dto.character.id,
    realName: dto.person.name,
    characterName: dto.character.name,
    image: dto.character.image?.medium ?? dto.person.image?.medium ?? '',
  }
}
