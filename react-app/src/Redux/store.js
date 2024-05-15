import { configureStore } from '@reduxjs/toolkit'
import { selectedFilesReducer } from './Slices/selectedFiles/selectedFilesSlice'
import { analyzedFilesReducer } from './Slices/analyzedFiles/analyzedFilesSlice'
import { settingsReducer } from './Slices/setings/settingsSlice'
import { bordersReducer } from './Slices/borders/bordersSlice'

export const store = configureStore({
  reducer: {
    selectedFiles: selectedFilesReducer,
    analyzedFiles: analyzedFilesReducer,
    settings: settingsReducer,
    borders: bordersReducer,
  },
})
