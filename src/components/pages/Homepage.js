import React from 'react'
import Header from '../Header/Header'
import MainSection from '../MainSection/MainSection'

class Homepage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Header width={this.props.width} height={this.props.height}/>
                <MainSection/>
            </div>
        )
    }
}

export default Homepage