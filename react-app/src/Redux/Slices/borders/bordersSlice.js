import { createSlice } from '@reduxjs/toolkit'

export const bordersSlice = createSlice({
  name: 'borders',
  initialState: null,

  reducers: {
    setBorderString(state, action) {
      return action.payload
    },
  },
})

export const {
  setBorderString,
} = bordersSlice.actions

export const bordersReducer = bordersSlice.reducer
