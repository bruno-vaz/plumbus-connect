import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useTrail, animated } from "react-spring"

import styles from "./GrumboBig.module.scss"

const GrumboBig = () => {
  const [grumbobig, isVisible] = useInView({
    /* Optional options */
    threshold: 0.75,
  })

  const [circles, setCircles, stopCircles] = useTrail(4, index => ({
    opacity: 0,
    config: {
      mass: 5,
      tension: 450,
      friction: 80
    }
  }))

  useEffect(() => {
    if (isVisible) {
      setCircles({ opacity: 1 })
    }
  }, [isVisible])

  return (
    <div className={styles.grumbobig} ref={grumbobig}>
      <svg width="375" height="447" viewBox="0 0 375 447" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="223.5" cy="223.5" r="223.5" fill="#FBD6BB"/>
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="447" height="447">
          <circle cx="223.5" cy="223.5" r="223.5" fill="#FBD6BB"/>
        </mask>
        <g mask="url(#mask0)">
          {
            circles.map((props, key) => (
              <>
                <animated.circle 
                  r="80.757" 
                  transform="matrix(-1 0 0 1 82.8824 376.265)" 
                  stroke="white" 
                  strokeWidth="3"
                  style={circles[0]}
                />
                
                <animated.circle 
                  r="112.554" 
                  transform="matrix(-1 0 0 1 81.5 376.265)" 
                  stroke="white" 
                  strokeWidth="3"
                  style={circles[1]}
                />
                <animated.circle 
                  r="140.203" 
                  transform="matrix(-1 0 0 1 81.5 376.265)" 
                  stroke="white" 
                  strokeWidth="3"
                  style={circles[2]}
                />
                <animated.circle 
                  r="172" 
                  transform="matrix(-1 0 0 1 81.5 373.5)" 
                  stroke="white" 
                  strokeWidth="3"
                  style={circles[3]}
                />
                <animated.circle 
                  r="80.757" 
                  transform="matrix(-1 0 0 1 364.882 86.2649)" 
                  stroke="white" 
                  strokeWidth="3"
                  style={circles[0]}
                />
                <animated.circle 
                  r="112.554" 
                  transform="matrix(-1 0 0 1 363.5 86.265)" 
                  stroke="white" 
                  strokeWidth="3"
                  style={circles[1]}
                />
                <animated.circle 
                  r="140.203" 
                  transform="matrix(-1 0 0 1 363.5 86.265)" 
                  stroke="white" 
                  strokeWidth="3"
                  style={circles[2]}
                />
                <animated.circle 
                  r="172" 
                  transform="matrix(-1 0 0 1 363.5 83.5)" 
                  stroke="white" 
                  strokeWidth="3"
                  style={circles[3]}
                />
              </>
            ))
          }
        </g>
      </svg>
    </div>
  )
}

export default GrumboBig