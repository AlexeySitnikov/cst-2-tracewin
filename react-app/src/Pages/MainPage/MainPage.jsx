import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UploadFiles } from '../../components/UploadFiles/UploadFiles'
import { SelectedFilesContext } from '../../contexts/SelectedFilesContext'
import { Button } from '../../components/Buttons/Button'
import style from './style.module.css'
import { sniffFiles } from '../../components/constrains/sniffFiles'
import { setAnalyzedFiles } from '../../Redux/Slices/analyzedFiles/analyzedFilesSlice'

export function MainPage() {
  const { selectedFiles } = useContext(SelectedFilesContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const settings = useSelector((store) => store.settings)
  const stringsToSniff = (Number.isFinite(settings.linesToBePreload)
  && settings.linesToBePreload > 0) ? settings.linesToBePreload : 5

  const onNextClickButtonFunction = () => {
    navigate('read')
  }

  useEffect(() => {
    async function functionToSniffFiles() {
      const responce = await sniffFiles({ selectedFiles, stringsToSniff })
      return responce
    }
    if (selectedFiles.length > 0) {
      functionToSniffFiles().then(
        (result) => {
          const selectedFilesNames = Array.from(selectedFiles).map((element) => (element.file.name))
          dispatch(setAnalyzedFiles({ selectedFilesNames, result }))
        },
      )
    }
  }, [selectedFiles])

  return (
    <div className={style.container}>
      <UploadFiles />
      {(selectedFiles.length > 0) ? <Button buttonName="Next" onClickFunction={onNextClickButtonFunction} /> : null}
    </div>
  )
}
