import React from "react"
import Layout from "../../components/Layout"
import ProjectPage from "../../components/ProjectPage"
import { SEO } from "../../components/seo"

import * as projectpageStyle from '../../styles/projectpage.module.css'


import { StaticImage } from "gatsby-plugin-image"


export default function TwitchFavourites(props) {


  return (
    <Layout>
      <ProjectPage slug={"twitch-favourites"}>
      <StaticImage src= "../../images/featured/TwitchFavourites-banner.jpg" quality={90} breakpoints={[1720]} alt="project image" style={{height:"280px", margin:"20px 0"}}/>
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
  <SEO title="Robert Walker • Twitch Favourites" />
)