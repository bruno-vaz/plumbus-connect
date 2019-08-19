import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"

import styles from "./LeadsList.module.scss"

import Container from "components/Container"
import Typography from "components/Typography"

import { getLeads } from "src/services/lead"

const LeadsList = () => {

  const [leads, setLeads] = useState([])

  useEffect(() => {
    getLeads()
      .then(function (response) {
        setLeads(response.data)
      })
  }, [])

  return (
    <section
      className={styles.leads}
    >
      <Helmet>
        <title>Plumbus Connect | Leads</title>
      </Helmet>
      <Container>
        <Typography
          component="h1"
          variation="h4"
        >
          Captured leads
        </Typography>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>E-mail</th>
              <th>Signed up date</th>
            </tr>
          </thead>
          <tbody>
            {
              leads.map(lead => (
                <tr key={lead._id}>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{new Date(lead.createdAt).toLocaleDateString()} at {new Date(lead.createdAt).toLocaleTimeString()}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </Container>
    </section>
  )
}

export default LeadsList
