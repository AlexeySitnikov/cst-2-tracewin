import { useState } from 'react'

export const useSelectedFiles = () => {
  const [selectedFiles, setSelectedFiles] = useState([])

  return { selectedFiles, setSelectedFiles }
}
