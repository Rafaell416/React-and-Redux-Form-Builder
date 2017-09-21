import React from 'react'
import {render} from 'react-dom'
import {applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import App from './Components/App'
import reducer from './Reducers'
//import {addInput} from './Actions'

const store = createStore(
  reducer,
  applyMiddleware(logger)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

//store.dispatch(addInput('Hello World', 'yes/no'))
