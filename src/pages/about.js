import React from "react"
import { graphql, Link } from "gatsby"
import Button from "../components/button"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
      render() {
            const { data } = this.props
            const siteTitle = data.site.siteMetadata.title

            return (
                  <Layout location={this.props.location} title={siteTitle}>
                        <SEO title="About Me" />
                        {/* <div className="content"></div> */}

                        <h1>Who I AM?</h1>
                        <p>My name is Benyoucef Mansour known as <code>Benyou</code>, I was born and grew up in the same city <code>Blida</code>, I'm 21 year old, Love learning new things (e.g languages, science topics...).
                              Btw I'm still a student in <a href="http://www.univ-blida.dz/" target="_blank" rel="noopener noreferrer">Saad Dahleb</a> university, My specialty there is Mechanical Engineering.
                              </p>

                        <h1>Coding:</h1>
                        <p>
                              I'm sure so many people are here just for that section: so let me tell you How I Became A Web Developer:
                              In early January 2018, <a href="https://twitter.com/saly3301" target="_blank" rel="noopener noreferrer">Salim</a> and I bought a computer (Macbook :p). <br />
                              so in 9 of January 2018 I started HTML.
                              <br />
                              <img loading="lazy" src="./schedule.png" alt="my early schedule" />
                              <br />
                              after one month I dropped out of university, a year later I went back <span aria-label="Face With Tears of Joy" role="img">😂</span>
                        </p>
                        * HTML/CSS
                        * PHP/JavaScript
                        * Database: SQL
                        Framework
                        Laravel/Vuejs (Rails to way magic)
                        Current state
                        Express/React/MongoDB
                              <br />
                        check out my  <a href="http://www.github.com/benyou1969" target="_blank" rel="noopener noreferrer">account</a> on Github

                              <br />
                        <h2>Sport</h2>
                        In the last few year I started go jogging twice to thrice a week <br />
                        {/* <iframe  height='100%' title="strava's data activity" width='100%' frameBorder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/46284026/activity-summary/d0a46c0fb411b5e43feca3adeb31038617b76fad'></iframe>                               */}
                        <iframe title="data activity from my account on Strava" loading="lazy" height='454' width='300' frameBorder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/46284026/latest-rides/d0a46c0fb411b5e43feca3adeb31038617b76fad'></iframe>
                        <Link to="/">
                              <Button marginTop="85px">Go Home</Button>
                        </Link>
                  </Layout>
            )
      }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
