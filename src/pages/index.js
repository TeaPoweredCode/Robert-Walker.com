import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import ProjectListItem from "../components/ProjectListItem"
import ProjectListPlaceHolder from "../components/ProjectListPlaceHolder"
import { SEO } from "../components/seo"

export default function Home({ data }) {
  const projects = data.allProjectsJson.edges;  
  return (
    <Layout>
      <div className="grid-container">              
        {projects.map(data => <ProjectListItem project={data.node} key={data.node.id}/>)}
        {[...Array(4)].map((e, i) => <ProjectListPlaceHolder key={i}/>)}
      </div>
    </Layout>
  )
}

export const Head = () => (
  <SEO />
)


export const query = graphql`
query projects {
  allProjectsJson {
    edges {
      node {
        id
        date
        title
        stack
        slug
        projectType
        projectLinks {
          GitHub
          Chrome
          Firefox
        }
        thumb {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
            )
          }
        }        
      }
    }
  }
}
`