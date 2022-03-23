import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
