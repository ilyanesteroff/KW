import React from 'react'
import { twitts } from './styles'
import { Link } from 'react-router-dom'

export default class extends React.Component{
    
    render(){
        let twitterTags = this.props.tags.map((tag, index) => {
            return <li key={index}>
              <h3 style={{margin: '1vh'}}>
                <Link to={`/twitts/${tag}`} style={{textDecoration: 'none', color: this.props.color === undefined ? '#eee' : this.props.color}}>
                  {'#' + tag}
                </Link>
              </h3>
            </li>
        })

        return (
            <ul style={twitts}>
                {twitterTags}
            </ul>
        )
    }
}