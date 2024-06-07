// import { useContext } from 'react'
import { TxtReader } from 'txt-reader'
// import { useDispatch } from 'react-redux'
// import { SelectedFilesContext } from '../../contexts/SelectedFilesContext'
import { setProgressBar } from '../../Redux/Slices/progressBar/progressBarSlice'

export function getLinesByNumber(selectedFiles, file, index, dispatch) {
  // const { selectedFiles } = useContext(SelectedFilesContext)
  const currentIndex = selectedFiles.findIndex((el) => el.file.name === file.file)
  // const dispatch = useDispatch()

  return (
    new Promise((resolve, reject) => {
      let lineCount = 0
      let responce = {}
      const startLine = file.linesToBeDeleted ? file.linesToBeDeleted + 1 : 1
      const reader = new TxtReader()
      reader.loadFile(selectedFiles[currentIndex].file).progress((progress) => {
        if (index === 0) {
          dispatch(setProgressBar(Math.round(progress)))
          // console.log(Math.round(progress))
        }
      })
        .then((r) => {
          lineCount = r.result.lineCount
          reader.getSporadicLines([startLine, {
            start: (file.type === '1D')
              ? (r.result.lineCount - 1) : r.result.lineCount,
            count: 1,
          }])
            .then((result) => {
              responce = { ...result, type: file.type }
              if (index !== 0) { resolve(responce) }
            })
            .catch((er) => { reject(er) })
        })
        .then(() => {
          if (index === 0) {
            reader.getLines(startLine, Math.round(lineCount / 10))
              .progress((progress) => (
                dispatch(setProgressBar(Math.round(progress)))
                // console.log(Math.round(progress))
              ))
              .then((lines) => {
                responce = { ...responce, lines }
                resolve(responce)
              })
          }
        })
    })
  )
}
