import React from 'react'
import {render} from 'react-dom'
import {applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import App from './Components/App'
import reducer from './Reducers'
import {loadState, saveState} from './localStorage'
//import {throttle} from 'lodash/throttle'
//remember use throttle for saving state every one second,
//not every time state is changed

//import {addInput} from './Actions'

const persistedState = loadState()
const store = createStore(
  reducer,
  persistedState,
  applyMiddleware(logger)
)

store.subscribe(() => {
  saveState({
    inputs: store.getState().inputs
  })
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

//store.dispatch(addInput('Hello World', 'yes/no'))
