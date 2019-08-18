import React from "react"

import styles from "./About.module.scss"

import Container from "components/Container"
import Typography from "components/Typography"

import GrumboBigIcon from "src/icons/grumbo-big.svg"
import TemperatureImg from "src/images/plumbus-temperature.png"
import AboveTemperatureImg from "src/images/plumbus-above-temperature.png"

const About = () => (
  <section className={styles.about}>
    <div className={styles.bgillustrations}>
      <div className={styles.orbit}></div>
      <GrumboBigIcon/>
    </div>
    <div className={styles.background}></div>
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.text}>
            <Typography
              component="h1"
              className={styles.title}
              variation="h4"
            >
              Welcome to the <b>future</b>
            </Typography>
            <Typography
              component="p"
              variation="sub1"
            >
              Have you ever wondered if your Plumbus is at ideal temperature, if it’s too dry or too wet, or if it’s humming or flashing?
            </Typography>
            <Typography
              component="p"
              variation="sub1"
            >
              Never worry anymore, with Plumbus Connect you can monitor your Plumbus from anywhere in the world.
            </Typography>
          </div>
        </div>
        <div className={styles.illustration}>
          <div className={styles.cards}>
            <img className={styles.temperature} src={TemperatureImg} alt="Temperature chart"/>
            <img className={styles.above} src={AboveTemperatureImg} alt="Above temperature alert"/>
          </div>
        </div>
      </div>
    </Container>
  </section>
)

export default About