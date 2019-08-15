import React from "react"
import { Link } from "gatsby"

import styles from "./Header.module.scss"

import Container from "components/Container"

import PlumbusConnectLogo from "src/icons/plumbus-connect-logo.svg"

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Link to="/" className={styles.logo}>
          <PlumbusConnectLogo/>
        </Link>
      </Container>
    </header>
  )
}

export default Header