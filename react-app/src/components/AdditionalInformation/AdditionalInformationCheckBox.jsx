import { useDispatch, useSelector } from 'react-redux'
import style from './style.module.css'
import { changeAddLimits } from '../../Redux/Slices/setings/settingsSlice'

export function AdditionalInformationCheckBox() {
  const settings = useSelector((store) => store.settings)
  const dispatch = useDispatch()

  const onChangeCheckBoxHandler = () => {
    dispatch(changeAddLimits())
  }

  return (
    <div className={style.additionalInformationCheckBox}>
      <p>
        <label htmlFor="Yes">
          <input type="checkbox" id="Yes" onChange={onChangeCheckBoxHandler} checked={settings.addLimits} />
          Yes
        </label>
      </p>
      <p>
        <label htmlFor="No">
          <input type="checkbox" id="No" onChange={onChangeCheckBoxHandler} checked={!settings.addLimits} />
          No
        </label>
      </p>
    </div>
  )
}
