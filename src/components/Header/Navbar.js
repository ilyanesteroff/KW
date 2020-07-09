import React from 'react'
import NavbarItem from './NavbarItem.js'
import DropDownIcon from './DropDownIcon'
import { WidthContext, ScrollTopContext } from '../pages/contexts'

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