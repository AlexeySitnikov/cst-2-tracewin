import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import style from './style.module.css'
import { AdditionalInformation } from '../../components/AdditionalInformation/AdditionalInformation'
import { Button } from '../../components/Buttons/Button'

export function FileInformationPage() {
  const analyzedFiles = useSelector((store) => store.analyzedFiles)

  const navigate = useNavigate()

  const onBackClickHandler = () => {
    navigate('/read')
  }

  if (analyzedFiles.length > 0) {
    return (
      <div className={style.container}>
        <AdditionalInformation />
      </div>
    )
  }

  return (
    <div className={style.container}>
      <div className={style.buttonsContainer}>
        <Button buttonName="Back" onClickFunction={onBackClickHandler} />
      </div>
    </div>
  )
}
