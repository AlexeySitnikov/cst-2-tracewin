import { configureStore } from '@reduxjs/toolkit'
import { selectedFilesReducer } from './Slices/selectedFiles/selectedFilesSlice'
import { analyzedFilesReducer } from './Slices/analyzedFiles/analyzedFilesSlice'

export const store = configureStore({
  reducer: {
    selectedFiles: selectedFilesReducer,
    analyzedFiles: analyzedFilesReducer,
  },
})
