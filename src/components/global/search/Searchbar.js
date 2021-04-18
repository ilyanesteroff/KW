import React from 'react'


const SearchBar = (props) => (
  <input 
    id="searchbar"
    type="text"
    { ...props }
    autoFocus
  />
)


export default SearchBar