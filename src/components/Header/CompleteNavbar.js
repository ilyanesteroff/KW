import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

class CompleteNavbar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Logo width={this.props.width} height={this.props.height} url={'https://upload.wikimedia.org/wikipedia/commons/2/24/Seal_of_Key_West%2C_Florida.png'}/>
                <Navbar width={this.props.width} height={this.props.height} />
            </div>
        )
    }
}

export default CompleteNavbar
