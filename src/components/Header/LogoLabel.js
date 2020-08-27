import React from 'react'
import { WidthContext, ScrollTopContext } from '../pages/contexts'

const Width = () => React.useContext(WidthContext)

const LogoLabel = () => {
  return(
    <div className="KeyWestLogoLabelBox">
      <h2 className="KeyWestLogoLabel">Key West Florida</h2>
    </div>
  )
}

export default LogoLabel