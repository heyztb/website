import Link from "next/link"
import tw from "tailwind-styled-components"

const StyledAnchor = tw.a`
    text-black
    dark:text-white
    hover:bg-gray-200
    hover:dark:bg-gray-700
    px-3
    py-2
    rounded-md
    text-sm
    sm:text-xs
    font-medium
  `

export const NavLink = ({ to, name }) => {
  return (
    <Link href={to} passHref>
      <StyledAnchor>{name}</StyledAnchor>
    </Link>
  )
}
