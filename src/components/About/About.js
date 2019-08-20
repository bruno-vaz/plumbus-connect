import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useSprings, animated } from "react-spring"

import styles from "./About.module.scss"

import Container from "components/Container"
import Typography from "components/Typography"

import GrumboBig from "components/illustrations/GrumboBig"
import GrumboBigIcon from "src/icons/grumbo-big.svg"
import TemperatureImg from "src/images/plumbus-temperature.png"
import AboveTemperatureImg from "src/images/plumbus-above-temperature.png"

const About = () => {
  const [about, isVisible] = useInView({
    /* Optional options */
    threshold: 0.5,
  })

  const [springs, set, stop] = useSprings(1, index => ({
    opacity: 0,
    transform: "translate3d(020%, 0, 0)", 
    config: {
      tension: 450,
      friction: 80
    }
  }))
  const [springs2, set2, stop2] = useSprings(1, index => ({
    opacity: 0,
    transform: "translate3d(20%, 0, 0)", 
    config: {
      tension: 450,
      friction: 80
    }
  }))
  const [orbit, setOrbit, stopOrbit] = useSprings(1, index => ({
    opacity: 0,
    config: {
      tension: 450,
      friction: 80
    }
  }))
  
  useEffect(() => {
    if (isVisible) {
      set({ opacity: 1, transform: "translate3d(0, 0, 0)" })
      set2({ opacity: 1, transform: "translate3d(0, 0, 0)" })
      setOrbit({ delay: 600, opacity: 1 })
    }
  }, [isVisible])

  return (
    <section className={styles.about} ref={about}>
      <div className={styles.bgillustrations}>
        {
          orbit.map(props => (
            <animated.div 
              className={styles.orbit}
              style={props}
            />
          ))
        }
        <div className={styles.grumbo}>
          <GrumboBig/>
        </div>
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
          <div className={styles.illustrations}>
            <div className={styles.cards}>
              {
                springs.map(props => 
                  <animated.img
                    className={styles.temperature}
                    src={TemperatureImg}
                    style={props}
                    alt="Temperature chart"
                  />
                )
              }
              {
                springs2.map(props => 
                  <animated.img
                    className={styles.above}
                    src={AboveTemperatureImg}
                    style={props}
                    alt="Above temperature alert"
                  />
                )
              }
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About