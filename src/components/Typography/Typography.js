import React from "react"

import styles from "./Typography.module.scss"

const Typography = ({ component, variation, className, children }) => {
  const Component = component;
  return (
    <Component
      className={`${styles[variation]}${className ? " "+className:""}`}
    >
      {children}
    </Component>
  )
}

export default Typography