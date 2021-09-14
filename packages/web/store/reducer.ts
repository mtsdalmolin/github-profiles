import { combineReducers } from '@reduxjs/toolkit'
import counter from '@react-boilerplate/store/slices/counter'

const rootReducer = combineReducers({
  counter
})

export default rootReducer