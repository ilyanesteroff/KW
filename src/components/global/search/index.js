import React from 'react'
import { useSearch } from '../../../helpers/hooks'
import SearchBar from './Searchbar'
import Container from '../../../../styles/search/main'


const Search = () => {
  const { keyword, setKeyword } = useSearch()

  return(
    <Container>
      <SearchBar
        value={ keyword }
        onChange={(e) => setKeyword(e.target.value)}
      />
    </Container>
  )
}

export default Search