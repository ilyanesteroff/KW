import React, { useState, useEffect } from 'react'
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Time = () => {
  const getTime = () => {
    let date = new Date();
    let utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    return new Date(utc + (3600000*(-4)))
  }

  const [ date, setDate ] = useState(getTime())
  
  useEffect(_ => {
    const clock = setInterval(() => tick(), 1000)
    return () => clearInterval(clock)
  })
    
  const tick = _ => {
    setDate(getTime())
  }
    
  return (
    <div 
      id="time"
      className="icon-label"
    >
      <FontAwesomeIcon icon={ faClock }/>
      <h3>{date.toLocaleTimeString()}</h3>
    </div>
  )
}

export default Time