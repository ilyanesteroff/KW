import React from 'react'
import Header from '../Header/Header'
import Head from './Head'
import MainSection from '../MainSection/MainSection'

class Homepage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <html>
                <head>
                    <Head />
                </head>
                <body>
                    <div>
                        <Header/>
                        <MainSection/>
                    </div>
                </body>
            </html>
        )
    }
}

export default Homepage