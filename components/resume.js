import Link from "next/link"
import tw from "tailwind-styled-components"

const ResumeButton = tw.a`
    text-sky-400
    outline
    outline-1
    outline-sky-400
    hover:bg-opacity-10 
    hover:bg-sky-400 
    px-4
    py-2 
    rounded-sm
    text-sm
    sm:text-xs
    font-medium
  `

export const ResumeLink = () => {
  return (
    <Link href="/resume.pdf" passHref>
      <ResumeButton>Resume</ResumeButton>
    </Link>
  )
}
