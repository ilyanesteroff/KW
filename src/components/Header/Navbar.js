import React from 'react'
import NavbarItem from './NavbarItem.js'
import DropDownIcon from './DropDownIcon'
import { WidthContext, ScrollTopContext } from '../pages/contexts'
import { Link } from "react-router-dom";
import { link } from './styles'
import { navbarItems } from '../MainSection/info'

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
       {navbarItems.map(item => {
         let path
         item === 'Home' ? path = '' : path = item.toLowerCase()
         if(window.location.pathname === '/' + path) {
           return 
         } else {
           return <li><Link to={'/' + path} style={link}><NavbarItem option={item} /></Link></li>
         }
        })}
    </ul> 
     : output = <DropDownIcon/>
    return(
      <div style={style}>
        {output}
      </div>
    )
}

export default Navbar