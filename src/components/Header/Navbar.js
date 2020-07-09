import React from 'react'
import NavbarItem from './NavbarItem.js'
import DropDownIcon from './DropDownIcon'
import { WidthContext, ScrollTopContext } from '../pages/contexts'

const Navbar = () => {
    const Width = () => React.useContext(WidthContext)
    const ScrollTop = () => React.useContext(ScrollTopContext)
    let output
    let style = {
      position: 'absolute',
      right: '5%',
      top: '5vh',
    }
    
    if(ScrollTop() && Width() > 1100) {
      style.top = '5vh'
    } else if (ScrollTop() && Width() < 1100) {
      style.top = '3vh'
    } else {
      style.top = '5vh'
    }

    Width() > 1100? output = 
    <ul>
      <li><NavbarItem option='Home' /></li>
       <li><NavbarItem option='About' /></li>
       <li><NavbarItem option='History' /></li>
       <li><NavbarItem option='Location' /></li>
    </ul> 
     : output = <DropDownIcon/>
    return(
      <div style={style}>
        {output}
      </div>
    )
}

export default Navbar