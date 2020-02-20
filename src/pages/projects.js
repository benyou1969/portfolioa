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
                        <div className="container">
                        <div>
                        <h3>Projects</h3>
                        <p>Here's some of the open source and private projects I have been contributing to</p>
                        </div>
                              <div className="inline-buttons footer" style={{ display: `flex`, justifyContent: `space-between` }}>
                                    <Link to="/blog/">
                                          <Button marginTop="35px" marginLeft="10px">Go to Blog
                                          <span role="img" aria-label="Sparkles">
                                                      ✨
                                          </span>
                                          </Button>
                                    </Link>
                                    <Link to="/about">
                                          <Button marginTop="35px">About Me
                                               <span role="img" aria-label="Sparkles">
                                                      ✨
                                               </span>
                                          </Button>
                                    </Link>
                              </div>
                        </div>
                  </Layout>
            )
      }
}

export default IndexPage
