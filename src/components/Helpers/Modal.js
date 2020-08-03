import React, { useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('modal-root');


const Modal = props => {
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

const ModalTemplate = ({src, opened}) => {
  return (
    <Modal>
      <div className="ImageInModal" onClick={() => opened(false)}>
        <img src={src} className="ModalImage"/>
      </div>
    </Modal>
  )
}

export { modalRoot, ModalTemplate }