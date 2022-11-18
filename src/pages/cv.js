import React from "react"
import Layout from "../components/Layout"
import { SEO } from "../components/seo"
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
            <span>Robert-Walker.com</span>            
            <span>Email: email@Robert-Walker.com</span>
            <span>github.com/MrLuxan</span>
            <span>{process.env.OtherContact}</span>
          </div>
          <hr/>
          Sheffield , UK based software engineer specialising in windows desktop applications and web development with experience in with both front and back end.          
	      </div>

        <div className={[styles.cvSegment, styles.experience].join(' ')}>
          <h3>Professional experience</h3>
          <div className={styles.CodingExperience}>
            <div>
              Core Skills
              <ul>
                <li> C# </li>
                <li> Node <ul><li>NW.js</li></ul></li>                
                <li> Frontend Technologies <ul><li> Html / CSS / SCSS </li><li> Javascript</li><li> React</li></ul></li>
                <li> Database Technologies <ul><li> MySQL / SQL </li></ul></li>
                <li> Python <ul><li>Django</li></ul></li>
                <li> Other <ul><li> Web extensions<br/> <span style={{paddingLeft:"20px"}}> - Chrome / Firefox </span></li></ul></li>
              </ul>
            </div>
            <div>
              Other industry experience
              <ul>
                <li>VB</li>
                <li>Java<ul><li>Android development</li></ul></li>
                <li>PHP <ul><li> Laravel </li></ul></li>
                <li>C<ul><li>Arduino</li></ul></li>
              </ul>
            </div>
          </div>         
        </div>

        <div className={[styles.cvSegment, styles.employment].join(' ')}>
          <h3>Employment</h3>
          <EmploymentPlace place="GWD" site="gwd.team" siteUrl="https://gwd.team/" time="June 2021 - Present" jobTitle="Software Engineer">
            <p>
              Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.
            </p>
            <p>
              Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.
            </p>
            <p>
              Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.
            </p>
          </EmploymentPlace>

          <div className={styles.cvPagebrake}> </div>

          <EmploymentPlace place="Pryor Marking Technology" site="Pryormarking.com" siteUrl="http://www.pryormarking.com/" time="June 2013 - June 2021" jobTitle="Software Engineer">
            <p>
              My main role while at Pryors has been working on it's flagship desktop application "Traceable-IT", a complex marking and traceability package written in C# and VB.
			        This has involded developing new software feature and integrating new hardware such as ABB Robots , RFID readers and Cognex vision systems. 
			        I also work closely with clients such as Rolls Royce and Jaguar Land Rover to help create custom modules and soltions.
			        For the last two years I've been heading development of the next generation of traceability software which has required an almost complete rewrite for distribution in the US.
            </p>
            <p>
              With my background in web development I've also been tasked with developing of a range a sites for different tasks.
			        These have included an internal ticketing system for the software department which was then expanded into a project management tool, used across the whole company; a tool to manage foreign translations of the Tracable-IT sofware; an Online manuals site to manage documention both the developers to and tanslators;
			        and the latest site is for the management of software licence keys ready for the release of the next generation of the desktop application.
            </p>
            <p>
              I'm also often given any development that has fallen outside our developemnt team's standard skill set, 
			        such as developing an Android application with a web API for a government contract to help prevent metal theft,
              creating an RFID tag reading application that runs on a pocket PC for JLR or 
              building a "Pick-To-Light" system using Arduinos to aid in the assembly of machines.
            </p>
          </EmploymentPlace>
          <EmploymentPlace place="IOAIS" time="June 2011 - September 2012" jobTitle="Managing Director">
            <p>
              During our placement year at Sheffield Hallam, a friend and I took advantage of the university’s enterprise scheme and started our own company. 
              IOAIS was a web design and software development company. During these 15 months of operation we sourced and maintained contact with a small number of clients,
              as well as working on a range of internal projects.
            </p> 
            <p>
              Apart from improving my design and development skills, I have also learnt a significant amount about running a business even if it was through
              running our own for only a short period of time, learning from both our successes and our failures.
              We had a lot experience, with finding and managing clients; gathering specifications and the general day-to-day business admin tasks.
              A lot of these experiences have helped me directly in my later career as well as enabling me to give advice to numerous friends about how to set up
              their own businesses or go self-employed.
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
