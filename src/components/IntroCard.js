import React from 'react'

import * as styles from '../styles/projectitem.module.css'
import * as introcardStyles from '../styles/introcard.module.css'

export default function IntroCard() {
  return (
  <div className={[styles.gridItem, styles.projectItem , introcardStyles.introCard].join(" ")}>

    <div className={introcardStyles.hero}>
      <img src={'/introcard.webp'} alt="Me photo"/>
      <div>
        Ay up 👋 I'm a UK based software engineer. <br/>
        I drink a silly amount of tea and write code.
        This is just a simple portfolio site of some of the things I've made.
      </div>
    </div>

    <div>
      <h1>Robert Walker</h1>
      <h2>Dev - [ Full stack web , Desktop , Moblie ]</h2>
    </div>

  </div>
  )
}


