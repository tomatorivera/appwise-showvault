export type CastMemberDTO = {
  person: {
    id: number
    name: string
    image: { medium: string; original: string } | null
  }
  character: {
    id: number
    name: string
    image: { medium: string; original: string }
  }
}

export type CastMember = {
  id: number
  realName: string
  characterName: string
  image: string
}