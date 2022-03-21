import { useState, useEffect, useMemo } from "react"
import { Disclosure, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import Link from "next/link"
import Image from "next/image"
import logo from "../public/logo.svg"
import tw from "tailwind-styled-components"
import { useScrollDirection, usePrefersReducedMotion } from "@hooks"

const StyledNav = tw.nav`
    bg-neutral-100 dark:bg-neutral-800
    h-20
    pt-0 sm:pt-6
    sticky top-0
    z-50
    transition duration-300 ease-in-out
    ${(p) =>
      p.$scrollDirection === "up" &&
      !p.$scrolledToTop &&
      "h-20 motion-safe:translate-y-0 motion-safe:bg-neutral-100 motion-safe:dark:bg-neutral-800 motion-safe:shadow-lg"}
    ${(p) =>
      p.$scrollDirection === "down" &&
      !p.$scrolledToTop &&
      "h-20 motion-safe:-translate-y-20 motion-safe:shadow-lg"}
  `

const StyledAnchor = tw.a`
    text-black
    dark:text-white
    hover:bg-gray-100
    hover:dark:bg-gray-700
    px-3
    py-2
    rounded-md
    text-sm
    sm:text-xs
    font-medium
  `

const NavLink = ({ to, name }) => {
  return (
    <Link href={to} passHref>
      <StyledAnchor>{name}</StyledAnchor>
    </Link>
  )
}

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

const ResumeLink = () => {
  return (
    <Link href="/resume.pdf" passHref>
      <ResumeButton>Resume</ResumeButton>
    </Link>
  )
}

export const Nav = () => {
  const scrollDirection = useScrollDirection()
  const [scrolledToTop, setScrolledToTop] = useState(true)
  const prefersReducedMotion = usePrefersReducedMotion()

  const navLinks = [
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Experience",
      url: "#experience",
    },
    {
      name: "Projects",
      url: "#projects",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ]

  const handleScroll = () => {
    setScrolledToTop(window.scrollY < 50)
    console.log(window.scrollY)
  }

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [prefersReducedMotion])

  return (
    <Disclosure
      as={StyledNav}
      $scrollDirection={scrollDirection}
      $scrolledToTop={scrolledToTop}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* logo */}
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block">
                  <div className="flex">
                    <Link href="/">
                      <a className="h-11 w-11 items-center select-none p-2 rounded bg-neutral-800 dark:bg-transparent">
                        <Image src={logo} alt="portfolio logo" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              {/* desktop menu */}
              <div className="absolute inset-y-0 right-0 hidden items-center pr-2 sm:flex sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-6">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 font-mono">
                    {navLinks &&
                      navLinks.map(({ name, url }, i) => (
                        <NavLink to={url} name={name} key={i} />
                      ))}
                    <ResumeLink />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* mobile menu */}
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="sm:hidden w-full">
              <div className="w-full h-screen px-2 space-y-6 mx-auto flex flex-col justify-center">
                {navLinks &&
                  navLinks.map(({ name, url }, i) => (
                    <Disclosure.Button key={i}>
                      <NavLink to={url} name={name} />
                    </Disclosure.Button>
                  ))}
                <Disclosure.Button>
                  <ResumeLink />
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
