import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { divStyle, item, iconStyle } from './styles'

class UpperOption extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
          <ul style={divStyle}>
            <li><FontAwesomeIcon style={iconStyle} icon={this.props.icon}/></li>
            <li><h3 style={item}> {this.props.sentence} </h3></li>
          </ul>
        )
    }
}

export default UpperOption