import { useState, useEffect, useRef, useCallback } from "react"
import tw from "tailwind-styled-components"
import { NavLink, ResumeLink } from "@components"
import { XIcon, MenuIcon } from "@components/icons"
import { useOnClickOutside } from "@hooks"
import { navLinks } from "@config"

const StyledMenu = tw.div`
  block
  sm:hidden
`

const StyledMenuButtonContainer = tw.div`
  absolute
  inset-y-0
  right-0
  p-2
  flex
  items-center

  sm:hidden
`

const StyledMenuButton = tw.button`
  inline-flex
  items-center
  justify-center
  p-2
  z-30
  rounded-full
  text-black dark:text-white
`

const StyledSidebar = tw.aside`
  flex
  flex-col
  justify-center
  items-center
  fixed
  top-0
  bottom-0
  right-0
  h-screen
  w-72
  outline-none
  bg-neutral-100 dark:bg-neutral-900
  shadow-xl
  z-20
  transition-all duration-300 ease-in-out
  ${(p) =>
    p.$menuOpen ? "visible translate-x-[0vw]" : "invisible translate-x-[100vw]"}

  sm:hidden
`

const StyledNav = tw.nav`
    flex
    flex-col
    justify-center
    items-center
    w-full
    space-y-6
`

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = useCallback(() => {
    setMenuOpen(!menuOpen)
    document.querySelector("main").classList.toggle("blur")
  }, [menuOpen])

  const onResize = useCallback(
    (e) => {
      if (e.currentTarget.innerWidth > 768) {
        if (menuOpen) {
          toggleMenu()
        } else {
          return
        }
      }
    },
    [menuOpen, toggleMenu]
  )

  useEffect(() => {
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [onResize])

  const wrapperRef = useRef()
  useOnClickOutside(wrapperRef, () => {
    if (menuOpen) {
      toggleMenu()
    } else {
      return
    }
  })

  return (
    <StyledMenu>
      <div ref={wrapperRef}>
        <StyledMenuButtonContainer>
          <StyledMenuButton onClick={() => toggleMenu()}>
            <span className="sr-only">Open main menu</span>
            {menuOpen ? (
              <XIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <MenuIcon className="block h-6 w-6" aria-hidden="true" />
            )}
          </StyledMenuButton>
        </StyledMenuButtonContainer>

        <StyledSidebar
          $menuOpen={menuOpen}
          aria-hidden={!menuOpen}
          tabIndex={menuOpen ? 1 : -1}
        >
          <StyledNav>
            {navLinks &&
              navLinks.map(({ name, url }, i) => (
                <div onClick={() => toggleMenu()} key={i}>
                  <NavLink to={url} name={name} />
                </div>
              ))}
            <ResumeLink />
          </StyledNav>
        </StyledSidebar>
      </div>
    </StyledMenu>
  )
}
