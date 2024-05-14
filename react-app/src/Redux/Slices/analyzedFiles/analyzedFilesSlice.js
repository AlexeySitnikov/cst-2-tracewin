import { createSlice } from '@reduxjs/toolkit'

export const analyzedFilesSlice = createSlice({
  name: 'analyzedFiles',
  initialState: [],
  reducers: {
    setAnalyzedFiles(state, action) {
      state.splice(0, state.length)
      const { selectedFiles } = action.payload
      const { result: analyzedFiles } = action.payload
      analyzedFiles.forEach((element) => {
        const currentIndex = selectedFiles.findIndex((el) => el.file.name === element.name)
        if (currentIndex !== -1) {
          const data = {
            file: selectedFiles[currentIndex].file,
            data: element.data,
            fileOrder: element.fileOrder,
            linesToBeDeleted: element.linesToBeDeleted,
            path: element.path,
            type: element.type,
            linesToBePreload: element.linesToBePreload,
            field: 'EField',
          }
          state.push(data)
        }
      })
    },
  },
})

export const {
  setAnalyzedFiles,
} = analyzedFilesSlice.actions

export const analyzedFilesReducer = analyzedFilesSlice.reducer
