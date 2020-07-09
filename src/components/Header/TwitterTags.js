import React from 'react'
import { twitts, twitt } from './styles'

class TwitterTags extends React.Component{
    
    render(){
        let twitterTags = this.props.tags.map((tag, index) => {
            return <li key={index}><h3 style={{margin: '1vh'}}>{'#' + tag}</h3></li>
        })

        return(
            <ul style={twitts}>
                {twitterTags}
            </ul>
        )
    }
}

export default TwitterTags