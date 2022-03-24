import { useEffect, useRef } from "react"
import tw from "tailwind-styled-components"
import Image from "next/image"

import { usePrefersReducedMotion } from "@hooks"
import profilePicture from "../../public/profile.jpg"

const StyledAboutSection = tw.section`
  flex
  flex-col
  max-w-4xl
  w-full
  min-h-screen
  py-24
`

const SectionHeading = tw.h1`
  text-black dark:text-white
  text-3xl
  font-semibold
  tracking-wide
  mb-4
`

const StyledContent = tw.div`
  flex
  flex-col
  justify-center
  md:grid
  md:grid-cols-[3fr_2fr]
  md:gap-14
`

const StyledAboutText = tw.div`
  text-neutral-800 dark:text-neutral-100
  space-y-2
`

const StyledPicture = tw.div`
  w-3/4
  my-4
  mx-auto

  md:relative
  md:max-w-xs
`

const SkillsList = tw.ul`
  grid
  grid-cols-2
  gap-y-1
  overflow-hidden
  list-none
`

const SkillsListItem = tw.li`
  relative
  mb-3
  pl-5
  font-mono
  text-xs

  before:content-['▹']
  before:absolute
  before:left-0
  before:text-sky-400
  before:text-xs
  before:leading-3
`

export const About = () => {
  const revealContainer = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  useEffect(() => {
    const animate = async () => {
      if (prefersReducedMotion) {
        return
      }

      if (revealContainer.current) {
        const { sr, srConfig } = await import("@utils")
        sr.reveal(revealContainer.current, srConfig())
      }
    }
    animate()
  }, [prefersReducedMotion])

  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Svelte",
    "Node.js",
    "Golang",
  ]

  return (
    <div className="flex flex-col justify-center items-center">
      <StyledAboutSection id="about" ref={revealContainer}>
        <SectionHeading>🧑🏻‍💻 About me</SectionHeading>
        <StyledContent>
          <StyledAboutText>
            <p>
              Hi! My name is Zachary Blake and I enjoy building things on the
              Internet. My first exposure to computers and the Internet was at a
              very young age and it wasn&apos;t long before I became interested
              in how it all worked.
            </p>
            <p>
              I&apos;ve had the privilege of working on various web projects for
              my friends and that has been great fun but now I&apos;m seraching
              for something more serious.
            </p>
            <p>
              At the moment, I am building the{" "}
              <span className="text-sky-400">
                <a href="https://github.com/posp-so">Proof of Skill Protocol</a>
              </span>{" "}
              in my spare time. The plan is to build a new way for people to
              find and verify talent. I think it&apos;s pretty cool.
            </p>
            <p className="pb-4">
              These are some of the technologies I&apos;m most comfortable with:
            </p>
            <SkillsList>
              {skills &&
                skills.map((skill, i) => (
                  <SkillsListItem key={i}>{skill}</SkillsListItem>
                ))}
            </SkillsList>
          </StyledAboutText>
          <StyledPicture>
            <Image
              src={profilePicture}
              alt="a picture of me from the beach taken by my girlfriend"
              role="image"
              className="rounded"
            />
          </StyledPicture>
        </StyledContent>
      </StyledAboutSection>
    </div>
  )
}
