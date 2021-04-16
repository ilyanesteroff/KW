import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useOverflowBlock } from '../../helpers/hooks'


export const Portal = ({ parent, children }) => {
  const parentElem = document.getElementById(parent)
  const child = document.createElement('div')

  useOverflowBlock()

  useEffect(() => {
    parentElem.appendChild(child)
    return () => parentElem.removeChild(child)
  })

  return createPortal(children, child)
}

export const withPortal = (Component, parent) => (
  <Portal parent={ parent }>
    <Component/>
  </Portal>
)

export default Portal