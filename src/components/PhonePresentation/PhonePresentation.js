import React from "react"

import styles from "./PhonePresentation.module.scss"

import PhoneImg from "src/images/phone.png"
import FloobIcon from "src/icons/floob.svg"
import GrumboIcon from "src/icons/grumbo.svg"

const PhonePresentation = () => (
  <section className={styles.container}>
    <div className={styles.phone}>
      <img src={PhoneImg} alt="Smartphone" />
    </div>
  </section>
)

export default PhonePresentation