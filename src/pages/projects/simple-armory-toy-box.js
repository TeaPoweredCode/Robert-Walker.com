import React from "react"

import { graphql } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"

import { SEO } from "../../components/seo"

import Layout from "../../components/Layout"
import ProjectPage from "../../components/ProjectPage"
import LightBoxGallery from "../../components/LightBoxGallery"
import ExternalLink from "../../components/ExternalLink"

import * as projectpageStyle from '../../styles/projectpage.module.css'

export default function SimpleArmoryToyBox({data}) {
  return (
    <Layout>
      <ProjectPage slug={"simple-armory-toy-box"}>
        <StaticImage src= "../../projectData/simple-armory-toy-box/SimpleArmoryToyBox-banner.jpg" quality={90} breakpoints={[1720]} alt="project image" style={{height:"280px", margin:"20px 0"}}/>
        <div className={projectpageStyle.projectPageBody}>
          <p> 
            <ExternalLink link="https://simplearmory.com/" text="Simple Armory"/> is a clean, user-friendly depiction of a World of Warcraft character's armoury page.            
            The site makes it easy to track the progress of the different in-game collections such as achievements, reputations, mounts and pets.
            Due to the limitations of the Blizzard API it isn't possible to track a player's toy collection so Simple Armory wasn't able to included on them site.
            This Chrome extension solved this issue by adding an extra Toys page and allowed users to manually track what they had collected.         
          </p>
          <p>
            Updates on this extension stopped once simplearmory implemented its own way of tracking toy data with an in game addon.
          </p>
          <LightBoxGallery title="Project gallery" data={data}/>
        </div>        
      </ProjectPage>
    </Layout>
  )
}

export const Head = () => (
  <SEO title="Robert Walker • Simple Armory - Toy Box" />
)

export const pageQuery = graphql`
  query {
    gallery: allFile(
      filter: {relativeDirectory: {eq: "simple-armory-toy-box/images"}}
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