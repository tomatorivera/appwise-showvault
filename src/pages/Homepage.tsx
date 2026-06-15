import Hero from "../components/Hero/Hero"

const Homepage = () => {
  return (
    <main
      className="
        bg-[radial-gradient(ellipse_90%_55%_at_50%_0%,color-mix(in_srgb,var(--color-primary-600)_55%,transparent)_0%,transparent_60%),radial-gradient(ellipse_70%_45%_at_50%_25%,color-mix(in_srgb,var(--color-primary-500)_18%,transparent)_0%,transparent_65%),linear-gradient(180deg,var(--color-background-100)_0%,var(--color-background-200)_18%,var(--color-background-200)_100%)]
        min-h-screen
      "
    >
      <Hero />
    </main>
  )
}

export default Homepage