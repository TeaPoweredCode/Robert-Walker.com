import React from "react"
import Layout from "../../components/Layout"
import ProjectPage from "../../components/ProjectPage"

import * as projectpageStyle from '../../styles/projectpage.module.css'
import * as styles from '../../styles/home.module.css'

import { StaticImage } from "gatsby-plugin-image"

import { SEO } from "../../components/seo"


export default function ChronoGGDesktop(props) {
  return (
    <Layout>
      <ProjectPage slug={"chronogg-desktop"}>
        <StaticImage src="../../images/featured/ChronoGGDesktop-banner.jpg" quality={90} breakpoints={[1720]} alt="project image" style={{height:"280px", margin:"20px 0"}}/>
        <div className={projectpageStyle.projectPageBody}>
          <div>          
            Chrono.GG was a popular video game store ran from 2015 to late 2020. The site's gimmick was that it only sold one game a day but at a large discount.          
          </div>
          <div>
            This gadget allows you to see the daily game right on your desktop reminder.
          </div>
        </div>

      </ProjectPage>
    </Layout>
  )
}

export const Head = () => (
  <SEO title="Robert Walker • ChronoGG Desktop" />
)