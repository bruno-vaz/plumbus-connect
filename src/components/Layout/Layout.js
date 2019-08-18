import React from "react"
import { Helmet } from "react-helmet"

import "./Layout.scss"

const Layout = ({ children }) => {
  return (
    <main>
      <Helmet>
        <title>Plumbus Connect</title>
        <meta name="theme-color" content="#fa9a9c"/>
      </Helmet>
      {children}
    </main>
  )
}

export default Layout