import { useRef } from 'react'
// import { useDispatch } from 'react-redux'
import style from './style.module.css'
// import { setSelectedFiles, show } from '../../Redux/Slices/selectedFiles/selectedFilesSlice'

export function UploadFiles() {
  // const selectedFiles = useSelector((store) => store.selectedFiles)
  // const dispatch = useDispatch()
  const pickerRef = useRef(null)

  const pickFileHandler = () => {
    pickerRef.current.click()
  }

  const clickHandlerFileChange = (e) => {
    console.log(Array.from(e.target.files))
    // console.log(selectedFiles)
    // Array.from(e.target.files).forEach((file) => (dispatch(setSelectedFiles(file))))
    // dispatch(setSelectedFiles([...]))
    // dispatch(show())
  }

  return (
    <div className={style.container}>
      <div>
        <input type="file" onChange={clickHandlerFileChange} ref={pickerRef} className={style.hiddenInput} multiple />
      </div>
      <br />
      <div>
        <button className={style.button} type="button" onClick={pickFileHandler}>
          Upload files
        </button>
      </div>
    </div>
  )
}
