import React from 'react'
import HeaderTweets from './HeaderTweets'
import Weather from './Weather'

class CompleteLowerLowerSection extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div>
                <HeaderTweets/>
                <Weather/>
            </div>
        )
    }
}

export default CompleteLowerLowerSection