import React from 'react'
import CompleteNavbar from './CompleteNavbar'
import CompleteLowerLowerSection from './CompleteLowerLowerSection'
import { Width, Height } from '../pages/contexts'

const LowerSection = (props) => {
  
  let style = {
      height: Height() < 950? '50vh' : '70vh',
      position: 'relative',
      boxShadow: 'inset 0 0 40vh black, inset 0 0 40vh black',
      backgroundImage: props.image,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
  }
  return (
     <div style={style}>
       {Width() > 950 && <CompleteLowerLowerSection/>}
       <CompleteNavbar/>
     </div>
  )
}

export default LowerSection