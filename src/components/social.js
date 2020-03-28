import React from "react"
import Tilt from "react-tilt"
import { ReactComponent as StackOverFlowSVG } from "./svgs/stackoverflow.svg"
import { ReactComponent as GithubSVG } from "./svgs/github.svg"
import { ReactComponent as InstagramSVG } from "./svgs/instagram.svg"
import { ReactComponent as MailSVG } from "./svgs/mail.svg"
import { ReactComponent as TwitterSVG } from "./svgs/twitter.svg"
import { ReactComponent as DevToSVG } from "./svgs/devto.svg"
import { ReactComponent as YoutubeSVG } from "./svgs/youtube.svg"
import { ReactComponent as CodesandboxSVG } from "./svgs/codesandbox.svg"
import { ReactComponent as CodepenSVG } from "./svgs/codepen.svg"
import { ReactComponent as StravaSVG } from "./svgs/strava.svg"
import "./social.css"

function SocialLink(props) {
  return (
    <>
      <div className={`social-item w-full md:w-1/2 xl:w-1/3 px-2 py-2 ${props.width}`}>
        {/* <div className="social-item w-full md:w-1/2 xl:w-1/3  px-2 py-2"> */}
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link"
        >
          <Tilt
            className={`Tilt bg-gradient-${props.backgroundGradient}  p-4 h-full rounded items-center text-white shadow-lg flex items-center`}
            options={{
              max: 13,
              scale: 1.01,
              transition: true,
              easing: "cubic-bezier(.03,.98,.52,.99)",
            }}
          >
            <div className="flex Tilt-inner items-center">
              <span>{props.svg}</span>
              <div className="ml-4">
                <h1
                  className="sm:text-md font-bold leading-snug"
                  style={{ fontSize: `inherit`, margin: 0 }}
                >
                  {props.title}
                </h1>
                <p style={{    marginBottom: `0rem`}} className="leading-snug tracking-tight ">
                  {props.description}
                </p>
              </div>
            </div>
          </Tilt>
        </a>
        {/* </div> */}
      </div>
    </>
  )
}

const StackOverFlowComponent = <StackOverFlowSVG />
const TwitterComponent = <TwitterSVG />
const GithubComponent = <GithubSVG />
const InstagramComponent = <InstagramSVG />
const MailComponent = <MailSVG />
const DevToComponent = <DevToSVG />
const YoutubeComponent = <YoutubeSVG />
const CodepenComponent = <CodepenSVG />
const CodesendboxComponent = <CodesandboxSVG />
const StravaComponent = <StravaSVG />
const Social = () => {
  return (
    <div className="socials">
      <div className="mt-8 md:mt-16">
        <div className="flex flex-wrap -mx-4 mt-2 items-stretch">
          <SocialLink
            title="Mail"
            description="Send an email"
            svg={MailComponent}
            url="mailto:benyoudev@gmail.com"
            backgroundGradient="red"
          />
          <SocialLink
            title="Twitter"
            description="Follow me on twitter"
            svg={TwitterComponent}
            url="https://twitter.com/benyou1969"
            backgroundGradient="blue"
          />
          <SocialLink
            title="Github"
            description="Follow me on Github"
            svg={GithubComponent}
            url="https://github.com/benyou1969"
            backgroundGradient="black"
          />
          <SocialLink
            title="YouTube"
            description="Video, vlogs, parties..."
            svg={YoutubeComponent}
            url="https://www.youtube.com/channel/UCN28e9psrZkL4uekh3G_pkg"
            backgroundGradient="strawberry"
          />
          <SocialLink
            title="Instagram"
            description="My pictures on Instagram"
            svg={InstagramComponent}
            url="https://www.instagram.com/benyou1998"
            backgroundGradient="pink"
          />
          <SocialLink
            title="DEV.to"
            description="My pictures on Instagram"
            svg={DevToComponent}
            url="https://dev.to/benyou1969"
            backgroundGradient="blue"
          />
          <SocialLink
            title="Stackoverflow"
            description="Still don't have enough reputation"
            svg={StackOverFlowComponent}
            url="https://stackoverflow.com/users/11041883/ben96"
            backgroundGradient="orange"
          />
          <SocialLink
            title="Snad Box"
            description="Some demos of code I used to write"
            svg={CodesendboxComponent}
            url="https://codesandbox.io/u/benyou1969"
            backgroundGradient="turquoise"
          />
          <SocialLink
            title="CodePen.io"
            description="statics demos..."
            svg={CodepenComponent}
            url="https://codepen.io/benyou1969"
            backgroundGradient="gray"
          />
          <SocialLink
            title="Strava"
            className="bg-red-300"
            description="All my runs are recorded on Strava."
            svg={StravaComponent}
            url="https://codepen.io/benyou1969"
            backgroundGradient="reverse-orange"
            width="xl:w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Social
