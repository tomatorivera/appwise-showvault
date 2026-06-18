export type CastMemberDTO = {
  person: { id: number; name: string; image: { medium: string, original: string } | null }
  character: { name: string }
}

export type CastMember = {
  id: number
  realName: string
  characterName: string
  image: string
}