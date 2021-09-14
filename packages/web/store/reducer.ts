import { combineReducers } from '@reduxjs/toolkit'
import counter from '@github-profiles/store/slices/counter'

const rootReducer = combineReducers({
  counter
})

export default rootReducer
