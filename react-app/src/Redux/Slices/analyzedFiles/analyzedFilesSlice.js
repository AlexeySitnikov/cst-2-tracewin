import { createSlice } from '@reduxjs/toolkit'

export const analyzedFilesSlice = createSlice({
  name: 'analyzedFiles',
  initialState: [],
  reducers: {
    setAnalyzedFiles(state, action) {
      state.splice(0, state.length)
      const { selectedFilesNames: selectedFiles } = action.payload
      const { result: analyzedFiles } = action.payload
      analyzedFiles.forEach((element) => {
        const currentIndex = selectedFiles.findIndex((el) => el === element.name)
        if (currentIndex !== -1) {
          const data = {
            file: selectedFiles[currentIndex],
            data: element.data,
            fileOrder: element.fileOrder,
            linesToBeDeleted: element.linesToBeDeleted,
            path: element.path,
            type: element.type,
          }
          state.push(data)
        }
      })
    },

    setNumberOfDeletedStrings(state, action) {
      const { fileName, linesToBeDeleted } = action.payload

      const currentIndex = state.findIndex((el) => el.file === fileName)
      if (currentIndex !== -1) {
        const data = {
          file: state[currentIndex].file,
          data: state[currentIndex].data,
          fileOrder: state[currentIndex].fileOrder,
          linesToBeDeleted,
          path: state[currentIndex].path,
          type: state[currentIndex].type,
        }
        state.splice(currentIndex, 1, data)
      }
    },

    setFilesOrder(state, action) {
      const { fileName, fileOrder } = action.payload
      const currentIndex = state.findIndex((el) => el.file === fileName)
      if (currentIndex !== -1) {
        const data = {
          file: state[currentIndex].file,
          data: state[currentIndex].data,
          fileOrder,
          linesToBeDeleted: state[currentIndex].linesToBeDeleted,
          path: state[currentIndex].path,
          type: state[currentIndex].type,
        }
        state.splice(currentIndex, 1, data)
      }
    },

    resetAnalyzedFiles() {
      return []
    },
  },
})

export const {
  setAnalyzedFiles, resetAnalyzedFiles, setNumberOfDeletedStrings, setFilesOrder,
} = analyzedFilesSlice.actions

export const analyzedFilesReducer = analyzedFilesSlice.reducer
