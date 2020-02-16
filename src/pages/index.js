import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import './index.css'
class IndexPage extends React.Component {
  render() {
    const siteTitle = "Benyoucef Mansour"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`benyoucef mansour`, `benyou`, `benyous`, `benyou1969`]}
        />
        <div className="space"></div>
        <div className="container">


        <img style={{ margin: 0, borderRadius: `20px` }} src="./ben.jpg" alt="Benyou's pic"/>
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h1>
        <p>Welcome to my personal website</p>
        <p>
          My name is <b>Benyoucef, Mansour</b> but people usually call me <b title="and I like it">Benyou</b>, I was born in <s>1969</s> Oops I mean august 1998, in Algeria(Africa)👀</p>
        <p>I also write posts in my blog, take a look</p>
        <div className="inline-buttons" style={{display: `flex`,justifyContent: `space-between`}}>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog
          <span role="img" aria-label="Sparkles">
            ✨
          </span></Button>
        </Link>
        <Link to="/about">
          <Button marginTop="35px">About Me
          <span role="img" aria-label="Sparkles">
            ✨
          </span></Button>
        </Link>
        </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
