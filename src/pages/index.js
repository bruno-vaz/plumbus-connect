import React from "react"

import Layout from "components/Layout"
import Header from "components/Header"
import Hero from "components/Hero"
import About from "components/About"
import MediaCoverage from "components/MediaCoverage"
import BeTheFirst from "components/BeTheFirst"
import Footer from "components/Footer"

export default () => (
  <Layout>
    <Header />
    <Hero />
    <About />
    <MediaCoverage />
    <BeTheFirst />
    <Footer />
  </Layout>
)
