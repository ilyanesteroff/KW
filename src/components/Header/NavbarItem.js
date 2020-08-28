import React, { useContext } from 'react'
import { ScrollTopContext } from '../pages/contexts'

export default React.memo(props =>{
  const ScrollTop = () => useContext(ScrollTopContext)
  
  let output 
  ScrollTop? output = <h3 className="NavbarItem" >{props.option}</h3>
         : output = <h3 className="NavbarItem">{props.option}</h3>
  return output
})
