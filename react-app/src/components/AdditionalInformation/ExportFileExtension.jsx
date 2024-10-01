import { useDispatch } from 'react-redux'
import style from './style.module.css'
import { changeExportFileExtension } from '../../Redux/Slices/setings/settingsSlice'

export function ExportFileExtension() {
  const dispatch = useDispatch()

  const onChangeClickHandler = (e) => {
    dispatch(changeExportFileExtension(e.target.value))
  }

  return (
    <div className={style.selectOption}>
      <label htmlFor="fileExtension">
        Choose a export file extension:
        <select
          name="fileExtension"
          id="fileExtension"
          defaultValue="staticElectricField"
          onChange={(e) => onChangeClickHandler(e)}
        >
          <option value="staticElectricField">Static electric field</option>
          <option value="staticMagneticField">Static magnetic field</option>
          <option value="rFElectricField">RF electric field</option>
          <option value="rFMagneticField">RF magnetic field</option>
        </select>
      </label>
    </div>
  )
}
