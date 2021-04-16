import validator from 'validator'
import MODAL_ACTION_TYPES from './types'

const getImage = () => {
  const image = new URLSearchParams(window.location.search).get('image')
  if(image && validator.isURL(image)) return image
  return ''
}

const initialState = {
  url: getImage()
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case MODAL_ACTION_TYPES.CLOSE_MODAL:
      return { url: '' }
    case MODAL_ACTION_TYPES.OPEN_MODAL:
      return { url: action.url }
    default:
      return state
  }
}

export default reducer