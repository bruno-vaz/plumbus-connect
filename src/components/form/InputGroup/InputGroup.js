import React from "react"

import styles from "./InputGroup.module.scss"

const InputGroup = ({ label, type, name, value, required }) => (
  <div className={styles.group}>
    <input 
      className={styles.input}
      type={type}
      name={name}
      value={value}
      placeholder={label}
      required={required}
    />
  </div>
)

InputGroup.defaultProps = {
  type: "text"
}

export default InputGroup