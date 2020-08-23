import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default (props) => {
  return (
    <div className="CityService">
      <a href={props.url} target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon className="CityServicesIcon" icon={props.icon}/>
        <h2 className="CityServicesHeadline">{props.headline}</h2>
        <p className="CityServicesText">{props.text}</p>
      </a>
    </div>
  )
}