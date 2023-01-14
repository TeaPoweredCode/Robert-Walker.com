import React from "react"

import { graphql } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"

import { SEO } from "../../components/seo"

import Layout from "../../components/Layout"
import ProjectPage from "../../components/ProjectPage"
import LightBoxGallery from "../../components/LightBoxGallery"

import * as projectpageStyle from '../../styles/projectpage.module.css'

export default function ProfilePostIt({data}) {
  return (
    <Layout>
      <ProjectPage slug={"profile-post-it"}>
        <div className={projectpageStyle.ProfilePostIt}>
          <StaticImage src= "../../projectData/profile-post-it/ProfilePostIt-banner.jpg"/>
        </div>
        <div className={projectpageStyle.projectPageBody}>
          <p>
            Ever wanted to keep track of how you know your obscure Facebook friends,
            who in your group owes you money or just use Facebook as your rolodex storing phone numbers, addresses and important dates? 
          </p>
          <p>          
            Profile Post-it was a web extension for the Chrome and Firefox browsers that adds a note element to any Facebook profile page 
            allowing you to add and store your information on a person or organisation.
          </p>
          <p>
            Unfortunately Facebook claimed this extension breached their IP and issued a copyright request with google to have the extension removed from their store. 
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
      filter: {relativeDirectory: {eq: "profile-post-it/images"}}
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