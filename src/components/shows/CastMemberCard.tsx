import type { CastMember } from "../../services/shows/show.types"

interface Props {
  member: CastMember
}

const CastMemberCard = ({ member }: Props) => {
  return (
    <article className="flex flex-col justify-center w-42.5 py-2 px-0.5">
      <img
        src={member.image}
        alt={`Imagen del actor ${member.realName}`}
        className="rounded-full w-25 h-25 md:w-20 md:h-20 object-cover border border-gray-500 mx-auto"
      />

      <div className="text-center mt-2">
        <p className="font-semibold text-primary-50 mb-1">{member.realName}</p>
        <p className="italic text-grey leading-none line-clamp-1 text-sm">{member.characterName}</p>
      </div>
    </article>
  )
}

export default CastMemberCard