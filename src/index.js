import React, { StrictMode } from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import App from './components'
import store from './redux/store'


ReactDOM.render(
  <Provider store={ store }>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById('root')
)
