import React, { useState } from "react"

import styles from "./BeTheFirst.module.scss"

import Container from "components/Container"
import Typography from "components/Typography"
import InputGroup from "components/form/InputGroup"
import Button from "components/Button"

import ArrowIcon from "src/icons/arrow.svg"
import NotMeIcon from "src/icons/not-me.svg"
import CheckIcon from "src/icons/check.svg"

import { createLead } from "src/services/lead"

const BeTheFirst = () => {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    createLead(form)
      .then(function () {
        setSuccess(true)
      })
      .finally(function () {
        setLoading(false);
      })
  }
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.illustration}>
          <div className={styles.circleloader}></div>
          <NotMeIcon/>
        </div>
        <div className={`${styles.content}${success ? " " + styles.sent:""}`}>
          <div className={styles.success}>
            <div className={styles.circle}></div>                
            <CheckIcon/>
          </div>
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
              disabled={loading}
              required
            />
            <InputGroup
              name="email"
              type="email"
              label="E-mail"
              onChange={handleChange}
              disabled={loading}
              required
            />
            <div className={styles.submit}>
              <Button
                type="submit"
                label="Sign up"
                icon={<ArrowIcon/>}
                loading={loading}
              />
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default BeTheFirst