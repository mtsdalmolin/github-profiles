import { combineReducers } from '@reduxjs/toolkit'
import user from '@github-profiles/store/slices/user'

const rootReducer = combineReducers({
  user
})

export default rootReducer
