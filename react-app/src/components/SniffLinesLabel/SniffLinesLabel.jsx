import { useDispatch, useSelector } from 'react-redux'
import style from './style.module.css'
import { changeLinesToBePreloaded } from '../../Redux/Slices/setings/settingsSlice'

export function SniffLinesLabel() {
  const settings = useSelector((store) => store.settings)
  const dispatch = useDispatch()

  const onChangeLinesToBePreloadHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (Number(e.target.value) === 0) {
      dispatch(changeLinesToBePreloaded(1))
    } else {
      dispatch(changeLinesToBePreloaded(Number(e.target.value)))
    }
  }

  return (
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
  )
}
