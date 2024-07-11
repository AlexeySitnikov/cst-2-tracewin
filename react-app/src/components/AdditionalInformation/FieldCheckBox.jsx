import { useDispatch, useSelector } from 'react-redux'
import style from './style.module.css'
import { changeField } from '../../Redux/Slices/setings/settingsSlice'

export function FieldCheckBox() {
  const settings = useSelector((store) => store.settings)
  const type = useSelector((store) => store.analyzedFiles)
  const dispatch = useDispatch()

  const onChangeCheckBoxHandler = () => {
    dispatch(changeField())
  }

  return (
    <div className={style.EOrBFieldCheckBox}>
      <p>
        <label htmlFor="EField">
          <input type="checkbox" id="EField" onChange={onChangeCheckBoxHandler} checked={settings.field === 'EField'} />
          E field
        </label>
      </p>
      <p>
        <label htmlFor="BField">
          <input type="checkbox" id="BField" onChange={onChangeCheckBoxHandler} checked={settings.field === 'BField'} />
          {type[0].type === 'EM' ? 'D field' : 'B field'}
        </label>
      </p>
    </div>
  )
}
