import React from "react"

import { graphql } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"

import { SEO } from "../../components/seo"

import Layout from "../../components/Layout"
import ProjectPage from "../../components/ProjectPage"
import LightBoxGallery from "../../components/LightBoxGallery"
import ExternalLink from "../../components/ExternalLink"

import * as projectpageStyle from '../../styles/projectpage.module.css'

export default function ClassicRaidInfoAndResets({data}) {
  return (
    <Layout>
      <ProjectPage slug={"classic-raid-info-and-resets"}>
        <StaticImage src= "../../projectData/classic-raid-info-and-resets/ClassicRaidInfoAndResets-banner.jpg" quality={90} breakpoints={[1720]} alt="project image" style={{height:"280px", margin:"20px 0"}}/>
        <div className={projectpageStyle.projectPageBody}>
          <p>     
            A World of Warcraft Classic add-on made for the WoW Classic 20th Anniversary servers to better track the reset times for the different raids. By default only information on raids that a character is saved are shown.
          </p><p>
            The add-on adds a new raid info panel and a minimap icon that shows the reset for all raids , what raids are saved,  as well as some raid specific information like the current Zul'Gurub Edge of Madness boss.
          </p>
          <p>
            Addon can be downloaded from : <ExternalLink link="https://www.curseforge.com/wow/addons/classic-raid-info-and-resets" text="CurseForge"/> 
          </p>
          <LightBoxGallery title="Project gallery" data={data}/>
        </div>
      </ProjectPage>
    </Layout>
  )
}

export const Head = () => (
  <SEO title="Robert Walker • Classic Raid Info and Resets"/>
)

export const pageQuery = graphql`
  query {
    gallery: allFile(
      filter: {relativeDirectory: {eq: "classic-raid-info-and-resets/images"}}
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