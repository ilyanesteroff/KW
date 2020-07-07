import React from 'react'
import { hiddenNavbarIcon } from './styles'
import DropDownMenu from './DropDownMenu'

class DropDownIcon extends React.Component{
    constructor(props){
        super(props)
        this.openNavbar = this.openNavbar.bind(this)

        this.state = {
            isClicked: false
        }
    }
    
    openNavbar(){
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    render(){
        let output
        this.state.isClicked? output = 
        <div>
           <h2 style={hiddenNavbarIcon} onClick={this.openNavbar}>☰</h2>
           <DropDownMenu/>
        </div> : output = 
        <div>
            <h2 style={hiddenNavbarIcon} onClick={this.openNavbar}>☰</h2>
        </div>

        return output
    }
}

export default DropDownIcon