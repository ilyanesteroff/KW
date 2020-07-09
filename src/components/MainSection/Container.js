import React from 'react'
import Description from './Description'
import { WidthContext } from '../pages/contexts'

const Width = () => React.useContext(WidthContext)

const Container = () => {
  let _left, _width
  if(Width() > 800){
      _left = (Width() * 0.125) * 100 / Width()
      _width = (Width() * 0.75) * 100 / Width()
  } else {
      _left = (Width() * 0.05) * 100 / Width()
      _width = (Width() * 0.9) * 100 / Width()
  }
  let style = {
      position: 'absolute',
      width: _width + '%',
      height: '10vh',
      left: _left + '%',
  }
  return (
      <div style={style}>
         <Description/>
      </div>
  )
}

export default Container