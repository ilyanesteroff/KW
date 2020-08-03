import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faSadCry } from '@fortawesome/free-regular-svg-icons'
import { Chapter } from '../Helpers/DesignAssistants'

export default ({spinner, message}) => {
  if(spinner === undefined) spinner = true
  let style = {
    main : {
      width: '100%' ,
      height: '50vh',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    },
    icon: {
      width: '25%',
      height: 'auto',
      color: spinner ? '#3388dd' : '#882222',
      marginTop: '5vh',
    },
    chapter : {
      position: 'absolute',
      bottom: '-30%',
      marginLeft: '3%'
    }
  }
  let output
  spinner ? output = <><FontAwesomeIcon icon={faReact} style={style.icon} className="spinner"/><Chapter additionalStyle={style.chapter}>Processing...</Chapter></>
    : output = <><FontAwesomeIcon icon={faSadCry} style={style.icon}/>
                  <Chapter additionalStyle={style.chapter}>{message}</Chapter> </>
  return (
      <div style={style.main}>
        {output}
      </div>
  )
}