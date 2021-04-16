import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { closeModal } from '../../../redux/actions'
import Portal from '../Portal'
import CloseBtn from './CloseModal'
import Container from '../../../styles/inPortal'


const Modal = ({ url }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const close = () => {
    const params = new URLSearchParams(window.location.search)
    params.delete('image')
    dispatch(closeModal())
    history.push({ search: params.toString() })
  }

  return(
    <Portal parent="modal-root">
      <Container imageUrl={ url }>
        <img  
          src={ url } 
          alt="pic"
        />
        <CloseBtn close={ close }/>
      </Container>
    </Portal>
  )
}


export default React.memo(Modal)
