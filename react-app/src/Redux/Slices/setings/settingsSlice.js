import { createSlice } from '@reduxjs/toolkit'

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    field: 'EField',
    linesToBePreload: 5,
    addLimits: true,
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
  },
})

export const {
  changeField, changeAddLimits, changeLinesToBePreloaded,
} = settingsSlice.actions

export const settingsReducer = settingsSlice.reducer
