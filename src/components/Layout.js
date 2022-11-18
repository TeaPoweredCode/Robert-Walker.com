import React from 'react'
import NavBar from './NavBar'
import '../styles/global.css'

export default function Layout({ children }) {
  return (      
    <div className='layout'>
        <NavBar/>
        <div className="main">
            { children }
        </div>
    </div>
  )
}
