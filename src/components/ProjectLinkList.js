import React from 'react'

import ProjectLink from './ProjectLink'

import * as styles from '../styles/projectitem.module.css'

export default function ProjectLinkList({links}) {
  return (
    <span className={styles.projectLinks}>
        {!!links.GitHub > 0 && <ProjectLink icon="github" link={links.GitHub}/> }
        {!!links.Chrome > 0 && <ProjectLink icon="chrome" link={links.Chrome}/> }
        {!!links.Firefox > 0 && <ProjectLink icon="firefox" link={links.Firefox}/> }
    </span>
  )
}
