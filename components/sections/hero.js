import tw from "tailwind-styled-components"

export const Hero = () => {
  const StyledHeroSection = tw.section`
    flex
    flex-col
    min-h-screen
    max-w-7xl
    justify-center
    items-center
    `

  const PrimaryHeading = tw.h1`
    text-sky-400
    text-7xl
    lg:text-9xl
    font-semibold
    pb-6
    lg:pb-10
    select-none
    `

  const SecondaryHeading = tw.h2`
    text-black
    dark:text-white
    text-5xl
    lg:text-6xl
    font-semibold
    py-4
  `

  const TertiaryHeading = tw.h3`
    text-black
    dark:text-white
    font-semibold
    text-5xl
    lg:text-6xl
  `

  const Description = tw.p`
    max-w-lg
    mt-5
    text-neutral-800
    dark:text-neutral-100
  `

  const CTALink = tw.span`
    text-sky-400  
  `

  const CTAButton = tw.button`
   w-72 lg:w-96 
   outline outline-[1.5px] outline-sky-400
   hover:bg-opacity-10 hover:bg-sky-400
   font-mono font-medium 
   p-4 mt-12 lg:mt-8 
   text-sky-400 text-sm 
   rounded-sm
   transition-all ease-in 
  `

  return (
    <StyledHeroSection>
      <PrimaryHeading>Hey 👋🏻</PrimaryHeading>
      <SecondaryHeading>My name is</SecondaryHeading>
      <TertiaryHeading>Zachary Blake</TertiaryHeading>
      <Description>
        I&apos;m a full-stack web developer that is driven by buildng cool
        things I believe will add value to the lives of those who use it.
        Currently I am focused on building a new way for people to find and
        verify talent with the{" "}
        <CTALink>
          <a href="https://github.com/posp-so">Proof of Skill Protocol</a>
        </CTALink>
        {"."}
      </Description>
      <a
        href="https://mirror.xyz/0x55241577E66d4Bf1dd4577090C970F8e4f509cC1"
        rel="noreferrer"
        target="_blank"
      >
        <CTAButton>Check out my blog!</CTAButton>
      </a>
    </StyledHeroSection>
  )
}
