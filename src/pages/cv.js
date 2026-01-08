import React from "react"
import Layout from "../components/Layout"
import { SEO } from "../components/seo"
import ExternalLink from "../components/ExternalLink"

import * as styles from '../styles/cv.module.css'

export default function Cv() {
  const EmploymentPlace = (EmploymentPlaceProps) => {
    const newWindowIcon = <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 448 512"><path d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>;
    const { place, site, siteUrl, time, jobTitle, children} = EmploymentPlaceProps;
    return (
      <div>
        <div class={styles.EmploymentHeader}>
          <h4>{jobTitle}</h4>
          <b>{place}</b> 
          {siteUrl != null &&
            <a href={siteUrl} target="_blank" rel="noopener noreferrer"> - {site} {newWindowIcon}</a>
          }
          <br/> {time}                 
        </div>
        {children}
      </div>
    )
  }

  return (
    <Layout>
      <div className={styles.cv}>
        
        <div className="CvHeader">	
          <h1 >Robert Walker</h1>
          <div className={styles.contactDetails}>
            <ul>
              <li><ExternalLink link="https://www.robert-walker.com/" text="Robert-Walker.com" /></li>
              <li><ExternalLink link="https://github.com/TeaPoweredCode" text="github.com/TeaPoweredCode"/></li>
            </ul>
            <ul>
              <li>Email: email@Robert-Walker.com</li>              
              <li>{process.env.OtherContact}</li>
            </ul>
          </div>
          <hr/>
          Sheffield UK based Software Engineer specialising in Windows desktop applications and web development, with over 10 years industry experience.
	      </div>

        <div className={[styles.cvSegment, styles.experience].join(' ')}>
          <h3>Professional experience</h3>
          <div className={styles.CodingExperience}>
            <div>
            Core Skills:
              <ul>
                <li> C# (WPF and Winform)</li>                
                <li> PHP <ul><li> Laravel and Livewire</li></ul></li>         
                <li> Node <ul></ul></li>
                <li> Frontend Technologies <ul><li> HTML / CSS / Tailwind</li><li> Javascript</li><li> React<br /></li></ul></li>
                <li> Database Technologies <ul><li> MySQL / SQL </li></ul></li>
              </ul>
            </div>
            <div>
              Other Industry experience:
              <ul>
                <li> VB</li>
                <li> Mobile development<ul><li>Android development (Java)</li><li>Flutter</li></ul></li>
                <li> Python <ul><li>Django</li></ul></li>
                <li> Arduino</li>                
                <li> Hardware integration</li>
              </ul>
            </div>
          </div>         
        </div>

        <div className={[styles.cvSegment, styles.employment].join(' ')}>
          <h3>Employment</h3>

          <EmploymentPlace jobTitle="Senior PHP / Laravel Developer" place="reach." site="reachstudios.co.uk" siteUrl="https://reachstudios.co.uk/" time="June 2023 - January 2024">            
            <ul>
              {
                [
                  `Developed and maintained multiple web applications using the Tall Stack (Tailwind CSS, Alpine.js, Laravel, and Livewire),
                  collaborating with clients to create new projects and provide ongoing support for existing ones.`,
                  "Worked across teams to contribute with company's other disciplines such as React, Flutter mobile and design.",
                  "Mentored and trained apprentices, enhancing their programming skills and understanding of core software development concepts.",
                ].map((task) => (<li>{task}</li>))
              }
            </ul>
          </EmploymentPlace>

          <EmploymentPlace jobTitle="Software Engineer" place="GWD" site="gwd.team" siteUrl="https://gwd.team/" time="June 2021 - January 2023" >
          <ul>
            {
             [  `Contributed to the development of "Donation Station" and "Discovery Station" products.
                 Applications written in React and packaged as Windows desktop app using NW.js.`,
                "Developed C# web service APIs for hardware interactions (card payment devices, RFID reads, barcode readers).",
                "Developed C# desktop applications to for hardware testing and device setup.",
                `Worked to expand the product base developing "Experiential Giving", 
                 a companion system to work along sided the Donation Station designed to help drive engagement and visibility.`,
              ].map((task) => (<li>{task}</li>))
            }
          </ul>
          </EmploymentPlace>
          
          <div className={styles.cvPagebrake}></div>

          <EmploymentPlace jobTitle="Software Engineer" place="Pryor Marking Technology" site="Pryormarking.com" siteUrl="http://www.pryormarking.com/" time="June 2013 - June 2021">                              
          <ul>
            {
             [  "Developed complex Windows desktop applications written in C# and VB.",
                "Integrated hardware such as ABB Robots, RFID readers and Cognex vision systems.",
                "Worked closely with clients such as Rolls Royce and Jaguar Land Rover to create custom modules and bespoke solutions.",
                "Built web based tools for managing software licenses.",
                "Made mobile applications on Android for tracking parts though production lines."
              ].map((task) => (<li>{task}</li>))
            }
          </ul>
          </EmploymentPlace>

          <EmploymentPlace jobTitle="Managing Director" place="IOAIS" time="June 2011 - September 2012">
          <ul>
            {
              [ "Co-founded a web design and software development company as part of a university enterprise scheme during my placement year.",
                "Worked as the company's technical lead gathering project specifications and developing a number of web applications for small businesses.",
                "Aided with client acquisition, client communications, project management, and business management.",
                "Became a knowledge base for a number of friends who set up their own businesses or work self-employed."
              ].map((task) => (<li>{task}</li>))
            }
          </ul>
          </EmploymentPlace>          
        </div>

        <div className={[styles.cvSegment, styles.education].join(' ')}>
          <h3>Education</h3>
          <span>BSc (Hons) Software Engineering</span><br/> - Sheffield Hallam University<br/>
		      <span>BTEC in Software Development</span><br/> - Peterborough Regional College
        </div>

      </div>
    </Layout>
  )
}

export const Head = () => (
  <SEO title="Robert Walker • CV" />
)
