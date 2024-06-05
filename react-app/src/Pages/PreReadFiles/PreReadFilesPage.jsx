import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { Tabs } from '../../components/Tabs/Tabs'
import style from './style.module.css'
import { sniffFiles } from '../../components/constrains/sniffFiles'
import { setAnalyzedFiles } from '../../Redux/Slices/analyzedFiles/analyzedFilesSlice'
import { SelectedFilesContext } from '../../contexts/SelectedFilesContext'
import { Button } from '../../components/Buttons/Button'

export function PreReadFilesPage() {
  // const selectedFiles = useSelector((store) => store.selectedFiles)
  const { selectedFiles } = useContext(SelectedFilesContext)
  const dispatch = useDispatch()
  const stringsToSniff = 5
  const navigate = useNavigate()

  const onNextClickButtonFunction = () => {
    navigate('/analyze')
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
  }, [...selectedFiles])

  if (selectedFiles.length > 0) {
    return (
      <div className={style.container}>
        <Tabs />
        {(selectedFiles.length > 0) ? <Button buttonName="Next" onClickFunction={onNextClickButtonFunction} /> : null}
      </div>
    )
  }
  return (
    <div className={style.mainPage}>
      <Link to="/">Upload files</Link>
    </div>
  )
}
