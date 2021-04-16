import React from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { openSearch } from '../../../redux/actions'


const Main = ({ top = false }) => {
  const dispatch = useDispatch()

  const open = () => dispatch(openSearch())

  return top
    ? <IconAndLabel onClick={ open }/>
    : <SearchInMenu onClick={ open }/>
}

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