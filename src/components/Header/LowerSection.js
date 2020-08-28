import React from 'react'
import CompleteNavbar from './CompleteNavbar'
import CompleteLowerLowerSection from './CompleteLowerLowerSection'
import { Width, Height } from '../pages/contexts'

export default React.memo(props => {
  
  let style = {
    height: Height() < 950? '50vh' : '70vh',
    backgroundImage: props.image,
  }

  return (
    <div style={style} className="Header-LowerSection">
      {Width() > 1000 && <CompleteLowerLowerSection/>}
      <CompleteNavbar/>
    </div>
  )
})