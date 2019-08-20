import React from "react"
import { Helmet } from "react-helmet"
import { useSpring, animated } from "react-spring"

import "./Layout.scss"

const Layout = ({ children }) => {
  const animation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 })
  return (
    <animated.main style={animation}>
      <Helmet>
        <title>Plumbus Connect</title>
        <meta name="theme-color" content="#fa9a9c"/>
      </Helmet>
      {children}
    </animated.main>
  )
}

export default Layout