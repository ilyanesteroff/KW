import React from 'react'
import UpperOption from './UpperOption'
import {rightUpperSection} from './styles'
import { faVirus } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-regular-svg-icons'

class RightUpperSection extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <ul style={rightUpperSection}>
                <li><UpperOption sentence={"Covid-19 Updates"} icon={faVirus} width={this.props.width} height={this.props.height}/></li>
                <li><UpperOption sentence={"Breaking News"} icon={faNewspaper} width={this.props.width} height={this.props.height}/></li>
            </ul>
        )
    }
}

export default RightUpperSection