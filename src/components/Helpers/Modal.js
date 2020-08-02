import React, { useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('modal-root');


export default props => {
  let element = document.createElement('div')

  useLayoutEffect(() => {
    modalRoot.appendChild(element)
    document.body.style.overflowY = 'hidden'
    
    return _ => {
      modalRoot.removeChild(element)
      document.body.style.overflowY = 'auto'
    }
  }, [])

  return  ReactDOM.createPortal(
    props.children,
    element
  );
}

export { modalRoot }