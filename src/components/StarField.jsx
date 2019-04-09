import styles from "./starfield.module.sass"

import React from "react"

const StarField = () => (
  <div aria-hidden>
    <div className={styles.stars1} />
    <div className={styles.stars2} />
    <div className={styles.stars3} />
  </div>
)

export default StarField
