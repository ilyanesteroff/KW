import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery } from '../../../../helpers/hooks'
import SearchBar from './Searchbar'
import Container from '../../../../styles/search/main'


const Search = () => {
  const query = useQuery('name')
  const [ value, setValue ] = useState(query)
  const history = useHistory()

  useEffect(() => {
    const params = new URLSearchParams()
    value
      ? params.append("name", value)
      : params.delete("name")
    history.push({ search: params.toString() })
  }, [ value, history ])

  return(
    <Container>
      <SearchBar
        value={ value }
        onChange={(e) => setValue(e.target.value)}
      />
    </Container>
  )
}

export default Search