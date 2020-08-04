import React, {useState, useLayoutEffect} from 'react'
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default _ => {
  const getTime = () => {
    let date = new Date();
    let utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    return new Date(utc + (3600000*(-4)))
  }

  const [date, setDate] = useState(getTime())
  
  useLayoutEffect(_ => {
    const timerID = setInterval(
      _ => tick(),
      1000
    )
    return _ => clearInterval(timerID)
  })
    
  const tick = _ => {
    setDate(getTime())
  }
    
  return (
    <div className="LocalTime">
      <span><FontAwesomeIcon className="UpperIcon" icon={faClock} /></span>
      <h3 className="UpperOption"> {date.toLocaleTimeString()} </h3>
    </div>
  )
}