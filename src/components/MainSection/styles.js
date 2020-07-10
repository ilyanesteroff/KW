import React from 'react'
import { WidthContext } from '../pages/contexts'

const Width = () => React.useContext(WidthContext)

const generateContainerStyle = () => {
    let _left, _width
  if(Width() > 800){
      _left = (Width() * 0.125) * 100 / Width()
      _width = (Width() * 0.75) * 100 / Width()
  } else {
      _left = (Width() * 0.05) * 100 / Width()
      _width = (Width() * 0.9) * 100 / Width()
  }
  let output = {
      position: 'absolute',
      width: _width + '%',
      left: _left + '%',
  }
  return output
}

export { generateContainerStyle }