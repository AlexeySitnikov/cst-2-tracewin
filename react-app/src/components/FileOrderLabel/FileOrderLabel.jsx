import { useDispatch } from 'react-redux'
import style from './style.module.css'
import { setFilesOrder } from '../../Redux/Slices/analyzedFiles/analyzedFilesSlice'
import { resetBorders } from '../../Redux/Slices/borders/bordersSlice'
import { resetBody } from '../../Redux/Slices/body/bodySlice'
import { resetProgressBar } from '../../Redux/Slices/progressBar/progressBarSlice'

export function FileOrderLabel({ file }) {
  const dispatch = useDispatch()

  const onChangeFilesOrderHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const fileOrder = Number(e.target.value)
    const fileName = file.file
    dispatch(setFilesOrder({ fileOrder, fileName }))
    dispatch(resetBorders())
    dispatch(resetBody())
    dispatch(resetProgressBar())
  }
  return (
    <label htmlFor="fileOrder">
      Is it correct file order?
      <input
        className={style.in}
        type="number"
        id="fileOrder"
        name="fileOrder"
        min="1"
        max="100"
        lang="en-US"
        defaultValue={file.fileOrder}
        onChange={onChangeFilesOrderHandler}
      />
    </label>
  )
}
