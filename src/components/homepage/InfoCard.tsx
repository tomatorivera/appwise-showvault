import type React from "react"

interface Props {
  title: string
  body: string
  icon: React.ReactNode,
  
}

const InfoCard = ({ title, body, icon }: Props) => {
  return (
    <article className="bg-background-100/70 border border-gray-400/40 p-5 rounded-2xl">
      {icon}
      <h3 className="text-primary-50 font-semibold text-xl mt-4 mb-2">
        {title}
      </h3>
      <p className="text-grey">
        {body}
      </p>
    </article>
  )
}

export default InfoCard