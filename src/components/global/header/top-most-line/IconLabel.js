import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from 'react-router-dom'


const IconLabel = ({ link, icon, label, ...props }) => (
  <NavLink 
    className="icon-label"
    activeStyle={{ display: 'none' }}
    to={ link }
    { ...props }
  >
    <FontAwesomeIcon icon={icon}/>
    <h3>{ label }</h3>
  </NavLink>
)

export default IconLabel