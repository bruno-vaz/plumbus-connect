import React, { useState } from "react"

import styles from "./BeTheFirst.module.scss"

import Container from "components/Container"
import Typography from "components/Typography"
import InputGroup from "components/form/InputGroup"
import Button from "components/Button"

import ArrowIcon from "src/icons/arrow.svg"
import NotMeIcon from "src/icons/not-me.svg"

import { createLead } from "src/services/lead"

const BeTheFirst = () => {
  const [form, setForm] = useState({
    name: "",
    email: ""
  })
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    createLead(form)
      .then(function () {
        alert("Success!")
      })
      .then(function (error) {
        console.log(error);
        alert("Error! Check console")
      })
  }
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
          <form 
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <InputGroup
              name="name"
              label="Name"
              onChange={handleChange}
              required
            />
            <InputGroup
              name="email"
              type="email"
              label="E-mail"
              onChange={handleChange}
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