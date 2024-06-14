import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UploadFiles } from '../../components/UploadFiles/UploadFiles'
import { SelectedFilesContext } from '../../contexts/SelectedFilesContext'
import { Button } from '../../components/Buttons/Button'
import style from './style.module.css'
import { reSniffFiles } from '../../components/constrains/reSniffFiles'

export function MainPage() {
  const { selectedFiles } = useContext(SelectedFilesContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  console.log('render mainPage')

  const settings = useSelector((store) => store.settings)

  const onNextClickButtonFunction = () => {
    navigate('read')
  }

  useEffect(() => {
    reSniffFiles({ dispatch, selectedFiles, settings })
  }, [selectedFiles])

  return (
    <div className={style.container}>
      <UploadFiles />
      {(selectedFiles.length > 0) ? <Button buttonName="Next" onClickFunction={onNextClickButtonFunction} /> : null}
    </div>
  )
}
