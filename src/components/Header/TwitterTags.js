import React from 'react'
import { twitts, twitt } from './styles'
import { Link } from 'react-router-dom'

export default class extends React.Component{
    
    render(){
        let twitterTags = this.props.tags.map((tag, index) => {
            return <li key={index}><h3 style={{margin: '1vh'}}><Link to={`/twitts/${tag}`} style={{textDecoration: 'none', color: '#eee'}}>{'#' + tag}</Link></h3></li>
        })

        return (
            <ul style={twitts}>
                {twitterTags}
            </ul>
        )
    }
}