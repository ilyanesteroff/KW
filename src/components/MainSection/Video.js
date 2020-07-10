import React from 'react'
import { WidthContext } from '../pages/contexts'

const Video = (props) => {
   const Width = () => React.useContext(WidthContext)
   let style = getStyle(Width())
   let content = <iframe src={props.url} style={style} allowFullScreen/>
   return content
}

const getStyle = (width) => {
    let output = {
        position: 'absolute',
        right: '5%',
        margin: '0 0 0 5%',
        top: '10vh',
        height: '50vh',
        width: '50%',
        border: 'none',
        borderRadius: '2vh'
    }
    if(width < 750) {
        output.width = '80%'
        output.right = '10%' 
    }
    return output
}

export default Video