import React from 'react'
import { Width } from '../pages/contexts'

const Video = (props) => {
   let style = getStyle(Width())
   let content = <iframe src={props.url} style={style} allowFullScreen/>
   return content
}

const getStyle = (width) => {
    let output = {
        position: 'absolute',
        right: '5%',
        top: '10vh',
        height: '50vh',
        width: '50%',
        border: 'none',
        borderRadius: '2vh'
    }
    if(width < 925) {
        output.width = '80%'
        output.right = '10%' 
        output.top = '40%'
    }
    return output
}

export default Video