import React from 'react'


const SearchBar = (props) => {
  return(
    <input 
      type="text"
      { ...props }
    />
  )
}

export default SearchBar