import React from 'react'
import Header from '../Header/Header'

class Homepage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Header width={this.props.width} height={this.props.height}/>
        )
    }
}

export default Homepage