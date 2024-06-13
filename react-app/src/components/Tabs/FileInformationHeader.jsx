import { useDispatch, useSelector } from 'react-redux'
import style from './style.module.css'
import { changeLinesToBePreloaded } from '../../Redux/Slices/setings/settingsSlice'
import { setFilesOrder, setNumberOfDeletedStrings } from '../../Redux/Slices/analyzedFiles/analyzedFilesSlice'
import { resetBorders } from '../../Redux/Slices/borders/bordersSlice'
import { resetBody } from '../../Redux/Slices/body/bodySlice'
import { resetProgressBar } from '../../Redux/Slices/progressBar/progressBarSlice'

export function FileInformationHeader({ file }) {
  const settings = useSelector((store) => store.settings)
  const dispatch = useDispatch()

  const onChangeLinesToBePreloadHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(changeLinesToBePreloaded(Number(e.target.value)))
  }

  const onChangeLinesToBeDeletedHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const linesToBeDeleted = Number(e.target.value)
    const fileName = file.file
    dispatch(setNumberOfDeletedStrings({ linesToBeDeleted, fileName }))
  }

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
    <div>
      <p>{`File name: ${file.file}`}</p>
      <div>
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
      </div>
      <div>
        <label htmlFor="sniffLinesFromFiles">
          How many lines preload from files
          <input
            className={style.in}
            type="number"
            id="sniffLinesFromFiles"
            name="sniffLinesFromFiles"
            min="1"
            max="100"
            lang="en-US"
            defaultValue={settings.linesToBePreload}
            onChange={onChangeLinesToBePreloadHandler}
          />
        </label>
      </div>
      <fieldset>
        <legend>How many lines should be deleted</legend>
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

      </fieldset>
    </div>
  )
}
