import { Hero } from "../components/hero"

const StyledMain = ({ children }) => {
  return (
    <main className="h-full w-full max-w-[1600px] p-[0px_25px] sm:p-[0px_50px] md:p-[0px_100px] lg:p-[0px_150px] bg-slate-900">
      {children}
    </main>
  )
}
export default function Home() {
  return (
    <StyledMain>
      <Hero />
      <section className="flex flex-col min-h-screen max-w-5xl py-24 md:py-16 mx-auto bg-slate-900"></section>
    </StyledMain>
  )
}
