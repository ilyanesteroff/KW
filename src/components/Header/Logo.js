import React from 'react'
import LogoImage from './LogoImage'
import LogoLabel from './LogoLabel'

export default props => {
  return(
    <div>
      <LogoImage url={props.url} />
      <LogoLabel />
    </div>
  )
}