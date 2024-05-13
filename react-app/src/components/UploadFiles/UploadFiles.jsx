import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import style from './style.module.css'
import { setSelectedFiles } from '../../Redux/Slices/selectedFiles/selectedFilesSlice'

export function UploadFiles() {
  const dispatch = useDispatch()
  const pickerRef = useRef(null)

  const pickFileHandler = () => {
    pickerRef.current.click()
  }

  const clickHandlerFileChange = (e) => {
    dispatch(setSelectedFiles(Array.from(e.target.files).map((file) => ({ file }))))
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
