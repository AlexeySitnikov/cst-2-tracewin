import { useDispatch } from 'react-redux'
import style from './style.module.css'
import { setNumberOfDeletedStrings } from '../../Redux/Slices/analyzedFiles/analyzedFilesSlice'

export function CountLabel({ file }) {
  const dispatch = useDispatch()

  const onChangeLinesToBeDeletedHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const linesToBeDeleted = Number(e.target.value)
    const fileName = file.file
    dispatch(setNumberOfDeletedStrings({ linesToBeDeleted, fileName }))
  }

  return (
    <label htmlFor="Count">
      Count
      <input
        className={style.in}
        type="number"
        id="Count"
        name="Count"
        min="0"
        max="100"
        defaultValue={file.linesToBeDeleted}
        lang="en-US"
        onChange={onChangeLinesToBeDeletedHandler}
      />
    </label>
  )
}
