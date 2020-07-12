import React from 'react'
import SocialMedias from './SocialMedias'
import Rights from './Rights'
import { Width, Height } from '../pages/contexts'

const Container = (props) => {
    let style = getStyle(Width(), Height())
    let result = 
    <div style={style.main}>
        <SocialMedias/>
        <div style={style.hr}/>
        <Rights/>
    </div>
    return result
}

const getStyle = (width, height) => {
    let output = {
        main: {
          position: 'absolute',
          top: '10%',
          left: '10%'
        },
        hr: {
          height: '0.4vh',
          width: '100%',
          margin: '5% 0 2% 0',
          backgroundColor: '#22cccc'
        }
    }
    if (width > 950){
        output.main.left = '10%'
        output.main.width = '80%'
        output.main.top = '5vh'
        output.main.height = '20vh'
    } else {
        output.main.left = '3%'
        output.main.width = '90%'
        output.main.height = '30vh'
    }
    return output
} 

export default Container