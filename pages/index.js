import { Hero } from "@components/sections"
import tw from "tailwind-styled-components"
export default function Home() {
  const Main = tw.main`
    h-full
    w-full
    max-w-[1600px]
    p-[0px_25px] 
    sm:p-[0px_50px]
    md:p-[0px_100px]
    lg:p-[0px_150px]
  `

  return (
    <Main>
      <Hero />
    </Main>
  )
}
