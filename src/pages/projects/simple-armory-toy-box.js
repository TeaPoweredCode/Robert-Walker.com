import React from "react"

import { graphql } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"

import { SEO } from "../../components/seo"

import Layout from "../../components/Layout"
import ProjectPage from "../../components/ProjectPage"
import LightBoxGallery from "../../components/LightBoxGallery"

import * as projectpageStyle from '../../styles/projectpage.module.css'

export default function SimpleArmoryToyBox({data}) {
  return (
    <Layout>
      <ProjectPage slug={"simple-armory-toy-box"}>
        <StaticImage src= "../../projectData/simple-armory-toy-box/SimpleArmoryToyBox-banner.jpg" quality={90} breakpoints={[1720]} alt="project image" style={{height:"280px", margin:"20px 0"}}/>
        <div className={projectpageStyle.projectPageBody}>
          <div>          
              <a href="https://simplearmory.com/">simplearmory</a> was a popular video game store ran from 2015 to late 2020. The site's gimmick was that it only sold one game a day but at a large discount.          
          </div>
          <div>
            This gadget allows you to see the daily game right on your desktop reminder.
          </div>
          <LightBoxGallery data={data}/>
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
    gallery: allFile(filter: {relativeDirectory: {eq: "simple-armory-toy-box/images"}}) {
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
              height: 150
            )
          }
        }
      }
    }
  }
`