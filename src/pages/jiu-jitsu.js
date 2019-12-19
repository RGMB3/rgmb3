import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const JiuJitsuPage = () => (
  <Layout>
    <SEO title="Jiu Jitsu" />
    <h1>Jiu Jitsu</h1>
    <p> I love to train jiu jitsu. I am a currently <span style= {{color: `purple` }}>purple</span> belt in Jiu Jitsu and enjoy training serveal times a week.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default JiuJitsuPage