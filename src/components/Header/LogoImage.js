import React from 'react'
import { WidthContext, ScrollTopContext } from '../pages/contexts'

const Width = () => React.useContext(WidthContext)

const LogoImage = (props) => {

  let logoImageStyle = getStyle({
    position: 'absolute'
}, Width())

  return(
    <div>
      <img src={props.url} style={logoImageStyle}  height='auto'/>
    </div>
  )
}

const getStyle = (style, Width) => {

    const width = Math.floor(Width/100)
    let minTop = 2.8
    let minLeft = 2
    let maxWidth = 80
    let ratio = 15 - width

    if(ratio > 0){
        for(let i = 1; i < ratio; i++){
          minLeft += 0.2
          minTop += 0.15
          maxWidth -= 2.5
        }
      }
      style.left = minLeft+'vw'
      style.top = minTop +'vh'
      style.width = maxWidth+'px'
    return style
}

export default LogoImage