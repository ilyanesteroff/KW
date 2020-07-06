import React from 'react'
import LogoImage from './LogoImage'
import LogoLabel from './LogoLabel'

class Logo extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <LogoImage url={this.props.url} />
                <LogoLabel/>
            </div>
        )
    }
}

export default Logo