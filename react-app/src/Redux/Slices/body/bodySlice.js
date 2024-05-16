import { createSlice } from '@reduxjs/toolkit'

export const bodySlice = createSlice({
  name: 'body',
  initialState: {
  },

  reducers: {
    setBody(state, action) {
      return action.payload
    },

  },
})

export const {
  setBody,
} = bodySlice.actions

export const bodyReducer = bodySlice.reducer
