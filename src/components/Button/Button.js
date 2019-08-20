import React from "react"

import styles from "./Button.module.scss"

const Button = ({ type, onClick, disabled, loading, label, icon }) => (
  <button
    className={`${styles.button} ${loading ? styles.loading:""}`}
    type={type}
    onClick={onClick}
    disabled={disabled || loading}
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