import { useState } from 'react'
import { exportFileExtension } from '../components/constrains/exportFileExtension'

export const useExportFileExtension = () => {
  const [fileExtension, setFileExtension] = useState(exportFileExtension.staticElectricField)

  return { fileExtension, setFileExtension }
}
