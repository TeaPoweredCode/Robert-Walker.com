import React from 'react'
import { Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"
import ProjectLink from './ProjectLink'

import * as styles from '../styles/projectitem.module.css'

export default function ProjectListItem(props) {
  const project = props.project;
  const links = project.projectLinks;

  return (
  <div className={[styles.gridItem, styles.projectItem].join(" ")}>
    <Link to={'/projects/' + project.slug} className={styles.ProjectImageLink}>
      <GatsbyImage image={ project.thumb.childImageSharp.gatsbyImageData } alt="project image"/>
    </Link>
    <Link to={'/projects/' + project.slug} className={styles.projectTitleLink}>   
      <h1>{project.title}</h1>
      <h2>{project.projectType}</h2>
    </Link>
    <div className={styles.projectLinks}>
        {!!links.GitHub > 0 && <ProjectLink icon="github" link={links.GitHub}/> }
        {!!links.Chrome > 0 && <ProjectLink icon="chrome" link={links.Chrome}/> }
        {!!links.Firefox > 0 && <ProjectLink icon="firefox" link={links.Firefox}/> }
    </div>
  </div>
  )
}


