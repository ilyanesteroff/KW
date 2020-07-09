import React from 'react'
import { lowerHeader } from './styles'
import CompleteNavbar from './CompleteNavbar'
import CompleteLowerLowerSection from './CompleteLowerLowerSection'
import { WidthContext } from '../pages/contexts'

const LowerSection = () => {

  const Width = () => React.useContext(WidthContext)
  let output 
  Width() > 950?
  output = <div><CompleteNavbar/>
    <CompleteLowerLowerSection/></div> :
    output = <CompleteNavbar />
        
  return (
     <div style={lowerHeader} className="lowerHeader">
       {output}
     </div>
  )
}

export default LowerSection