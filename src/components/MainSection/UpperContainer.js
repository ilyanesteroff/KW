import React from 'react'
import Description from './Description'
import CityStuff from './CityStuff'
import { generateContainerStyle } from './styles'

export default (props) => {
  let style = generateContainerStyle()
  return (
      <div style={style}>
         { props.children === undefined &&
           <>
             <Description/>
             <CityStuff/>
           </>
         }
         {props.children}
      </div>
  )
}