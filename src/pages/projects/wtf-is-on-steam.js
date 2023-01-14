import React from "react"

import { graphql } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"

import { SEO } from "../../components/seo"

import Layout from "../../components/Layout"
import ProjectPage from "../../components/ProjectPage"
import LightBoxGallery from "../../components/LightBoxGallery"
import ExternalLink from "../../components/ExternalLink"

import * as projectpageStyle from '../../styles/projectpage.module.css'

export default function WTFIsOnSteam({data}) {
  return (
    <Layout>
      <ProjectPage slug={"wtf-is-on-steam"}>
        <StaticImage src= "../../projectData/wtf-is-on-steam/WTFIsOnSteam-banner.jpg" quality={90} breakpoints={[1720]} alt="project image" style={{height:"280px", margin:"20px 0"}}/>
        <div className={projectpageStyle.projectPageBody}>
          <p>          
            The '<ExternalLink link="https://www.youtube.com/playlist?list=PLTFohR7GUZYcD8t4bbSKYpnsjMWf19Qgo" text="WTF is... *Game*"/>' series was a first impressions video game youtube series by John Bain aka (<ExternalLink link="https://www.youtube.com/@cynicalbrit" text="TotalBiscuit"/>). 
            At his height, TotalBiscuit was releasing a video every day getting 300-500k views.
          </p>
          <p>
            The 'WTF is on Steam' extension tried to help people make more informed decisions on their game purchases. 
            Firstly, while browsing <ExternalLink link="https://store.steampowered.com/" text="Steam"/>'s store it highlights games with associated review.
            Then secondly embedded the 'WTF is' video directly onto a game's steam page.
          </p>
          <p>
           Sadly, TotalBiscuit passed away in 2018 ending the series.
          </p>
          <LightBoxGallery title="Project gallery" data={data}/>
        </div>
      </ProjectPage>
    </Layout>
  )
}

export const Head = () => (
  <SEO title="Robert Walker • WTF Is On Steam"/>
)

export const pageQuery = graphql`
  query {
    gallery: allFile(
      filter: {relativeDirectory: {eq: "wtf-is-on-steam/images"}}
      sort: {order: ASC, fields: base}
      ) {
      edges {
        node {
          id
          base
          publicURL
          childrenImageSharp {
            gatsbyImageData(
              webpOptions: {quality: 50}
              transformOptions: {fit: COVER}
              placeholder: BLURRED
              width: 400
            )
          }
        }
      }
    }
  }
`