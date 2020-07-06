import React from 'react'
import { lowerHeader } from './styles'
import Logo from './Logo'
import Navbar from './Navbar'

class LowerSection extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div style={lowerHeader} className="lowerHeader">
                <Logo url={'https://upload.wikimedia.org/wikipedia/commons/2/24/Seal_of_Key_West%2C_Florida.png'}/>
                <Navbar />
            </div>
        )
    }
}

export default LowerSection