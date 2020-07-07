import React from 'react'
import {logoImageStyle} from './styles'

class LogoImage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let logoWidth
        const width = this.props.width
        return(
            <div>
                <img src={this.props.url} style={logoImageStyle} width="5%" height='auto'/>
            </div>
        )
    }
}

export default LogoImage