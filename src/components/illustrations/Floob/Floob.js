import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useTrail, animated } from "react-spring"

import styles from "./Floob.module.scss"

const Floob = () => {
  const [floob, isVisible] = useInView({
    threshold: 0.6,
  })

  const [balls, setBalls] = useTrail(10, index => ({
    opacity: 0,
    transform: "scale(0.8)",
    config: {
      mass: 4,
      tension: 180,
      friction: 40
    }
  }))

  useEffect(() => {
    if (isVisible) {
      setBalls({
        opacity: 1,
        transform: "scale(1)"
      })
    }
  }, [isVisible])

  return (
    <div className={styles.floob} ref={floob}>
      <svg width="693" height="575" viewBox="0 0 693 575" fill="none" xmlns="http://www.w3.org/2000/svg">
        <animated.circle style={balls[0]} cx="586" cy="407" r="107"/>
        <animated.circle style={balls[1]} cx="469" cy="407" r="107"/>
        <animated.circle style={balls[2]} cx="356.5" cy="235.5" r="166.5"/>
        <animated.circle style={balls[3]} cx="493" cy="300" r="107"/>
        <animated.circle style={balls[4]} cx="379" cy="468" r="107"/>
        <animated.circle style={balls[5]} cx="232" cy="434" r="107"/>
        <animated.circle style={balls[6]} cx="107" cy="321" r="107"/>
        <animated.circle style={balls[7]} cx="197" cy="163" r="107"/>
        <animated.circle style={balls[8]} cx="469" cy="135" r="107"/>
        <animated.circle style={balls[9]} cx="250" cy="107" r="107"/>
      </svg>
    </div>
  )
}

export default Floob