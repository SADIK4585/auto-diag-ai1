import { Hero } from "@/components/sections/hero"
import { HowItWorks } from "@/components/sections/how-it-works"
import { SupportedSystems } from "@/components/sections/supported-systems"
import { HomeCta } from "@/components/sections/home-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <SupportedSystems />
      <HomeCta />
    </>
  )
}
