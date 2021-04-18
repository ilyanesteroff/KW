import MODAL_ACTION_TYPES from './modal/types'
import SEARCH_ACTION_TYPES from './search/types'


export const openModal = (url) => ({
  type: MODAL_ACTION_TYPES.OPEN_MODAL,
  url
})


export const closeModal = () => ({
  type: MODAL_ACTION_TYPES.CLOSE_MODAL
})


export const openSearch = () => ({
  type: SEARCH_ACTION_TYPES.OPEN_SEARCH
})


export const closeSearch = () => ({
  type: SEARCH_ACTION_TYPES.CLOSE_SEARCH
})
