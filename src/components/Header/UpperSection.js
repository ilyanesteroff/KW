import React from 'react'
import LocalTime from './LocalTime'
import RightUpperSection from './RightUpperSection'
import { upperHeader } from './styles'

class UpperSection extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style={upperHeader}>
                <ul>
                    <li><LocalTime /></li>
                    <li><RightUpperSection /></li>
                </ul>
            </div>
        )
    }
}

export default UpperSection