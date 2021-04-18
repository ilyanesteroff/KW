import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import SearchBar from './Searchbar'
import Container from '../../../styles/search/main'
import ModalContent from '../../../styles/inPortal'
import { closeSearch } from '../../../redux/actions'
import { useParamsManager, useOverflowBlock } from '../../../helpers/hooks'
import CloseBtn from '../modal/CloseModal'
import Results from './Results'


const Search = () => {
  const dispatch = useDispatch()
  const { deleteParam, modifyParam, value } = useParamsManager('name')
  const [ query, setQuery ] = useState(value || '')
  useOverflowBlock()

  return(
    <ModalContent>
      <CloseBtn close={() => deleteParam(() => dispatch(closeSearch()))}/>
      <Container>
        <SearchBar 
          value={ query } 
          onChange={(e) => modifyParam(setQuery(e.target.value), e.target.value)}
        />
        <Results value={ query.toLowerCase() }/>
      </Container>
    </ModalContent>
  )
}

export default Search