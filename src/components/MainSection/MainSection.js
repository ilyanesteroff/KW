import React from 'react'
import UpperContainer from './UpperContainer'

class MainSection extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const style = {
            position: 'relative',
            height: '60vh',
            marginTop: '10vh'
        }

        return(
            <main style={style}>
                <UpperContainer/>
            </main>
        )
    }
}

export default MainSection 