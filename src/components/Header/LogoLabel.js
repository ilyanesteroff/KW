import React from 'react'
import { WidthContext, ScrollTopContext } from '../pages/contexts'

const Width = () => React.useContext(WidthContext)
const ScrollTop = () => React.useContext(ScrollTopContext)

const LogoLabel = () => {

  let logoLabelStyle = getStyle({
    position: 'absolute',
    color: 'white',
    fontFamily: 'Nunito, sans-serif',
  }, Width())

  return(
    <div>
      <h2 style={logoLabelStyle}>Key West Florida</h2>
    </div>
  )
}

const getStyle = (style, Width) => {

  const width = Math.floor(Width/100)
  let minLeft = 9
  let minTop
  ScrollTop()? minTop = 4.6 : minTop = 5.3
  let maxfontSize = 1.5
  let ratio = 15 - width

  if(ratio > 0){
    for(let i = 1; i < ratio; i++){
      minLeft++
      minTop += 0.1
      maxfontSize -= 0.05
    }
  }
  style.left = minLeft+'vw'
  style.top = minTop +'vh'
  style.fontSize = maxfontSize+'rem'
  
  return style
}

export default LogoLabel