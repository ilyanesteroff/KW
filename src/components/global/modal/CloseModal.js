import React, { memo, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'


const CloseModal = ({ close }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if(e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [ close ])

  return(
    <FontAwesomeIcon 
      icon={ faTimesCircle }
      onClick={ close }
      id="close-btn"
    />
  )
}


export default memo(CloseModal)