import React from 'react';
import Content from '../components/dark/Content';


import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class App extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
              <Content />

        <h1>Not Found</h1>
        <p>There's nothing here for ya :(</p>
      </Layout>
    )
  }
}

export default App

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
