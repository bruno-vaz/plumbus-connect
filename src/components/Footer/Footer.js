import React from "react"

import styles from "./Footer.module.scss"

import Container from "components/Container"

import PlumbusConnectLogo from "src/icons/plumbus-connect-logo.svg"

const Footer = () => (
  <footer className={styles.footer}>
    <Container className={styles.container}>
      <div className={styles.text}>
        Plumbus Connect is maintained by Plumbus & Kimble Inc., a subsidiary of Blamf Inc.
      </div>
      <div className={styles.logo}>
        <PlumbusConnectLogo/>
      </div>
    </Container>
  </footer>
)

export default Footer