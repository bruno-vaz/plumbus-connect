import React from 'react'

import styles from "./MediaCoverage.module.scss"

import Container from "components/Container"
import Typography from "components/Typography"
import Button from "components/Button"
import MediaCard from "components/media/MediaCard"

import ExternalLinkIcon from "src/icons/external-link.svg"
import ChumbleIcon from "src/icons/chumble.svg"
import DashedLineIcon from "src/icons/dashed-line.svg"
import NyTimesLogo from "src/images/nytimes.png"
import BbcNewsLogo from "src/images/bbcnews.png"
import TheGuardianLogo from "src/images/theguardian.png"

const MediaCoverage = () => {
  const mediaPosts = [
    {
      color: "#000",
      quote: "The future is really here with the new Plumbus app",
      author: "Zoe Armstrong",
      source: "The NY Times",
      logo: NyTimesLogo
    },
    {
      color: "#bb1919",
      quote: "Plumbuses are even more useful with brand new app",
      author: "Taylor Allen",
      source: "BBC News",
      logo: BbcNewsLogo
    },
    {
      color: "#052962",
      quote: "New Plumbus app is everything you need",
      author: "Emilia Chambers",
      source: "The Guardian",
      logo: TheGuardianLogo
    }
  ]
  
  return (
    <section className={styles.section}>
      <div className={styles.illustrations}>
        <div className={styles.dashedline}>
          <DashedLineIcon/>
        </div>
        <div className={styles.chumble}>
          <ChumbleIcon/>
        </div>
      </div>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.cards}>
            {
              mediaPosts.map(post => (
                <MediaCard
                  {...post}
                />
              ))
            }
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
            <Button
              label="Read more"
              icon={<ExternalLinkIcon/>}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default MediaCoverage
