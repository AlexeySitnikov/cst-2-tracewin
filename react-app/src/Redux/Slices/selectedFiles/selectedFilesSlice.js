import { createSlice } from '@reduxjs/toolkit'

export const selectedFilesSlice = createSlice({
  name: 'selectedFiles',
  initialState: [],
  reducers: {
    setSelectedFiles(state, action) {
      state.push(action.payload)
    },
    show(state) {
      console.log(state)
    },
  },
})

export const {
  setSelectedFiles, show,
} = selectedFilesSlice.actions

export const selectedFilesReducer = selectedFilesSlice.reducer
