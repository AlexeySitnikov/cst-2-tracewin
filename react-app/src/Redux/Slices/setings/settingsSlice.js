import { createSlice } from '@reduxjs/toolkit'
import { exportFileExtension } from '../../../components/constrains/exportFileExtension'

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    field: 'EField',
    linesToBePreload: 5,
    addLimits: true,
    fileExtension: exportFileExtension.staticElectricField,
  },

  reducers: {
    changeField(state) {
      if (state.field === 'EField') {
        return {
          ...state,
          field: 'BField',
        }
      }
      return {
        ...state,
        field: 'EField',
      }
    },
    changeAddLimits(state) {
      return {
        ...state,
        addLimits: !state.addLimits,
      }
    },
    changeLinesToBePreloaded(state, action) {
      return {
        ...state,
        linesToBePreload: action.payload,
      }
    },
    changeExportFileExtension(state, action) {
      return {
        ...state,
        fileExtension: exportFileExtension[action.payload],
      }
    },
  },
})

export const {
  changeField, changeAddLimits, changeLinesToBePreloaded, changeExportFileExtension,
} = settingsSlice.actions

export const settingsReducer = settingsSlice.reducer
