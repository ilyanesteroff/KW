import SEARCH_ACTION_TYPES from './types'

const name = new URLSearchParams(window.location.search).get('name')

const initialState = {
  opened: Boolean(name && name.length > 0)
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case SEARCH_ACTION_TYPES.CLOSE_SEARCH:
      return {
        ...state,
        opened: false
      }
    case SEARCH_ACTION_TYPES.OPEN_SEARCH:
      return {
        ...state,
        opened: true
      }
    default:
      return state
  }
}

export default reducer