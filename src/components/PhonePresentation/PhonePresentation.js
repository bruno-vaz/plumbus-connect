import React from "react"

import styles from "./PhonePresentation.module.scss"

import PhoneImg from "src/images/phone.png"
import Floob from "components/illustrations/Floob"
import Grumbo from "components/illustrations/Grumbo"

const PhonePresentation = () => (
  <section className={styles.container}>
    <div className={styles.illustrations}>
      <div className={styles.grumbo}>
        <Grumbo/>
      </div>
      <div className={styles.grumbo}>
        <Grumbo/>
      </div>
      <div className={styles.grumbo}>
        <Grumbo/>
      </div>
      <Floob/>
    </div>
    <div className={styles.phone}>
      <img src={PhoneImg} alt="Smartphone" />
    </div>
  </section>
)

export default PhonePresentation