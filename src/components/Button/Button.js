import React from "react"

import styles from "./Button.module.scss"

const Button = ({ type, onClick, disabled, label, icon }) => (
  <button
    className={styles.button}
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    {label}
    {
      icon && 
      <div className={styles.icon}>
        {icon}
      </div>
    }
  </button>
)

Button.defaultProps = {
  type: "button"
}

export default Button