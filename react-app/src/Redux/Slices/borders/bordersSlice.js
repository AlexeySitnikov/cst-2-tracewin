import { createSlice } from '@reduxjs/toolkit'

export const bordersSlice = createSlice({
  name: 'borders',
  initialState: null,

  reducers: {
    setBorderString(state, action) {
      return action.payload
    },
    getBorderString(state) {
      return state
    },
    resetBorders() {
      return null
    },
  },
})

export const {
  setBorderString, getBorderString, resetBorders,
} = bordersSlice.actions

export const bordersReducer = bordersSlice.reducer
