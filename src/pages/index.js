import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="text-wrap">
      <h1>Hi, I am Russell.</h1>
      <p>I practice Jiu Jitsu and build websites.</p>
    </div>
    { /*<Link to="/jiu-jitsu/">Jiu Jitsu</Link> */ }
    <div style={{ maxWidth: `250px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
   
  </Layout>
)

export default IndexPage
