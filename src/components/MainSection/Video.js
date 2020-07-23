import React from 'react'
import { width, height } from '../Helpers/Helpers'

const Video = (props) => {
   let style = getStyle(width(), height())
   let content = <iframe src={props.url} style={style} allowFullScreen/>
   return content
}

const getStyle = (width, height) => {
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
    if(width < 400 || height < 500){
        output.height = '55vh'
        output.top = '35%'
    }
    if(width >= 768 && height >= 1024 || width >= 1024 && height >= 768)
      output.height = '30vh'
    return output
}

export default Video