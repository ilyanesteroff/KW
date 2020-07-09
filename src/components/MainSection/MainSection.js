import React from 'react'
import Container from './Container'

class MainSection extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const style = {
            position: 'relative',
            height: '60vh',
            marginTop: '10vh',
            backgroundPosition: 'center',
            backgroundsize: 'cover'
        }

        return(
            <main style={style}>
                <Container/>
            </main>
        )
    }
}

export default MainSection 