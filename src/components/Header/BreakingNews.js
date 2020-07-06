import React from 'react'
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { divStyle, item, iconStyle } from './styles'

class BreakingNews extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
          <ul style={divStyle}>
            <li><FontAwesomeIcon style={iconStyle} icon={faNewspaper} /></li>
            <li><h3 style={item}> Breaking News </h3></li>
          </ul>
        )
    }
}

export default BreakingNews