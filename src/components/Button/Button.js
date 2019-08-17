import React from "react"

import styles from "./Button.module.scss"

const Button = ({ type, onClick, disabled, label }) => (
  <button
    className={styles.button}
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </button>
)

Button.defaultProps = {
  type: "button"
}

export default Button