import { createStore, combineReducers } from 'redux'
import modal from './modal/reducer'
import search from './search/reducer'


const rootReducer = combineReducers({ modal, search })

const store = createStore(rootReducer)

export default store