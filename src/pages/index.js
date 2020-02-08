import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Benyoucef Mansour"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`benyoucef mansour`, `benyou`, `benyous`, `benyou1969`]}
        />
        <img style={{ margin: 0, borderRadius: `20px` }} src="./ben.jpg" alt="My picture" />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to my personal website</p>
        <p>
          My name is <b>Benyoucef, Mansour</b> but people usually call me <b title="and I like it">Benyou</b>, I was born in <s>1969</s> Oops I mean august 1998, in Algeria(Africa)👀</p>
        <p>I also write posts in my blog, take a look</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog✨</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
