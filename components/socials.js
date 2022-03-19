import { GithubLogo } from "./icons/github"
import { LinkedInLogo } from "./icons/linkedin"
import { TwitterLogo } from "./icons/twitter"
import { MirrorLogo } from "./icons/mirror"

export const Socials = () => {
  const links = [
    {
      name: "github",
      url: "https://github.com/heyztb",
      image: GithubLogo,
    },
    {
      name: "twitter",
      url: "https://twitter.com/heyztb",
      image: TwitterLogo,
    },
    {
      name: "mirror",
      url: "https://mirror.xyz/0x55241577E66d4Bf1dd4577090C970F8e4f509cC1",
      image: MirrorLogo,
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/zach-blake-874004172/",
      image: LinkedInLogo,
    },
  ]

  return (
    <div
      aria-orientation="vertical"
      className="w-10 fixed bottom-0 z-10 left-5 lg:left-10 hidden lg:block"
    >
      <ul className="flex flex-col items-center align-middle list-none m-0 p-0 after:block after:w-px after:h-[90px] after:mx-auto after:my-0 after:bg-slate-300">
        {links.map((link, index) => (
          <li
            key={index}
            className="p-3 last-of-type:mb-5 hover:-translate-y-1 transition-all ease-in-out text-slate-300 hover:text-[#7851a9]"
          >
            <a href={link.url}>{link.image()}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
