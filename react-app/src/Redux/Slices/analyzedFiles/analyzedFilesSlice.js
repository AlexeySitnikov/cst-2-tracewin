import { createSlice } from '@reduxjs/toolkit'

export const analyzedFilesSlice = createSlice({
  name: 'analyzedFiles',
  initialState: [],
  reducers: {
    setAnalyzedFiles(state, action) {
      state.splice(0, state.length)
      state.push(...action.payload)
    },
  },
})

export const {
  setAnalyzedFiles,
} = analyzedFilesSlice.actions

export const selectedFilesReducer = analyzedFilesSlice.reducer
