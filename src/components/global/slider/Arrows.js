import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Arrow = ({ rightArrow, ...props }) => (
  <FontAwesomeIcon 
    icon={ rightArrow ? faArrowRight : faArrowLeft }
    className={ rightArrow ? 'right' : 'left' }
    { ...props }
  />
)

export default Arrow