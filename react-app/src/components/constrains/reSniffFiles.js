import { setAnalyzedFiles } from '../../Redux/Slices/analyzedFiles/analyzedFilesSlice'
import { functionToSniffFiles } from './functionToSniffFiles'

export function reSniffFiles({ dispatch, selectedFiles, settings }) {
  if (selectedFiles.length > 0) {
    functionToSniffFiles({ selectedFiles, settings }).then(
      (result) => {
        const selectedFilesNames = Array.from(selectedFiles).map((element) => (element.file.name))
        dispatch(setAnalyzedFiles({ selectedFilesNames, result }))
      },
    )
  }
}
