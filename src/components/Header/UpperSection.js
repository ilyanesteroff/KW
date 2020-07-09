import React from 'react'
import LocalTime from './LocalTime'
import RightUpperSection from './RightUpperSection'
import { upperHeader } from './styles'
import { WidthContext } from '../pages/contexts'

const UpperSection = () => {

    const Width = () => React.useContext(WidthContext)
    
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