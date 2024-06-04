/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react'
import { useSelectedFiles } from '../hooks/useSelectedFiles'

export const SelectedFilesContext = React.createContext()

export function SelectedFilesProvider({ children }) {
  const { selectedFiles, setSelectedFiles } = useSelectedFiles()
  return (
    <SelectedFilesContext.Provider value={{ selectedFiles, setSelectedFiles }}>
      {children}
    </SelectedFilesContext.Provider>
  )
}
