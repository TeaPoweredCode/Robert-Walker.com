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
        <div>
          <b>{place}</b> 
          {siteUrl != null &&
            <a href={siteUrl} target="_blank" rel="noopener noreferrer"> -  {site} {newWindowIcon}</a>
          }
          <br/> {time}
          <br/> {jobTitle}          
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
              <li><ExternalLink link="https://github.com/MrLuxan" text="github.com/MrLuxan"/></li>
            </ul>
            <ul>
              <li>Email: email@Robert-Walker.com</li>              
              <li>{process.env.OtherContact}</li>
            </ul>
          </div>
          <hr/>
          Sheffield, UK based software engineer specialising in Windows desktop applications and web development with experience in both front and back end technologies.          
	      </div>

        <div className={[styles.cvSegment, styles.experience].join(' ')}>
          <h3>Professional experience</h3>
          <div className={styles.CodingExperience}>
            <div>
            Current Core Skills:
              <ul>
                <li> C# </li>
                <li> Node <ul></ul></li>                
                <li> Frontend Technologies <ul><li> HTML / CSS / SCSS </li><li> Javascript</li><li> React<br /><span style={{paddingLeft:"20px"}}> - Gatsby</span></li></ul></li>
                <li> Database Technologies <ul><li> MySQL / SQL </li></ul></li>
                <li> Python <ul><li>Django</li></ul></li>
                <li> Other <ul><li>Hardware integration</li></ul></li>
              </ul>
            </div>
            <div>
              Other Industry experience:
              <ul>
                <li>VB</li>
                <li>Java<ul><li>Android development</li></ul></li>
                <li>PHP <ul><li> Laravel </li></ul></li>
                <li>C<ul><li>Arduino</li></ul></li>
                <li>Design tools<ul><li>Photoshop</li></ul></li>
                <li>Other <ul><li> Web extensions<br/> <span style={{paddingLeft:"20px"}}> - Chrome / Firefox </span></li></ul></li>                              
              </ul>
            </div>
          </div>         
        </div>

        <div className={[styles.cvSegment, styles.employment].join(' ')}>
          <h3>Employment</h3>
          <EmploymentPlace place="GWD" site="gwd.team" siteUrl="https://gwd.team/" time="June 2021 - Present" jobTitle="Software Engineer">
            <p>              
              GWD prides itself on helping socially-minded organisations and charities transition to digital systems.
              While here my primary role has been to work on the company's main two products: the "Donation Station" a contactless fundraising system; 
              and the "Discovery Station" a self-service library kiosk. Both applications are written as react apps that then use NW.js to package them for Windows desktop.
            </p>
            <p>                            
              The other aspect of GWD platform is the "Device Service", a C# application which runs as a web service that creates api endpoints that are used by the
              Donation Station and Discovery Station to interact with different hardware. For this I've implemented new card payment systems, as well as improving
              the performance of cash acceptors, rfid tag readers and barcode readers.
            </p>
            <p>
              I also expanded the product range, developing  the new "Experiential Giving" system, a companion product for the Donation Station.
              Designed to help drive engagement and visibility. Experiential Giving couples a large video display with the Donation Station tablet.
              As a user moves though the steps of making a donation, different pages trigger events on the large screen creating interactions and rewards.
              The system uses a node server and websockets to allow the tablet and device running the video display to communicate.
            </p>
          </EmploymentPlace>

          <div className={styles.cvPagebrake}></div>

          <EmploymentPlace place="Pryor Marking Technology" site="Pryormarking.com" siteUrl="http://www.pryormarking.com/" time="June 2013 - June 2021" jobTitle="Software Engineer">                              
            <p>
              During my time with Pryors, I worked on a wide range of projects.
              My main task was developing a Windows desktop application "Traceable-IT", a complex marking and traceability package written in C# and VB.
			        I was responsible for the implementation of new core features, integrating new hardware such as ABB Robots , RFID readers and Cognex vision systems. 
			        I also work closely with clients such as Rolls Royce and Jaguar Land Rover to create custom modules and bespoke solutions.
			        For the last two years with the company I headed development of the next generation of traceability software for distribution in the global markets.
            </p>
            <p>
              Secondly, with my background in web development I was tasked with developing a range of web sites. These have included:
              A ticketing and project management tool; sites for managing language translations and documentation for the desktop apps; 
              web apis for tracking parts in manufacturing plants and the latest site I worked on was a software licence keys management.
            </p>
            <p>
              Finally due to my enthusiasm for exploring different technologies I was often given any project that fell outside the standard skill set of the team. 
			        This lead me to developing a number of Android application including a government contract to help prevent metal theft,
              an RFID tag reading application that runs on Windows pocket PCs for JLR and  
              building a "Pick-To-Light" system using Arduinos and neo pixel LEDs to aid in the assembly of machines.
            </p>
          </EmploymentPlace>

          <EmploymentPlace place="IOAIS" time="June 2011 - September 2012" jobTitle="Managing Director">
            <p>
              During our placement year at Sheffield Hallam, a friend and I took advantage of the university's enterprise scheme and started our own company. 
              IOAIS was a web design and software development company we ran for 15 months where we sourced and maintained contact with a small number of clients,
              as well working on a range of internal projects.
            </p> 
            <p>
              Apart from improving my design and development skills, I also learnt a significant amount about running a business learning from both our successes and our failures.
              We became versed in; finding and managing clients, gathering specifications, managing expectations and the general client communication. 
              These are skills I've been able to apply directly in my later career. I've also been able to share the business  knowledge that I gained with a number of friends 
              who have gone onto set up their own businesses or go self-employed.
            </p>
          </EmploymentPlace>          
        </div>

        <div className={[styles.cvSegment, styles.education].join(' ')}>
          <h3>Education</h3>
          <span>Sheffield Hallam University- </span>BSc (Hons) Software Engineering<br/>
		      <span>Peterborough Regional College - </span>BTEC in Software Development
        </div>

      </div>
    </Layout>
  )
}

export const Head = () => (
  <SEO title="Robert Walker • CV" />
)
