import React from 'react'
import UpperSection from './UpperSection'
import LowerSection from './LowerSection'

class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <UpperSection />
                <LowerSection />
            </div>
        )
    }
}

export default Header