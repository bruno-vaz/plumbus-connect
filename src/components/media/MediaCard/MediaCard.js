import React from "react"

import styles from "./MediaCard.module.scss"

const MediaCard = ({ color, logo, quote, author, source }) => (
  <div className={styles.card} style={{ backgroundColor: color }}>
    <img
      className={styles.logo}
      src={logo}
      alt={source}/>
    <div className={styles.content}>
      <div className={styles.icon}>“</div>
      <div className={styles.quote}>{quote}</div>
      <div className={styles.credit}>
        <b>{author}</b> for <b>{source}</b>
      </div>
    </div>
  </div>
)

export default MediaCard