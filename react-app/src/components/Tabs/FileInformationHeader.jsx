import { useDispatch, useSelector } from 'react-redux'
import style from './style.module.css'
import { changeLinesToBePreloaded } from '../../Redux/Slices/setings/settingsSlice'

export function FileInformationHeader({ file }) {
  const settings = useSelector((store) => store.settings)
  const dispatch = useDispatch()

  const onChangeLinesToBePreloadHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(e.target.value)
    dispatch(changeLinesToBePreloaded(e.target.value))
  }

  return (
    <div>
      <p>{`File name: ${file.file.name}`}</p>
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
          />
        </label>

      </fieldset>
    </div>
  )
}
