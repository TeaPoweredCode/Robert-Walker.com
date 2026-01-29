import React from "react"

import { graphql } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"

import { SEO } from "../../components/seo"

import Layout from "../../components/Layout"
import ProjectPage from "../../components/ProjectPage"
import LightBoxGallery from "../../components/LightBoxGallery"
import ExternalLink from "../../components/ExternalLink"

import * as projectpageStyle from '../../styles/projectpage.module.css'

export default function TheCultOfCreativityTwitchPanel({data}) {
 
  return (
    <Layout>
      <ProjectPage slug={"the-cult-of-creativity-twitch-panel"}>
        <StaticImage src="../../projectData/the-cult-of-creativity-twitch-panel/TheCultOfCreativity-banner.jpg" quality={90} breakpoints={[1720]} alt="project image" style={{height:"280px", margin:"20px 0"}}/>
        <div className={projectpageStyle.projectPageBody}>
          <p>
            The Cult Of Creativity is a collective of artists and content creators headed <ExternalLink link="https://www.twitch.tv/mikemoans" text="MikeMoans"/> to help support and promote one another.
            The goal of thie this extension; promote the group on Twitch separate to the site's "stream teams" system, allow linking to a range socials to help share their work and sub communities
            and have a level of customisation that allows each member to tailor the panel to suit their channel's themes.
          </p>
          <p>
            I've also tried to structure this project in a way that should make it easily cloneable and adaptable if anyone wants to accomplish something similar for their own group or community.
          </p>
          <LightBoxGallery title="Project gallery" data={data}/>
        </div>        
      </ProjectPage>
    </Layout>
  )
}

export const Head = () => (
  <SEO title="Robert Walker • The Cult Of Creativity - Twitch panel" />
)

export const pageQuery = graphql`
  query {
    gallery: allFile(
      filter: {relativeDirectory: {eq: "the-cult-of-creativity-twitch-panel/images"}}
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
            )
          }
        }
      }
    }
  }
`