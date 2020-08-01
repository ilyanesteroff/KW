import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

export default (props) => {
  let placeInfoStyle = {
    backgroundColor: props.color
  }
  return (
    <div className="PlaceContainer">
      <img src={props.url} className="PlaceImage"/>
      <div className="PlaceInfo" style={placeInfoStyle}>
        <h2 className="NameOfThePlace">{props.factType}</h2>
        <p className="PlaceInfoText">{props.content}</p>
        <Link to={`/places/${props.place}`} className="MoreInfoLink">More details</Link>
        <FontAwesomeIcon icon={faTimesCircle} className="OpenCloseBar"/>
      </div>
    </div>
  )
}

