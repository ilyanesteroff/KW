import React from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../../redux/actions'
import { useParamsManager } from '../../../helpers/hooks'
import Portal from '../Portal'
import CloseBtn from './CloseModal'
import Container from '../../../styles/inPortal'


const Modal = ({ url }) => {
  const dispatch = useDispatch()
  const { deleteParam } = useParamsManager('image')

  return(
    <Portal parent="modal-root">
      <Container imageUrl={ url }>
        <img  
          src={ url } 
          alt="pic"
        />
        <CloseBtn close={() => deleteParam(() => dispatch(closeModal()))}/>
      </Container>
    </Portal>
  )
}


export default React.memo(Modal)
