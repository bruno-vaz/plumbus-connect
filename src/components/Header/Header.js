import React from "react"
import { Link } from "gatsby"

import styles from "./Header.module.scss"

import Container from "components/Container"
import Button from "components/Button"

import PlumbusConnectLogo from "src/icons/plumbus-connect-logo.svg"

const Header = () => {
  return (
    <header className={styles.header}>
      <Container
        className={styles.container}
      >
        <Link to="/" className={styles.logo}>
          <PlumbusConnectLogo/>
        </Link>
        <Button
          label="Be the first"
        />
      </Container>
    </header>
  )
}

export default Header