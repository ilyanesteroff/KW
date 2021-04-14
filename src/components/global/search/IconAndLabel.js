import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Main = ({ top = false }) => 
  top
    ? <IconAndLabel/>
    : <SearchInMenu/>


const IconAndLabel = (props) => {
  return(
    <div
      className="icon-label"
      id="search-top"
      { ...props }
    >
      <FontAwesomeIcon icon={ faSearch }/>
      <h3>Search</h3>
    </div>
  )
}


const SearchInMenu = (props) => (
  <div 
    id="search-control"
    { ...props }
  >Search</div>
)

export default Main