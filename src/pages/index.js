import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import './index.css'
import styled, { keyframes }  from 'styled-components';
import Social from "../components/social"

const pulsate = keyframes`
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1); }
  50% {
    -webkit-transform: scale3d(0.8, 0.8, 0.8);
    transform: scale3d(0.8, 0.8, 0.8); }
  100% {
    -webkit-animation-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    animation-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1); }
`
const Pulsate = styled.div`
  -webkit-animation-name: ${pulsate};
  animation-name: ${pulsate};
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
`
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
        <div>
          <Pulsate>
            <img
              style={{ margin: 0, borderRadius: `20px` }}
              src="./ben.jpg"
              alt="Benyou's pic"
              className="pulse"
            />
          </Pulsate>
          <h1
            style={{
              fontFamily: `'Luckiest Guy', cursive`,
            }}
          >
            Hey people{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h1>
          <p className="text-2xl">Welcome to my personal website</p>
          <p
            style={{
              fontFamily: `'Chewy', cursive`,
            }}
            className="text-4xl"
          >
            My name is <b>Benyoucef, Mansour</b> but people usually call me
            <b title="and I like it"> Benyou</b>, I was born in <s>1969</s> Oops
            I mean august 1998, in Algeria(Africa)👀
          </p>
          <p className="text-2xl">I also write posts in my blog, check it out</p>
          <h2>
            Follow me Every where
            <span className="text-6xl" role="img" aria-label="Selfie">
              🤳
            </span>
          </h2>
          <Social />
          <div className="inline-buttons flex justify-between">
            <Link to="/blog/">
              <Button marginTop="35px" marginLeft="10px">
                Go to Blog
                <span role="img" aria-label="Sparkles">
                  ✨
                </span>
              </Button>
            </Link>
            <Link to="/about">
              <Button marginTop="35px">
                About Me
                <span role="img" aria-label="Sparkles">
                  😎
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
