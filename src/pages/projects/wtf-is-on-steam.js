import React from "react"
import Layout from "../../components/Layout"
import ProjectPage from "../../components/ProjectPage"
import { SEO } from "../../components/seo"
import * as projectpageStyle from '../../styles/projectpage.module.css'
import { StaticImage } from "gatsby-plugin-image"

export default function WTFIsOnSteam(props) {
  return (
    <Layout>
      <ProjectPage slug={"wtf-is-on-steam"}>
        <StaticImage src= "../../images/featured/WTFIsOnSteam-banner.jpg" quality={90} breakpoints={[1720]} alt="project image" style={{height:"280px", margin:"20px 0"}}/>
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

  //The WTF is on Steam chrome extension takes the videos of the popular <a href="https://www.youtube.com/user/TotalHalibut" target="_blank">TotalBiscuit, The Cynical Brit</a> and adds them steam.com pages. The extension takes TB\'s WTF series , 15 minutes of game and Port Report and adds it to the associated game\'s page<br><br><a>Chrome</a> - coming at some point<br>
}

export const Head = () => (
  <SEO title="Robert Walker • WTF Is On Steam"/>
)

