import { createSlice } from '@reduxjs/toolkit'

export const bodySlice = createSlice({
  name: 'body',
  initialState: {
  },

  reducers: {
    setBody(state, action) {
      return action.payload
    },
    resetBody() {
      return {}
    },
  },
})

export const {
  setBody, resetBody,
} = bodySlice.actions

export const bodyReducer = bodySlice.reducer
