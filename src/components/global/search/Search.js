import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Portal from '../Portal'
import SearchBar from './Searchbar'
import Container from '../../../styles/search/main'
import ModalContent from '../../../styles/inPortal'
import { closeSearch } from '../../../redux/actions'
import CloseBtn from '../modal/CloseModal'


const Search = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const close = () => {
    const params = new URLSearchParams(window.location.search)
    params.delete('name')
    dispatch(closeSearch())
    history.push({ search: params.toString() })
  }

  return(
    <Portal parent="modal-root">
      <ModalContent>
        <CloseBtn close={ close }/>
        <Container>
          <SearchBar/>
        </Container>
      </ModalContent>
    </Portal>
  )
}

export default Search