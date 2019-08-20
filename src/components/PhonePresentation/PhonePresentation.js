import React from "react"
import { useSpring, animated } from "react-spring"

import styles from "./PhonePresentation.module.scss"

import PhoneImg from "src/images/phone.png"
import Floob from "components/illustrations/Floob"
import Grumbo from "components/illustrations/Grumbo"

const PhonePresentation = () => {
  const animations = {
    phone: useSpring({ 
      opacity: 1,
      transform: "translateY(0%)", 
      from: { 
        opacity: 0,
        transform: "translateY(20%)", 
      }, 
      delay: 400,
      config: {
        tension: 450,
        friction: 80
      }
    })
  }
  return (
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
      <animated.div className={styles.phone} style={animations.phone}>
        <img src={PhoneImg} alt="Smartphone" />
      </animated.div>
    </section>
  )
}

export default PhonePresentation