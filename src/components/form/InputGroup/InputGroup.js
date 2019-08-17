import React from "react"

import styles from "./InputGroup.module.scss"

const InputGroup = ({ label, type, name, value, onChange, required }) => (
  <div className={styles.group}>
    <input 
      placeholder={label}
      className={styles.input}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
)

InputGroup.defaultProps = {
  type: "text"
}

export default InputGroup