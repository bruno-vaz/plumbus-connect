import React, { useRef, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useTrail, animated } from "react-spring"

import styles from "./MediaCoverage.module.scss"

import Container from "components/Container"
import Typography from "components/Typography"
import Button from "components/Button"
import MediaCard from "components/media/MediaCard"

import ExternalLinkIcon from "src/icons/external-link.svg"
import DashedLineIcon from "src/icons/dashed-line.svg"
import NyTimesLogo from "src/images/nytimes.png"
import BbcNewsLogo from "src/images/bbcnews.png"
import TheGuardianLogo from "src/images/theguardian.png"

const MediaCoverage = () => {
  const mediaPosts = [
    {
      id: 1,
      color: "#000",
      quote: "The future is really here with the new Plumbus app",
      author: "Zoe Armstrong",
      source: "The NY Times",
      logo: NyTimesLogo
    },
    {
      id: 2,
      color: "#bb1919",
      quote: "Plumbuses are even more useful with brand new app",
      author: "Taylor Allen",
      source: "BBC News",
      logo: BbcNewsLogo
    },
    {
      id: 3,
      color: "#052962",
      quote: "New Plumbus Connect app is all you need",
      author: "Emilia Chambers",
      source: "The Guardian",
      logo: TheGuardianLogo
    }
  ]
  
  const [trail, setTrail, stopTrail] = useTrail(mediaPosts.length, () => ({ 
    opacity: 0,
    transform: "translateY(40%)",
    config: {
      mass: 2,
      tension: 450,
      friction: 80
    }
  }));

  const [cards, isVisible, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
  })

  useEffect(() => {
    if (isVisible) {
      setTrail({ opacity: 1, transform: "translateY(0%)" })
    }
  }, [isVisible])

  return (
    <section className={styles.section}>
      <div className={styles.illustrations}>
        <div className={styles.dashedline}>
          <DashedLineIcon/>
        </div>
      </div>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.cards} ref={cards}>
            {
              trail.map((props, key) => (
                <animated.div style={props}>
                  <MediaCard
                    key={mediaPosts[key].id}
                    {...mediaPosts[key]}
                  />
                </animated.div>
              ))
            }
            <div className={styles.mobilelink}>
              <Button
                label="Read more"
                icon={<ExternalLinkIcon/>}
              />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.text}>
              <Typography
                component="h2"
                variation="h4"
                className={styles.title}
              >
                Media <b>coverage</b>
              </Typography>
              <Typography
                component="p"
                variation="sub1"
              >
                We gave Plumbus Connect early access accounts to some technology news websites, see what they said!
              </Typography>
            </div>
            <div className={styles.desktoplink}>
              <Button
                label="Read more"
                icon={<ExternalLinkIcon/>}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default MediaCoverage
