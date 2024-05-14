import { useState } from 'react'
import style from './style.module.css'

export function AdditionalInformationCheckBox() {
  const [limits, setLimits] = useState(true)

  const onChangeCheckBoxHandler = () => {
    if (!limits) { console.log('Yes') } else { console.log('No') }
    setLimits(!limits)
  }

  return (
    <div className={style.additionalInformationCheckBox}>
      <p>
        <label htmlFor="Yes">
          <input type="checkbox" id="Yes" onChange={onChangeCheckBoxHandler} checked={limits} />
          Yes
        </label>
      </p>
      <p>
        <label htmlFor="No">
          <input type="checkbox" id="No" onChange={onChangeCheckBoxHandler} checked={!limits} />
          No
        </label>
      </p>
    </div>
  )
}
