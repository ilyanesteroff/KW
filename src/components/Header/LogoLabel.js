import React from 'react'
import {logoLabelStyle} from './styles'

class LogoLabel extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h2 style={logoLabelStyle}>Key West Florida</h2>
            </div>
        )
    }
}

export default LogoLabel