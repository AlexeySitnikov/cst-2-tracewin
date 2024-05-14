import { useState } from 'react'
import style from './style.module.css'

export function FieldCheckBox() {
  const [field, setField] = useState(true)

  const onChangeCheckBoxHandler = () => {
    if (!field) { console.log('EField') } else { console.log('BField') }
    setField(!field)
  }

  return (
    <div className={style.EOrBFieldCheckBox}>
      <p>
        <label htmlFor="EField">
          <input type="checkbox" id="EField" onChange={onChangeCheckBoxHandler} checked={field} />
          E field
        </label>
      </p>
      <p>
        <label htmlFor="BField">
          <input type="checkbox" id="BField" onChange={onChangeCheckBoxHandler} checked={!field} />
          B field
        </label>
      </p>
    </div>
  )
}
