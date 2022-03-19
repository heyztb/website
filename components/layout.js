import React from "react"
import { Nav } from "./nav"
import { SEO } from "./seo"
import { Socials } from "./socials"

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
