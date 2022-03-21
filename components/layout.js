import React from "react"
import { Nav, SEO, Socials } from "@components"

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <SEO />
      <Nav />
      <Socials />
      {children}
    </React.Fragment>
  )
}
