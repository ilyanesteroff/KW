import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  const generateLinks = () => 
    ['Home', 'About', 'Location', 'History'].map((link) => (
      <NavLink 
        to={
          link === 'Home' 
            ? '/'
            : `/${link.toLowerCase()}`
        }
        activeStyle={{ display: 'none' }}
        id="link"
      >{ link }</NavLink>
    ))

  return(
    <div id="navigation">
      { generateLinks() }
    </div>
  )
}

export default Navbar