import React from "react"

import styles from "./Grumbo.module.scss"

const Grumbo = () => {
  return (
    <div className={styles.grumbo}>
      <svg width="107" height="110" viewBox="0 0 107 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle r="53.5" transform="matrix(1 0 0 -1 53.5 54.5)" fill="#FBD6BB"/>
        <path d="M38 107C75 88.5 20.5 49 59.7588 18C66.9497 12.3218 71.5932 7.62707 74 4.5" stroke="white" stroke-width="2"/>
        <path d="M26 104C63 85.5 8.5 46 47.7588 15C55.3401 9.01354 60.1907 4.17591 62.5 1" stroke="white" stroke-width="2"/>
        <path d="M49 109C86 90.5 31.5 51 70.7588 20C76.0952 15.7862 80.4058 12.2498 83 9.5" stroke="white" stroke-width="2"/>
      </svg>
    </div>
  )
}

export default Grumbo