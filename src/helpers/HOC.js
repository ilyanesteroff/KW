import React, { useEffect } from 'react'


export const WithScrollUp = Component => {
  const Wrapper = ({ ...props }) => {
    useEffect(() => {
      window.scrollTo(0, 0)
    })
    return <Component {...props} />
  }
  return Wrapper
}