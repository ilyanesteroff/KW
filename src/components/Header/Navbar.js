import React from 'react'
import NavbarItem from './NavbarItem.js'
import { navbar } from './styles'

class Navbar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style={navbar}>
                <ul>
                    <li><NavbarItem option='Home' /></li>
                    <li><NavbarItem option='About' /></li>
                    <li><NavbarItem option='History' /></li>
                    <li><NavbarItem option='Location' /></li>
                </ul>
            </div>
        )
    }
}

export default Navbar