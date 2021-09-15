import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@github-profiles/web/store'

import UserType from '../../types/UserType'

// Define a type for the slice state
type UserState = UserType | null

// Define the initial state using that type
const initialState: UserState = null

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action) => {
      return action.payload.user
    }
  },
})

export const { setUser } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user ?? {}

export default userSlice.reducer