import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Tabs } from '../../components/Tabs/Tabs'
import style from './style.module.css'
import { sniffFiles } from '../../components/constrains/sniffFiles'
import { setAnalyzedFiles } from '../../Redux/Slices/analyzedFiles/analyzedFilesSlice'

export function PreReadFilesPage() {
  const selectedFiles = useSelector((store) => store.selectedFiles)
  const dispatch = useDispatch()
  const stringsToSniff = 5

  useEffect(() => {
    async function functionToSniffFiles() {
      const responce = await sniffFiles({ selectedFiles, stringsToSniff })
      return responce
    }
    if (selectedFiles.length > 0) {
      functionToSniffFiles().then(
        (result) => {
          dispatch(setAnalyzedFiles({ selectedFiles, result }))
        },
      )
    }
  }, [...selectedFiles])

  if (selectedFiles.length > 0) {
    return (
      <Tabs />
    )
  }
  return (
    <div className={style.mainPage}>
      <Link to="/">Upload files</Link>
    </div>
  )
}
