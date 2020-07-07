import React from 'react'
import NavbarItem from './NavbarItem.js'
import DropDownIcon from './DropDownIcon'
import { navbar } from './styles'

class Navbar extends React.Component{
    constructor(props){
        super(props)
        
    }

    render(){
        let output
        this.props.width > 1100? output = 
        <ul>
            <li><NavbarItem option='Home' /></li>
            <li><NavbarItem option='About' /></li>
            <li><NavbarItem option='History' /></li>
            <li><NavbarItem option='Location' /></li>
        </ul> 
          : output = <DropDownIcon/>
        return(
            <div style={navbar}>
                {output}
            </div>
        )
    }
}

export default Navbar