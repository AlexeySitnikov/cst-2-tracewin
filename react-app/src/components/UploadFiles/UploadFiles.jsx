import { useContext, useRef } from 'react'
import { useDispatch } from 'react-redux'
import style from './style.module.css'
import { SelectedFilesContext } from '../../contexts/SelectedFilesContext'
import { resetBody } from '../../Redux/Slices/body/bodySlice'
import { resetBorders } from '../../Redux/Slices/borders/bordersSlice'
import { resetProgressBar } from '../../Redux/Slices/progressBar/progressBarSlice'

export function UploadFiles() {
  const pickerRef = useRef(null)
  const { setSelectedFiles } = useContext(SelectedFilesContext)
  const dispatch = useDispatch()

  const pickFileHandler = () => {
    pickerRef.current.click()
  }

  const clickHandlerFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files).map((file) => ({ file })))
    dispatch(resetBody())
    dispatch(resetBorders())
    dispatch(resetProgressBar())
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
