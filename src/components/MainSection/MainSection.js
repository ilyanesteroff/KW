import React from 'react'
import UpperContainer from './UpperContainer'
import { Sectionstyle } from './styles'

class MainSection extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <main style={Sectionstyle}>
                <UpperContainer/>
            </main>
        )
    }
}

export default MainSection 