import React from 'react'
import {rightUpperSection} from './styles'

class RightUpperSection extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <>
              <ul style={rightUpperSection}>
                {this.props.children}
              </ul>
            </>
        )
    }
}

export default RightUpperSection