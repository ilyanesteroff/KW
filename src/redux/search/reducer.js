import SEARCH_ACTION_TYPES from './types'

const name = new URLSearchParams(window.location.search).get('name')

const initialState = {
  keyword: name || '',
  opened: Boolean(name && name.length > 0)
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case SEARCH_ACTION_TYPES.CLOSE_SEARCH:
      return {
        ...state,
        opened: false,
        keyword: ''
      }
    case SEARCH_ACTION_TYPES.OPEN_SEARCH:
      return {
        ...state,
        opened: true
      }
    case SEARCH_ACTION_TYPES.ON_CHANGE:
      return {
        ...state, 
        keyword: action.keyword
      }
    default:
      return state
  }
}

export default reducer