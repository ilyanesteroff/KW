import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faSadCry } from '@fortawesome/free-regular-svg-icons'
import { Chapter } from '../Helpers/DesignAssistants'

export default ({spinner}) => {
  if(spinner === undefined) spinner = true
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
      color: spinner ? '#3388dd' : '#882222',
      marginTop: '20vh',
    }
  }
  let output
  spinner ? output = <FontAwesomeIcon icon={faReact} style={style.icon} className="spinner"/>
    : output = <><FontAwesomeIcon icon={faSadCry} style={style.icon}/> <Chapter>Server failed</Chapter> </>
  return (
      <div style={style.main}>
        {output}
      </div>
  )
}