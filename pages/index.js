import { Hero, About } from "@components/sections"
import tw from "tailwind-styled-components"
export default function Home() {
  const Main = tw.main`
    h-full
    w-full
    max-w-[1600px]
    p-[0px_25px] 
  `

  return (
    <Main>
      <Hero />
      <About />
    </Main>
  )
}
