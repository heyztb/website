import tw from "tailwind-styled-components"

const StyledAboutSection = tw.section`
  flex
  flex-col
  max-w-5xl
  min-h-screen
`

export const About = () => {
  return (
    <StyledAboutSection>
      <h1>testing</h1>
    </StyledAboutSection>
  )
}
