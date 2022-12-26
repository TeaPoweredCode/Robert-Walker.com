import React from "react"

import { graphql } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"

import { SEO } from "../../components/seo"

import Layout from "../../components/Layout"
import ProjectPage from "../../components/ProjectPage"
import LightBoxGallery from "../../components/LightBoxGallery"

import * as projectpageStyle from '../../styles/projectpage.module.css'

export default function ChronoGGDesktop({data}) {
 
  return (
    <Layout>
      <ProjectPage slug={"chronogg-desktop"}>
        <StaticImage src="../../projectData/chronogg-desktop/ChronoGGDesktop-banner.jpg" quality={90} breakpoints={[1720]} alt="project image" style={{height:"280px", margin:"20px 0"}}/>
        <div className={projectpageStyle.projectPageBody}>
          <p>          
            Chrono.GG was a popular video game store ran from 2015 to late 2020. The site's main gimmick was that it only sold one game a day but at a large discount.          
            The other angle the site tock was to work closely with content creators to help promote the daily offer in turn they they offered a generous a affiliate scheme.
          </p>
          <p>
            This gadget allows you to see the daily game right on your desktop reminder.            
          </p>
          <LightBoxGallery data={data}/>
        </div>        
      </ProjectPage>
    </Layout>
  )
}

export const Head = () => (
  <SEO title="Robert Walker • ChronoGG Desktop" />
)

export const pageQuery = graphql`
  query {
    gallery: allFile(filter: {relativeDirectory: {eq: "chronogg-desktop/images"}}) {
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