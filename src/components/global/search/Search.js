import React, { useState } from 'react'
import { useHistory } from 'react-router-dom' 
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
  const { deleteParam } = useParamsManager('name')
  const [ query, setQuery ] = useState(
    new URLSearchParams(window.location.search).get('name') || ''
  )
  const history = useHistory()
  useOverflowBlock()

  const onChange = (e) => {
    const { value } = e.target
    const params = new URLSearchParams()
    value
      ? params.append('name', value)
      : params.delete('name')
    setQuery(value)
    history.push({ search: params.toString() })
  }

  return(
    <ModalContent>
      <CloseBtn close={() => deleteParam(() => dispatch(closeSearch()))}/>
      <Container>
        <SearchBar 
          value={ query } 
          onChange={ onChange }
        />
        <Results value={ query.toLowerCase() }/>
      </Container>
    </ModalContent>
  )
}

export default Search