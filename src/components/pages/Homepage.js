import React from 'react'
import Header from '../Header/Header'
import MainSection from '../MainSection/MainSection'
import { WidthContext, HeightContext } from './contexts'

class Homepage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Header/>
                <MainSection/>
            </div>
        )
    }
}

export default Homepage