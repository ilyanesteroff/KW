import React from 'react'
import NavbarItem from './NavbarItem.js'
import DropDownIcon from './DropDownIcon'
import { WidthContext, ScrollTopContext } from '../pages/contexts'
import { Link } from "react-router-dom";
import { navbarItems } from '../MainSection/info'
import { StickyNavbarContext } from '../pages/contexts'

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
    

    width > 1100? output = 
    <ul>
       {navbarItems.map(item => {
         let path
         item === 'Home' ? path = '' : path = item.toLowerCase()
         if(window.location.pathname === '/' + path) {
           return 
         } else {
           return <li key={item}><Link to={'/' + path} className="NavbarLink"><NavbarItem option={item} /></Link></li>
         }
        })}
    </ul> 
     : output = <StickyNavbarContext.Consumer>
       { value => <DropDownIcon stickyNavbar={value}/>}
     </StickyNavbarContext.Consumer>
    return(
      <div style={style}>
        {output}
      </div>
    )
}

export default Navbar