import React from 'react'
import LocalTime from './LocalTime'
import RightUpperSection from './RightUpperSection'
import { upperHeader } from './styles'
import { WidthContext } from '../pages/contexts'

const Width = () => React.useContext(WidthContext)

const UpperSection = () => {
    
    let output
    Width() > 700? output = <div>
        <li><LocalTime/></li>
        <li><RightUpperSection /></li></div>
        :  output = <li><RightUpperSection /></li>

    return(
        <div style={upperHeader}>
            <ul>
                {output}
            </ul>
        </div>
    )
}

export default UpperSection