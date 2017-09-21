import { combineReducers } from 'redux'
import inputs from './inputs'
import subinputs from './subinputs'

const formBuilder = combineReducers({
  inputs,
  subinputs
})

export default formBuilder
