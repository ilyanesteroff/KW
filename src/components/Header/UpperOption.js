import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WidthContext } from '../pages/contexts'
import { Link } from 'react-router-dom'

export default class extends React.Component{
  
  static contextType = WidthContext

  render() {
    const { link, sentence, icon } = this.props
    return(
      <div>
        <Link to={link}>
          <div className="LocalTime">
            <span> 
              <FontAwesomeIcon className="UpperIcon" icon={icon}/>
            </span>
            <h3 className="UpperOption"> 
              {sentence} 
            </h3>
          </div>
        </Link>
      </div>
    )
  }
}