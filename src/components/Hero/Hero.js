import React from "react"

import styles from "./Hero.module.scss"

import Container from "components/Container"
import Typography from "components/Typography"

import PhoneImg from "src/images/phone.png"
import FloobIcon from "src/icons/floob.svg"
import GrumboIcon from "src/icons/grumbo.svg"

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.illustrations}>
        <div className={styles.floob}>
          <FloobIcon/>
        </div>
        <div className={styles.grumbo}>
          <GrumboIcon/>
        </div>
        <div className={styles.phone}>
          <img src={PhoneImg} alt="Smartphone"/>
        </div>
      </div>
      <Container>
        <div className={styles.block}>
          <Typography
            component="h1"
            className={styles.title}
            variation="h4"
          >
            Integrate your Plumbus with your smartphone
          </Typography>
          <Typography
            component="p"
            className={styles.text}
            variation="sub1"
          >
            Install. Connect. <br/>
            Just like that, you can take all your Plumbuses live data anywhere.
          </Typography>
        </div>
      </Container>
    </section>
  )
}

export default Hero