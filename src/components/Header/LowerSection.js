import React from 'react'
import CompleteNavbar from './CompleteNavbar'
import CompleteLowerLowerSection from './CompleteLowerLowerSection'
import { WidthContext } from '../pages/contexts'

const Width = () => React.useContext(WidthContext)

const LowerSection = (props) => {

  let output 
  Width() > 950?
  output = <div><CompleteNavbar/>
    <CompleteLowerLowerSection/></div> :
    output = <CompleteNavbar />
  let style = {
      height: '70vh',
      position: 'relative',
      boxShadow: 'inset 0 0 40vh black, inset 0 0 40vh black',
      opacity: '0.9',
      backgroundImage: props.image,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
  }
  return (
     <div style={style}>
       {output}
     </div>
  )
}

export default LowerSection