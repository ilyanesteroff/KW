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
                <li><UpperOption sentence={"Covid-19 Updates"} icon={faVirus} link={'/covid'}/></li>
                <li><UpperOption sentence={"Breaking News"} icon={faNewspaper} link={'/news'}/></li>
            </ul>
        )
    }
}

export default RightUpperSection