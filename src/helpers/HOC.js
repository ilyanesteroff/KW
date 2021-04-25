import React, { useEffect } from 'react'
import { useModal } from './hooks'


export const WithScrollUp = Component => {
  const Wrapper = ({ ...props }) => {
    useEffect(() => {
      document.body.scroll(0, 0)
    })
    return <Component { ...props } />
  }
  return Wrapper
}

export const WithModal = Component => {
  const Wrapper = ({ ...props }) => {
    const { setImage } = useModal()
    return(
      <Component
        { ...props }
        setImage={ setImage }
      />
    )
  }

  return Wrapper
}
