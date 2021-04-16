import React, { memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'


const CloseModal = ({ close }) => (
  <FontAwesomeIcon 
    icon={ faTimesCircle }
    onClick={ close }
    id="close-btn"
  />
)


export default memo(CloseModal)