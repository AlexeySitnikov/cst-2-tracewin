import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import style from './style.module.css'
import { FieldCheckBox } from './FieldCheckBox'
import { AdditionalInformationCheckBox } from './AdditionalInformationCheckBox'
import { AdditionalInformationData } from './AddInformationData'
import { Button } from '../Buttons/Button'

export function AdditionalInformation() {
  const borderString = useSelector((store) => store.borders)
  const [loader, setLoader] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    if (borderString) {
      setLoader(false)
    }
  }, [borderString])

  const onNextClickHandler = () => {
    navigate('/make')
  }

  const onBackClickHandler = () => {
    navigate('/read')
  }

  return (
    <>
      <div className={style.Tabs}>
        <div className={style.additionalInformation}>
          Add this information into the files for TraceWin?
        </div>
        <br />
        <AdditionalInformationCheckBox />
        <br />
        <FieldCheckBox />
        <br />
        <AdditionalInformationData />
      </div>
      <div className={style.buttonsContainer}>
        <Button buttonName="Back" onClickFunction={onBackClickHandler} isActive={!loader} />
        {borderString ? <Button buttonName="Next" onClickFunction={onNextClickHandler} /> : null}
      </div>
      <br />
    </>
  )
}
