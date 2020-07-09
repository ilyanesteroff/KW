import React from 'react'
import { navbarItem } from './styles'
import { ScrollTopContext } from '../pages/contexts'

class NavbarItem extends React.Component{
    constructor(props){
        super(props)

        this.mouseEnters = this.mouseEnters.bind(this)
        this.mouseLeaves = this.mouseLeaves.bind(this)
    }
    
    static contextType = ScrollTopContext

    mouseEnters(event){
      event.target.style.borderBottom = '2px solid #eeeeee'
    }

    mouseLeaves(event){
      event.target.style.borderBottom = 'none'
    }

    render() {
        let output 
        this.context? output = <h3 onMouseEnter={this.mouseEnters} onMouseLeave={this.mouseLeaves} style={navbarItem}>{this.props.option}</h3>
         : output = <h3 style={navbarItem}>{this.props.option}</h3>
        return output
    }
}

export default NavbarItem 