import React from 'react'
import { Link } from 'react-router-dom'
import { WidthContext } from '../pages/contexts'

export default class extends React.PureComponent{
  static contextType = WidthContext
  render() {
    let twitterTags = this.props.tags.map((tag, index) => {
      return (
        <h3 key={index} style={{margin: '1vh', display: this.context > 700? 'inline' : 'block'}}>
          <Link to={`/tweets/${tag}`} style={{textDecoration: 'none', color: this.props.color === undefined ? '#eee' : this.props.color}}>
            {'#' + tag}
          </Link>
        </h3>
      )
    })

    return (
      <ul className="Twitts">
        {twitterTags}
      </ul>
    )
  }
}