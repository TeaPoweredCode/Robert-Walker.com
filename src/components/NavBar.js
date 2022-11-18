import React from 'react'
import Hexagon from "./Hexagon"
import * as Icons  from './HexagonIcons'
import * as styles from '../styles/navbar.module.css'

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <Hexagon radius={40} stroke={3} title={"Robert Walker -\nTea powered coder"}>
        <Icons.Logo/>
      </Hexagon>
      <Hexagon radius={30} stroke={3} link={"/"} title={"Projects"}>
        <Icons.Projects/>
      </Hexagon>
      <Hexagon radius={30} stroke={3} link={"/cv"} title={"CV"}>
        <Icons.CV/>
      </Hexagon>
      <Hexagon radius={30} stroke={3} link={"https://github.com/MrLuxan"} title={"Github"}>
        <Icons.GitHub/>
      </Hexagon>      
    </nav>
  )
}