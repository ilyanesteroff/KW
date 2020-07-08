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
                <LogoImage width={this.props.width} height={this.props.height} url={this.props.url} />
                <LogoLabel width={this.props.width} height={this.props.height}/>
            </div>
        )
    }
}

export default Logo