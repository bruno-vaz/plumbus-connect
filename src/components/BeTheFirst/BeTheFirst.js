import React from "react"

import styles from "./BeTheFirst.module.scss"

import Container from "components/Container"
import Typography from "components/Typography"
import InputGroup from "components/form/InputGroup"
import Button from "components/Button"

import ArrowIcon from "src/icons/arrow.svg"
import NotMeIcon from "src/icons/not-me.svg"

const BeTheFirst = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.illustration}>
          <div className={styles.circleloader}></div>
          <NotMeIcon/>
        </div>
        <div className={styles.content}>
          <Typography
            component="h2"
            className={styles.title}
            variation="h4"
          >
            Be the <b>first</b>
          </Typography>
          <Typography
            component="p"
            className={styles.text}
            variation="sub1"
          >
            Sign up for beta testing and be the first to experience the future.
          </Typography>
          <form className={styles.form}>
            <InputGroup
              name="name"
              label="Name"
              required
            />
            <InputGroup
              name="email"
              type="email"
              label="E-mail"
              required
            />
            <div className={styles.submit}>
              <Button
                type="submit"
                label="Sign up"
                icon={<ArrowIcon/>}
              />
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default BeTheFirst