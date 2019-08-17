import React from "react"

import styles from "./Hero.module.scss"

import Typography from "components/Typography"
import PhonePresentation from "components/PhonePresentation"

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.block}>
        <Typography
          component="h1"
          className={styles.title}
          variation="h4"
        >
          Integrate your <b>Plumbus</b> with your smartphone
        </Typography>
        <Typography
          component="p"
          className={styles.text}
          variation="sub1"
        >
          Install. Connect. <br/>
          Just like that, you can take all your Plumbuses live data anywhere.
        </Typography>
        <PhonePresentation/>
      </div>
    </section>
  )
}

export default Hero