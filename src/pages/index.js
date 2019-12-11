import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, I am Russell.</h1>
    <p>I do Jiu Jitsu and build Websites.</p>
    <h2>I mostly work with Wordpress.</h2>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
   {/* <Link to="/page-2/">Go to page 2</Link> */} 
  </Layout>
)

export default IndexPage
