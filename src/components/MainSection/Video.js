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
        bottom: '5%',
        height: '65%',
        width: '50%',
        border: 'none',
        borderRadius: '2vh'
    }
    if(width < 567) {
        output.width = '90%'
        output.right = '5%' 
    }
    if(width < 400 || height < 500){
        output.height = '40vh'
        output.borderRadius = 'none'
    }
    if(width >= 768 && height >= 1024 || width >= 1024 && height >= 768)
      output.height = '30vh'
    return output
}

export default Video