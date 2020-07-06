import React from 'react'
import { navbarItem } from './styles'

class NavbarItem extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <h3 style={navbarItem}>{this.props.option}</h3>
        )
    }
}

export default NavbarItem 