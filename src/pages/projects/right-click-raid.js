import React from "react"

import { graphql } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"

import { SEO } from "../../components/seo"

import Layout from "../../components/Layout"
import ProjectPage from "../../components/ProjectPage"
import LightBoxGallery from "../../components/LightBoxGallery"

import * as projectpageStyle from '../../styles/projectpage.module.css'

export default function RightClickRaid({data}) {
  return (
    <Layout>
      <ProjectPage slug={"right-click-raid"}>
        <div className={projectpageStyle.RightClickRaidBanner}>
          <StaticImage src= "../../projectData/right-click-raid/RightClickRaid-bannerMini.png" style={{width:"389px", position: "absolute", top:"50%", left:"50%", transform: "translate(-50%, -50%)", zIndex:1}}/>
          <div className={projectpageStyle.RightClickRaidBannerText}>            
            right-click-raid right-click-raid right-click-raid right-click-raid right-click-raid right-click-raid
            right-click-raid right-click-raid right-click-raid right-click-raid right-click-raid right-click-raid
            right-click-raid right-click-raid right-click-raid right-click-raid right-click-raid right-click-raid
            right-click-raid right-click-raid right-click-raid right-click-raid right-click-raid right-click-raid
          </div>
        </div>
        <div className={projectpageStyle.projectPageBody}>
          <p>          
            Are you a twitch streamer and hate having to type out a channel's name or worst has a typo ever meant that you raided the wrong channel ?
          </p>
          <p>
            Right-Click-Raid is a web extension that makes raiding easy, simply right click their profile, or a name or link in check add select raid form the dropdown menu.
          </p>
          <LightBoxGallery title="Project gallery" data={data}/>
        </div>
      </ProjectPage>
    </Layout>
  )
}

export const Head = () => (
  <SEO title="Robert Walker • Profile Post-it" />
)

export const pageQuery = graphql`
  query {
    gallery: allFile(
      filter: {relativeDirectory: {eq: "right-click-raid/images"}}
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
              width: 500
            )
          }
        }
      }
    }
  }
`