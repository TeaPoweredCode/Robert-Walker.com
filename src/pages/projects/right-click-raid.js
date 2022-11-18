import React from "react"
import Layout from "../../components/Layout"
import ProjectPage from "../../components/ProjectPage"
import {SEO} from "../../components/seo"

import * as projectpageStyle from '../../styles/projectpage.module.css'


import { StaticImage } from "gatsby-plugin-image"


export default function RightClickRaid(props) {
  return (
    <Layout>
      <ProjectPage slug={"right-click-raid"}>
        <div className={projectpageStyle.RightClickRaidBanner}>
          <StaticImage src= "../../images/featured/RightClickRaid-bannerMini.png" style={{width:"389px", position: "absolute", top:"50%", left:"50%", transform: "translate(-50%, -50%)", zIndex:1}}/>
          <div className={projectpageStyle.RightClickRaidBannerText}>            
            right-click-raid right-click-raid right-click-raid right-click-raid right-click-raid right-click-raid
            right-click-raid right-click-raid right-click-raid right-click-raid right-click-raid right-click-raid
            right-click-raid right-click-raid right-click-raid right-click-raid right-click-raid right-click-raid
            right-click-raid right-click-raid right-click-raid right-click-raid right-click-raid right-click-raid
          </div>
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