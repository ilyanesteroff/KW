import React from 'react'
import { Chapter } from '../Helpers/DesignAssistants'

export default ({ image, width }) => {
    let style = {
        height: '100%',
        width: `${width}px`,
        position: 'relative',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'auto',
    }
    let chapter = {
      position: 'absolute',
      bottom: '4%',
      width: '100%',
      transform: 'translate(25%, 0)'
    }
    return (
         <div style={style}>
         </div>
    )
}