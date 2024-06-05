import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UploadFiles } from '../../components/UploadFiles/UploadFiles'
import { SelectedFilesContext } from '../../contexts/SelectedFilesContext'
import { Button } from '../../components/Buttons/Button'
import style from './style.module.css'

export function MainPage() {
  const { selectedFiles } = useContext(SelectedFilesContext)
  const navigate = useNavigate()

  const onNextClickButtonFunction = () => {
    navigate('read')
  }

  return (
    <div className={style.container}>
      <UploadFiles />
      {(selectedFiles.length > 0) ? <Button buttonName="Next" onClickFunction={onNextClickButtonFunction} /> : null}
    </div>
  )
}
