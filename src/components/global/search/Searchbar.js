import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { search } from '../../../redux/selectors'


const SearchBar = () => {
  const { keyword } = useSelector(search)
  const history = useHistory()
  const [ value, setValue ] = useState(keyword)
 
  useEffect(() => {
    const params = new URLSearchParams()
    value
      ? params.append('name', value)
      : params.delete('name')
      
    history.push({ search: params.toString() })
  }, [ value, history ])

  return(
    <input 
      id="searchbar"
      type="text"
      value={ value }
      onFocus={() => console.log('focus')}
      onChange={(e) => setValue(e.target.value)}
      autoFocus
    />
  )
}

export default SearchBar



  // const input = useRef(null)

  // useEffect(() => {
  //   if(input.current) {
  //     console.log('mounts')
  //     input.current.focus()
  //   }
  // }, [])