import React from "react"

import { graphql } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"

import { SEO } from "../../components/seo"

import Layout from "../../components/Layout"
import ProjectPage from "../../components/ProjectPage"
import LightBoxGallery from "../../components/LightBoxGallery"

import * as projectpageStyle from '../../styles/projectpage.module.css'

export default function WTFIsOnSteam({data}) {
  return (
    <Layout>
      <ProjectPage slug={"wtf-is-on-steam"}>
        <StaticImage src= "../../projectData/wtf-is-on-steam/WTFIsOnSteam-banner.jpg" quality={90} breakpoints={[1720]} alt="project image" style={{height:"280px", margin:"20px 0"}}/>
        <div className={projectpageStyle.projectPageBody}>
          <div>          
            Chrono.GG was a popular video game store ran from 2015 to late 2020. The site's gimmick was that it only sold one game a day but at a large discount.          
          </div>
          <div>
            This gadget allows you to see the daily game right on your desktop reminder.
          </div>
          <LightBoxGallery data={data}/>
        </div>
      </ProjectPage>
    </Layout>
  )

  //The WTF is on Steam chrome extension takes the videos of the popular <a href="https://www.youtube.com/user/TotalHalibut" target="_blank">TotalBiscuit, The Cynical Brit</a> and adds them steam.com pages. The extension takes TB\'s WTF series , 15 minutes of game and Port Report and adds it to the associated game\'s page<br><br><a>Chrome</a> - coming at some point<br>
}

export const Head = () => (
  <SEO title="Robert Walker • WTF Is On Steam"/>
)

export const pageQuery = graphql`
  query {
    gallery: allFile(filter: {relativeDirectory: {eq: "wtf-is-on-steam/images"}}) {
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