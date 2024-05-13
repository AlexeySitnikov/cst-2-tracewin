import { createSlice } from '@reduxjs/toolkit'

export const selectedFilesSlice = createSlice({
  name: 'selectedFiles',
  initialState: [],
  reducers: {
    setSelectedFiles(state, action) {
      state.splice(0, state.length)
      state.push(...action.payload)
    },
  },
})

export const {
  setSelectedFiles,
} = selectedFilesSlice.actions

export const selectedFilesReducer = selectedFilesSlice.reducer
