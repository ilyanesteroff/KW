import React from 'react'
import NavbarItem from './NavbarItem.js'
import DropDownIcon from './DropDownIcon'
import { WidthContext, ScrollTopContext } from '../pages/contexts'
import { Link } from "react-router-dom";
import { link } from './styles'

const Navbar = () => {
    const Width = () => React.useContext(WidthContext)
    const ScrollTop = () => React.useContext(ScrollTopContext)
    const width = Width()
    const scrollTop = ScrollTop()
    let output
    let style = {
      position: 'absolute',
      right: '5%',
      top: '5vh',
    }
    
    if(scrollTop && width > 1100) {
      style.top = '5vh'
    } else if (scrollTop && width < 1100) {
      style.top = '3vh'
    } else {
      style.top = '5vh'
    }

    width > 1100? output = 
    <ul>
      <li><Link to="/" style={link}><NavbarItem option='Home' /></Link></li>
       <li><Link to="/about" style={link}><NavbarItem option='About' /></Link></li>
       <li><Link to="/history" style={link}><NavbarItem option='History' /></Link></li>
       <li><Link to="/location" style={link}><NavbarItem option='Location' /></Link></li>
    </ul> 
     : output = <DropDownIcon/>
    return(
      <div style={style}>
        {output}
      </div>
    )
}

export default Navbar