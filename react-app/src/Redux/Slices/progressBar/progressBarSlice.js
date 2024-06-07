import { createSlice } from '@reduxjs/toolkit'

export const progressBarSlice = createSlice({
  name: 'progressBar',
  initialState: 0,
  reducers: {
    setProgressBar(state, action) {
      return action.payload
    },
    resetProgressBar() {
      return 0
    },
  },
})

export const { setProgressBar, resetProgressBar } = progressBarSlice.actions

export const progressBarReducer = progressBarSlice.reducer
