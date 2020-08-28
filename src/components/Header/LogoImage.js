import React from 'react'
import { WidthContext } from '../pages/contexts'

const Width = () => React.useContext(WidthContext)

const LogoImage = React.memo((props) => {
  return(
    <div>
      <img src={props.url} alt="The logo of Key West"  height='auto' className="KeyWestLogoImage"/>
    </div>
  )
})

export default LogoImage