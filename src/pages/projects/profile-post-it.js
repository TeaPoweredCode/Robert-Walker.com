import React from "react"
import Layout from "../../components/Layout"
import ProjectPage from "../../components/ProjectPage"
import {SEO} from "../../components/seo"

import * as projectpageStyle from '../../styles/projectpage.module.css'


import { StaticImage } from "gatsby-plugin-image"


export default function ProfilePostIt(props) {


  return (
    <Layout>
      <ProjectPage slug={"profile-post-it"}>
        <div className={projectpageStyle.ProfilePostIt}>
          <StaticImage src= "../../images/featured/ProfilePostIt-banner.jpg"/>
        </div>
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
  <SEO title="Robert Walker • Profile Post-it" />
)