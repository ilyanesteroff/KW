import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

export default () => {
  let style = {
    main : {
      width: '100%' ,
      height: '50vh',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    icon: {
      width: '20%',
      height: 'auto',
      color: '#3388dd',
      marginTop: '20vh',
      transform: 'rotate(360deg)',
      transition: 'transform 5s'
    }
  }
  return (
      <div style={style.main}>
        <FontAwesomeIcon icon={faReact} style={style.icon} className="spinner"/>
      </div>
  )
}