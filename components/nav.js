import { useState, useEffect, useMemo } from "react"
import { Disclosure, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import Link from "next/link"
import Image from "next/image"
import logo from "../public/logo.svg"
import tw from "tailwind-styled-components"
import { useScrollDirection, usePrefersReducedMotion } from "@hooks"
import { NavLink, ResumeLink, Menu } from "@components"
import { navLinks } from "@config"

const StyledNav = tw.nav`
    h-20
    pt-0 sm:pt-6
    sticky top-0
    z-10
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

export const Nav = () => {
  const scrollDirection = useScrollDirection()
  const [scrolledToTop, setScrolledToTop] = useState(true)
  const prefersReducedMotion = usePrefersReducedMotion()

  const handleScroll = () => {
    setScrolledToTop(window.scrollY < 50)
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
    <StyledNav
      $scrollDirection={scrollDirection}
      $scrolledToTop={scrolledToTop}
    >
      <Menu />
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center justify-between">
          <div className="flex-1 flex align-middle p-2 sm:p-0 sm:items-stretch sm:justify-start">
            <div className="block">
              <div className="flex">
                <Link href="/">
                  <a className="h-16 w-16 sm:h-12 sm:w-12 items-center select-none p-2 rounded bg-neutral-800 dark:bg-transparent">
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
    </StyledNav>
  )
}
