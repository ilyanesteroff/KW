import React from 'react'
import LocalTime from './LocalTime'
import RightUpperSection from './RightUpperSection'
import { upperHeader } from './styles'

class UpperSection extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let output
        this.props.width > 700? output = <div>
          <li><LocalTime/></li>
          <li><RightUpperSection width={this.props.width} height={this.props.height}/></li></div>
         :  output = <li><RightUpperSection width={this.props.width} height={this.props.height}/></li>

        return(
            <div style={upperHeader}>
                <ul>
                    {output}
                </ul>
            </div>
        )
    }
}

export default UpperSection