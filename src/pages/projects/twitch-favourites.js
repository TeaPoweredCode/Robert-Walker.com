import React from "react"

import { graphql } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"

import { SEO } from "../../components/seo"

import Layout from "../../components/Layout"
import ProjectPage from "../../components/ProjectPage"
import LightBoxGallery from "../../components/LightBoxGallery"

import * as projectpageStyle from '../../styles/projectpage.module.css'

export default function TwitchFavourites({data}) {

  return (
    <Layout>
      <ProjectPage slug={"twitch-favourites"}>
      <StaticImage src= "../../projectData/twitch-favourites/TwitchFavourites-banner.jpg" quality={90} breakpoints={[1720]} alt="project image" style={{height:"280px", margin:"20px 0"}}/>
        <div className={projectpageStyle.projectPageBody}>
          <p>          
            Finding your top streamers in the list of everyone you follow can be a pain on twitch,
            especially when they're smaller channels that can be pushed down off the list and hidden behind the more button.
          </p>
          <p>
            This web extension makes it much easier to find your favourite channels. 
            Simply go to a channel and click the new favourite button to add them to the new favourite list.
            The extension can be set to send desktop notification alerting you when a favourite streamer goes live.
          </p>
          <LightBoxGallery title="Project gallery" data={data}/>
        </div>
      </ProjectPage>
    </Layout>
  )
}

export const Head = () => (
  <SEO title="Robert Walker • Twitch Favourites" />
)

export const pageQuery = graphql`
  query {
    gallery: allFile(
      filter: {relativeDirectory: {eq: "twitch-favourites/images"}}
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