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
            Chrono.GG was a popular online video game store ran from 2015 to late 2020.
            The site aimed to defy convention by instead of having a cluttered store with everything where individual games would easily get lost and never seen,
            instead it would work with indie developers and influencers offer just one game day at a huge discount while marketing it though a huge number of youtubers and live streamers.
          </p>
          <p>
            This light-weight desktop gadget spotlights the daily game so that you won't miss out on the great deals.
          </p>
          <LightBoxGallery title="Project gallery" data={data}/>
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
    gallery: allFile(
      filter: {relativeDirectory: {eq: "chronogg-desktop/images"}}
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