import { configureStore } from '@reduxjs/toolkit'
import { selectedFilesReducer } from './Slices/selectedFiles/selectedFilesSlice'

export const store = configureStore({
  reducer: {
    selectedFiles: selectedFilesReducer,
  },
})
